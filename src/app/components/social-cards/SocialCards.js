import './SocialCards.css';
import social from '../../../assets/images/social.jpg';

export default function SocialCards(){
    return(
        <div className="social-cards section-padding">
            <div className="container">
               <h2 className="text-center">#classicbangles</h2>
               <p>One of the most loved ethnic bangles in India, We make traditional INdian bangles fashionable</p>
                 <div className="row gy-4 mt-4">
                  <div className="col-lg-3 col-md-6">
                     <div className="social-card-wrapper">
                        <img src={social.src} alt="" className="img-fluid card-img"/>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="social-card-wrapper">
                        <img src={social.src} alt="" className="img-fluid card-img"/>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="social-card-wrapper">
                        <img src={social.src} alt="" className="img-fluid card-img"/>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="social-card-wrapper">
                        <img src={social.src} alt="" className="img-fluid card-img"/>
                     </div>
                  </div>
                 </div>
            </div>
        </div>
    )
}