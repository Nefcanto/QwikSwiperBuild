import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik'
import swiperStyles from 'swiper/css?inline'
import Swiper, {
    Navigation,
    Pagination,
} from 'swiper'

const Index = component$(() => {

    useStyles$(swiperStyles)
    useVisibleTask$(() => {
        new Swiper(".swiper", {
            loop: false,
            modules: [Navigation, Pagination],
            slidesPerView: 3,
            spaceBetween: 10,
        })
    }, {
        strategy: 'document-ready'
    })

    return <>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 10</div>
                <div class="swiper-slide">Slide 20</div>
                <div class="swiper-slide">Slide 30</div>
                <div class="swiper-slide">Slide 100</div>
                <div class="swiper-slide">Slide 200</div>
                <div class="swiper-slide">Slide 300</div>
            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-scrollbar"></div>
        </div>
    </>
})

export default Index
