import ImageMagnify from '@/components/ImageMagnify'

export default function Home() {
  return (
    <div
      style={{
        width: '700px',
        height: '500px',
        margin: '10px auto'
      }}
    >
      <ImageMagnify 
        srcUrl='/image.jpg'
        alt='Womans day'
        priority={true}
        unoptimized={true}
        quality={100}
        magnifyWidth={200}
        magnifyHeight={200}
        zoomLevel={1.5}
      />
    </div>
      
  )
}
