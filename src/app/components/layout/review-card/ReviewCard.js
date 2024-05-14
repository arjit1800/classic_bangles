import './ReviewCard.css';
import bangle from '../../../../assets/images/bangle.png';

export default function ReviewCard(props){
    const {name,review} = props.reviewData;
    return(
        <div className="review-card d-flex flex-column align-items-center position-relative overflow-hidden">
            <img src={bangle.src} alt="" className='bangle top img'/>
             <p>{review}</p>
             <h5>{name}</h5>
            <img src={bangle.src} alt="" className='bangle bottom'/>
        </div>
    );
}