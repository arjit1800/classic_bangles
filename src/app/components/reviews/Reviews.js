import './Reviews.css';
import ReviewCard from "../layout/review-card/ReviewCard";
import reviews from '@/Data/reviews';


export default function Reviews(){

    return(
        <section className="reviews section-padding">
            <div className="container">
                <h2>Our Happy Customers</h2>
                <div className="review-card-wrapper mt-5 d-flex flex-column flex-lg-row align-items-center gap-3 justify-content-center">
                   {reviews.map(review =>{
                      return <ReviewCard key = {review.sno}  reviewData = {review}/>
                   })}
                </div>
            </div>
        </section>
    );
}