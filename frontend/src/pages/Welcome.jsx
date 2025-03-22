import React from "react";
import "../styles/welcome.css";
import NavBar from "../components/NabBar";
import Consult from "../assets/Consult.svg";

function Welcome(){
    return(
        <div className = "welcome-container">
            <NavBar />
            <div className = "mid-container">
                <div className = "container-info">
                    <div className = "welcome-content">
                        <div className = "msg">
                            <h1>Welcome to SmartHire, Here to help you hire.</h1>
                        </div>
                        <div className = "content">
                            <p>SmartHire is here to make the hiring process
                                easier for you. Our AI system has the ability
                                to set up assessment for canditates in different
                                segments of career fields and also set up
                                interviews. We also provide an AI 
                                agent which can inteview canditates after they 
                                pass the assessments stage and provide a report
                                to the recruiter.

                            </p>
                        </div>
                        <button className = "try-it">Try It</button>
                    </div>
                    <div className = "welcome-illustration">
                        <img src = {Consult}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;