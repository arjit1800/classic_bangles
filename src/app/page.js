import Link from "next/link.js";
import Carousel from "./components/carousel/Carousel.js";
import Contact from "./components/layout/contact/Contact.js";
import Hero from "./components/layout/hero/Hero.js";
import Reviews from "./components/reviews/Reviews.js";
import SocialCards from "./components/social-cards/SocialCards.js";
import page from './page.module.css';


export default function Home() {
  return (
    <>
     <Hero>
      <h2>Add a Subheading</h2>
      <p>Add a little bit of body text</p>
      <Link href="" className="custom-btn">Explore</Link>
     </Hero>
     <section className={`${page.about} section-padding`} id="about">
      <div className="container">
        <div className="row gy-4 align-items-center">
           <div className="col-md-6">
              <div className="about-heading">
                 <h1>Add a Heading</h1>
              </div>
           </div>
           <div className="col-md-6">
            <p>Add a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body textAdd a little bit of body text</p>
           </div>
        </div>
      </div>
     </section>
     <Carousel />
     <Reviews />
     <SocialCards />
     <Contact />
    </>
  );
}
