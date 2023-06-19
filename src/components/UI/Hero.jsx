import React from "react";
import heroImg from '../../assets/img/hero_img.jpg';
import '../../styles/hero.css';



const Hero = () => {
    return <section>
        <div className="container">
            <div className="hero_wrapper">
                
                {/* Hero content */}
                <div className="hero_content">
                    <h2 className="section_title">
                        Exercise is key to a  <span className="highlights">healthy </span> lifestyle</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Consectetur, inventore.</p>

                    <div className="hero_btns">
                        <button className="register_btn">Get Started</button>
                        <button className="watch_btn"> Watch Video</button>
                    </div>
                </div>
       {/* --- Hero image ---*/}

                <div className="hero_img">
                    <div className="hero_img-wrapper">

                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box_img">
                                        <img src={heroImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="heart_rate">
                            <h5>Heart Rate</h5>
                            </div>
                            <div className="gym_location">
                                <h5>Find a new <br />
                                 gym near you</h5>
                            </div>

                            <div className="dumble_icon">
                                <img src="" alt="" />
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section> 
       
    
}

export default Hero