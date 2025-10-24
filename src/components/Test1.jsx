import { useState} from "react";
import Time from "./Time";
import profileImage from '../assets/Pro2.png'//To get an image into the project
import bg from '../assets/Octagon.jpg'
import vision from '../assets/vision.jpg'

import { Link } from "react-router-dom";

import mail from '../assets/email.png'
import telegram from '../assets/th.png'
import whatsapp from '../assets/whatsapp.png'



export default function Test1(){

        //To go to next page 
        function next_page(){
            <Link to="/affiliates"></Link>;
        }

        function upper_page(){
            <Link to="/Donate"></Link>;
        }

  return (
    <>
    <head>
        <title>LG's Studio</title>
    </head>

    <header>
        <div id="head">
            <h2 id="title">
                LG STUDIO
            </h2>
            <ul id="nav">
                <il> <a id= "c" href="/affiliates" onClick={next_page()}>Projects</a> </il>
            </ul>
        </div>
    </header>
    
    <div id="clock">
        <h3>Current Time: <Time/> </h3><br/><br/>
    </div>

 
            <br/><br/>
            <section id="sec1-profile" className="fade-in">
                <img id="profile-img" src={profileImage} height="1200%" width="30%"/>
            </section>
            <section id="sec1-intro">
                <div id="intro" className="fade-in-text">
                    <section id="inner-black-about" className="fade-in">
                    <h2 id="intro-head-black">About Me</h2><br/>
                    <p>I’m Gabriel — a passionate game developer and web engineer who thrives on building immersive experiences that merge creativity with code.</p>
                    <p>I focus on Web and game development, combining technology and storytelling to craft unique interactive worlds.</p>

                    </section>
                </div>
            </section>
            <br/><br/><br/><br/><br/>
            
            <section id="services" className="fade-in">
                <h2>What I Do</h2>
                <div className="service-grid">
                    <div className="service-card scale-hover">
                    <h3>🎮 Game Development</h3>
                    <p>Designing immersive 2D games and Web based games using Phaser, React and Javascript.</p>
                    </div>
                    <div className="service-card scale-hover">
                    <h3>💻 Web Development</h3>
                    <p>Building responsive, modern websites and landing pages with React and Firebase.</p>
                    </div>
                    {/* <div className="service-card scale-hover">
                    <h3>⚙️ Software Engineering</h3>
                    <p>Developing efficient backends, optimizing code, and integrating Web3 features seamlessly.</p>
                    </div> */}
                </div>
            </section>
            
            <br/><br/><br/><br/><br/>
            
            <section id="sec1-intro">
            <div id="vision" className="fade-in-text">
                <section id="inner-black-vision">
                    <h2>Vision and Ambition</h2>
                        <p id="goldenrod-text">The future holds a lot of secrets which can only been seen by those who prepare for it today</p>
                        <p id="goldenrod-text">
                            I am aim and strive to become a creatively great game and website developer. 
                            One worthy, one fit to satisfy and surpass your expectation and to leave you with a smile.  
                        </p>
                </section>
            </div>
            <img id="bg-vision" src={vision} className="fade-in"/>
            </section>
            <br/>
        
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
        <footer id="foot">
            <h4>
                <il>
                    <h5 id="contact">
                        <a href="https://t.me/LordGabe_7"><img id="social" src={telegram}/></a>
                        <a href="mailto:gabolusesan@gmail.com"><img id="social2" src={mail}/></a>
                        <a href="https://wa.me/qr/NUHADAKKZXQYE1"><img id="social" src={whatsapp}/></a> 
                    </h5>
                </il>
            </h4>
            All rights reserved
            <h2 id="footer">&copy; LG Studio 2025</h2>
            
        </footer>
    </>
  )
}
