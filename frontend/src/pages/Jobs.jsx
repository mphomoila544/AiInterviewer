import React from "react";
import NavBar from "../components/NabBar";
import "../styles/job.css";

function Jobs(){
    return(
        <div className = "job-container">
            <NavBar />
            <div className = "job-form-container">
                <div className = "job-form">
                    <form className = "j-form">
                        <div className = "j-detail">
                            <input type = "text" placeholder = "Job Category"/>
                            <input type = "text" placeholder = "Experience Level"/>
                            <input type = "text" placeholder = "Job Location" />
                            <input type = "text" placeholder = "Company Email" />
                            <input type = "text" placeholder = "Recruiter's Contact" />
                        </div>
                        <div className = "j-description">
                            <textarea className = "role-description" placeholder = "Enter job Description"></textarea>
                            <textarea className = "tech-stack" placeholder = "Enter tech stack"></textarea>
                        </div>
                    </form>
                    <div className = "j-btn-container">
                        <button className = "j-post-btn">Distribute Post</button>
                    </div>
                    
                </div>
               
            </div>
        </div>
    )
}
export default Jobs;