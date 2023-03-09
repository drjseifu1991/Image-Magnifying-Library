import ImageMagnify from '@/components/ImageMagnify'

export default function Home() {
  return (
      <ImageMagnify 
        srcUrl='/image.jpg'
        alt='Womans day'
        imageWidth={700}
        imageHeight={500}
        magnifyWidth={200}
        magnifyHeight={200}
        zoomLevel={1.5}
      />
  )
}
