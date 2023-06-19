import React from "react";
import '../../styles/exercises.css'

const Exercise = () => {
    return <section>
        <div className="container exercise_container">
            <div className="exercise_top">
                <h2 className="section_title">
                    Benefits of <span className="highlights">Exercises</span> 
                </h2>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita temporibus <br />  harum dolor animi asperiores autem.</p>

            </div>
            {/* --- exercise list */}
            <div className="exercise_wrapper">
                <div className="exercise_item">
                    <span className="exercise_icon">
                        <img src="{lunges}" alt="" />
                    </span>
                    <div className="exercise_content">
                        <h4>Healthy life</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="exercise_item">
                    <span className="exercise_icon">
                        <img src="" alt="" />
                    </span>
                    <div className="exercise_content">
                        <h4>Increased flexibility</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="exercise_item">
                    <span className="exercise_icon">
                        <img src="" alt="" />
                    </span>
                    <div className="exercise_content">
                        <h4>Eradicate Blood Pressure</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
}

export default Exercise