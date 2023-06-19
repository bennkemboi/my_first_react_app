import React from "react";
import '../../styles/start.css';
import trainerImg from '../../assets/img/spencer-davis-0ShTs8iPY28-unsplash.jpg';




const Start = () => {
    return  <section>
        
        <div className="container">
            <div className="start_wrapper">
                <div className="start_img">
                    <img src={trainerImg} alt="" />
                </div>

                <div className="start_content">
                    <h2 section_title> Ready to make a <span className="highlights">change</span>?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat est 
                    qui eaque in assumenda sint quos dignissimos distinctio at.
                    </p>

                    <button className="register_btn">Get Started</button>

                </div>
            </div>
        </div>
     </section>
    
   
}
export default Start