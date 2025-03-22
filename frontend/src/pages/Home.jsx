import React from "react";
import NavBar from "../components/NabBar";
import "../styles/home.css";

function Home(){
    return(
        <div className = "home-container">
            <NavBar />
            <div className = "home-content">
                <div className = "options">
                    <div className = "box">
                        <h2>Applications</h2>
                        <h3>0</h3>
                    </div>
                    <div className = "box">
                        <h2>Assesments</h2>
                        <h3>0</h3>
                    </div>
                    <div className = "box">
                        <h2>Interviews</h2>
                        <h3>0</h3>
                    </div>
                    <div className = "box">
                        <h2>Surveys</h2>
                        <h3>0</h3>
                    </div>
                </div>
            </div>
            <div className = "home-table">
                <div className = "h-table">
                    <table>
                        <tr>
                            <th>Candidate Name</th>
                            <th>Candidate Email</th>
                            <th>Qualification</th>
                            <th>Assesment Score</th>
                            <th>Interview Status</th>
                        </tr>
                        <tr>
                            <td>Mpho Moila</td>
                            <td>mpho@gmail.com</td>
                            <td>Big data analytics hons</td>
                            <td>85</td>
                            <td>Not yet taken</td>
                        </tr>
                    
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Home;