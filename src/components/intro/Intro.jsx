import React from 'react'
import "./intro.css";
export default function Intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Afnan A</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Full Stack Web Developer</div>
                            <div className="i-title-item">HTML</div>
                            <div className="i-title-item">CSS</div>
                            <div className="i-title-item">JavaScript</div>
                            <div className="i-title-item">Node</div>
                            <div className="i-title-item">Express</div>
                            <div className="i-title-item">React.js</div>
                            <div className="i-title-item">MySQL</div>
                            <div className="i-title-item">Sequelize</div>
                            <div className="i-title-item">MongoDb</div>
                            <div className="i-title-item">Mongoose</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        Recently graduated from Full Stack Web Development Bootcamp from UW(University of Washington). Seeking a challenging  position in the field software design and development to leverage my full stack development education.
                    </div>
                </div>
            </div>
            <div className="i-right">right</div>
        </div>
    )
}


