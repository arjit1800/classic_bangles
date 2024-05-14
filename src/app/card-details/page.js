import Hero from "../components/layout/hero/Hero";
import CarouselCard from "../components/layout/carousel-card/CarouselCard";
import prod_data from '@/Data/products';
import './page.css';
import Link from "next/link";

export default function page(){
    return(
        <>
        <Hero>
            <h2>Card Details Subheading</h2>
            <p>Add a little bit of body text</p>
            <Link href="/" className="custom-btn">Home</Link>
        </Hero>
        <div className="card-details section-padding">
            <div className="container">
                   <div className="row gy-4">
                   {prod_data.map((d,i=0)=>{
                           return(
                               <div class="col-lg-3 col-md-6">
                                   <CarouselCard key={i++} pname={d.pname} pdesc={d.pdesc} rate={d.rate} btn={true}/>
                               </div>
                           )
                       })}
                   </div>
            </div>
        </div>
        </>
    )
}