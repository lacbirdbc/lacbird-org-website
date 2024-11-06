import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
    slides: React.ReactNode[]
    options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props: PropType) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 })
    ])

    return (
        <div className="w-96 min-h-96 bg-blue-10">
            <div className="overflow-hide" ref={emblaRef}>
                    {slides.map((node,index)=>(
                        <div className="touch-pan-y touch-pinch-zoom" key={index}>
                            {node}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Carousel
