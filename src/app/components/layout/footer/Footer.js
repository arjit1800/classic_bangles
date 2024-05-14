import logo from '../../../../assets/images/classic-bangles-logo.jpg';
import footer from './Footer.css';
import fb from '../../../../assets/images/fb.webp';
import ig from '../../../../assets/images/ing.png';

const Footer =()=>{
  return(
      <footer>
          <div className="container links-container">
            <div className="row">
                <div className="col-md-5">
                    <a href="">
                        <img src={logo.src} alt="" width={'100px'} className="img-fluid"/>
                    </a>
                </div>
                <div className="col-md-4">
                    <div className="footer-links mt-4 mt-md-0">
                        <ul className="p-0">
                            <li><a href="">Quick Links</a></li>
                            <li><a href="">Quick Links</a></li>
                            <li><a href="">Quick Links</a></li>
                            <li><a href="">Quick Links</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="contact mt-4 mt-md-0">
                        <h5>Contact</h5>
                        <p>+91 0000000000</p>
                        <p>contact@gmail.com</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="copy">
            <div className="d-md-flex gap-4 align-items-center justify-content-between">
                <p className="copy-text">Add a subheadCopyright ⓒ 2024 Classic Bangles. All rights reserved.Classic Bangles and the Bangle logo are registered and trademarks of Classic Bangles.</p>
                <div className="social-links">
                    <a href="">
                        <img src={fb.src} alt="" className='img-fluid' width={"50px"} height={"50px"}/>
                    </a>
                    <a href="">
                        <img src={ig.src} alt="" className='img-fluid ms-3' width={"50px"} height={"50px"}/>
                    </a>
                </div>
            </div>
          </div>
      </footer>
  )
}

export default Footer;