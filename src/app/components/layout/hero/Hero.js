import hero from './Hero.css';

const Hero =(props)=>{
   return(
     <section className="hero">
        <div className="container h-100 d-flex flex-column justify-content-end">
            <div className="content">
                {props.children}
            </div>
        </div>
     </section>
   );
}

export default Hero;