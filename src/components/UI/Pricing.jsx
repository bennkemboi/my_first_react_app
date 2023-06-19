import React from "react";

import '../../styles/pricing.css'


const pricing = () => {
    return <section>
        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">Gym <span className="highlights">pricing</span> plan</h2>

                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Architecto nam cum <br /> adipisci beatae excepturi corporis.</p>
            </div>

        {/* Pricing Wrapper */}
        <div className="pricing_wrapper">
            <div className="pricing_item">
                <div className="pricing_card-top">
                <h2 className="section_title">Regular member</h2>
                <h2 className="pricing section_title">Ksh 1500/month <span></span> </h2>
                </div>

                 <div className="services">
                    <ul>
                    <li><span></span>Unlimited access to the gym</li>
                    <li><span></span>Customer support</li>
                    <li><span></span>Personal trainer</li>
                    <li><span></span>Stardard options</li>
                    <li><span></span>5 classes</li>
                    </ul>
                </div>
             </div>
            </div>
        </div>
    </section>
}

export default pricing