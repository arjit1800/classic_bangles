"use client"

import { useEffect,useState } from 'react';
import './Header.css';
import logo from '../../../../assets/images/classic-bangles-logo.jpg';
import Link from 'next/link';

const Header = ()=>{

  const [active,setActive] = useState('');

  useEffect(()=>{
    if(window.scrollY > 50){
      setActive('active');
    }
    else{
      setActive('');
    }
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 50){
        setActive('active');
      }
      else{
        setActive('');
      }
    })
  })
    return(
        <header className={`header`}>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${active}`}>
                <div className="container-fluid d-lg-block nav-con">
                  {/* <a className="navbar-brand" href="#">
                    <img src={logo.src} alt="" className="img-fluid" width={'100px'}/>
                  </a> */}
                  <h1 className="main-logo">Classic Bangles
                  <span className="support-logo-text mb-2">House of Bangles</span>
                  </h1>
                  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <i className="bi bi-list"></i>
                  </button>
                  <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Classic Bangles</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#service">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#work">Work</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#review">Clients</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                    </li>
                  </ul>
                    </div>
                  </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;