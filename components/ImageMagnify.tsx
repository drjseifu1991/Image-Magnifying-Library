import React, { useState } from 'react'
import Image from 'next/image'

// Data type Interface for props
interface IProps {
  srcUrl: string
  alt: string
  priority: boolean
  unoptimized: boolean
  quality: number
  magnifyWidth: number
  magnifyHeight: number
  zoomLevel: number
}

const ImageMagnify: React.FC<IProps> = ({
  srcUrl, 
  alt,
  priority,
  unoptimized,
  quality,
  magnifyWidth,
  magnifyHeight,
  zoomLevel
}: IProps) => {
  
  // States to manage Mouse Enter, move and Leave
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

  return (
    <div
      style={{
        width: '100%', 
        height: '100%', 
        position: 'relative'
      }}
    >
      {/* the image */}
      <Image
        src={srcUrl}
        alt={alt}
        priority={priority}
        unoptimized={unoptimized}
        quality={quality}
        fill
        style={{
          objectFit: 'contain'
        }}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
    }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
      />

      {/* a div for magnifier */}
      <div
        style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",

            // prevent magnifier blocks the mousemove event of img
            pointerEvents: "none",
            // set size of magnifier
            height: `${magnifyHeight}px`,
            width: `${magnifyWidth}px`,
            // move element center to cursor pos
            top: `${y - magnifyHeight / 2}px`,
            left: `${x - magnifyWidth / 2}px`,
            opacity: "1", // reduce opacity so you can verify position
            border: "1px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${srcUrl}')`,
            backgroundRepeat: "no-repeat",

            //calculate zoomed image size
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,

            //calculate position of zoomed image.
            backgroundPositionX: `${-x * zoomLevel + magnifyWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifyHeight / 2}px`
        }}
      />
    </div>
  )
}
export default ImageMagnify