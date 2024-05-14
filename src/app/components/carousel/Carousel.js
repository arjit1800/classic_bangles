"use client"
import OwlCarousel from '@ntegral/react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css';
import data from '@/Data/carouselData'
import CarouselCard from '../layout/carousel-card/CarouselCard';
import Link from 'next/link';
var $ = require("jquery");
    if (typeof window !== "undefined") {
       window.$ = window.jQuery = require("jquery");
}

const options = {
    loop: true,
    margin: 20,
    responsiveClass: true,
    stagePadding: 200,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },
        576: {
            items: 1,
            stagePadding: 0,
        },
        768: {
            items: 2,
            stagePadding: 100,
        },
        992: {
            items: 3,
            stagePadding: 100,
        },
    },
}


export default function Carousel(){
    return(
         <div className="carousel-wrapper section-padding">
            <OwlCarousel className="owl-theme" {...options}>
                {data.map((d,i=0)=>{
                    return(
                        <div class="item">
                            <Link href='/card-details' className="card-link">
                              <CarouselCard key={i++} name={d.name} desc={d.desc}/>
                            </Link>
                        </div>
                    )
                })}
            </OwlCarousel>
         </div>
    )
}