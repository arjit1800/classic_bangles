import './CarouselCard.css';
import bangle from '../../../../assets/images/bangle.png';
import cardImg from '../../../../assets/images/card-img.webp'
import Link from 'next/link';


export default function CarouselCard(props){
    return(
        <div className="carousel-card d-flex flex-column align-items-center position-relative overflow-hidden">
            <img src={props.img?props.img:bangle.src} alt="" className='bangle top img-fluid'/>
             <div className="img-wrapper d-flex">
               <img src={cardImg.src} alt="" className='img-fluid object-fit-cover'/>
             </div>
             {props.pname?<h5 className='prod-name'>{props.pname}</h5>:''}
             {props.pdesc?<p>{props.pdesc}</p>:<p>{props.desc}</p>}
             {props.rate?<span className='rate'>Rate : {props.rate}</span>:''}
             {props.name?<h5>{props.name}</h5>:''}
             {props.btn?<Link href="" className="custom-btn">Buy Product</Link>:""}
            <img src={bangle.src} alt="" className='bangle bottom img-fluid object-fit-cover'/>
        </div>
    )
}