import React, {useState} from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NabBar";
import Interview from "../assets/Interview.svg";
import "../styles/Login.css";

function Register(){
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");

    const registerUser = async(e)=>{
        e.preventDefault();
        console.log(username);
        console.log("register user called");
        let response = await fetch("http://127.0.0.1:8000/api-auth/register/", {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({"username":username, "email":email, "password": password})
        });
        const res = await response.text();

        if (response.status === 200){
            console.log(res);
            console.log("user was successfully registerd");
        }else{
            alert(res);
        }

    }
    return(
        <div className = "login-container">
        <NavBar />
        <div className = "log-form-container">
            <div className = "login-form">
                <div className = "form-container">
                    
                    <form className = "l-form" onSubmit = {registerUser}>
                        <h1>Welcome to SmartHr</h1>
                        <input type = "text" placeholder = "username"
                            value = {username}
                            onChange = {event=>{setUsername(event.target.value)}}
                        />
                        <input type = "text" placeholder = "email"
                            value = {email}
                            onChange = {event=>{setEmail(event.target.value)}}
                        />
                        <input type = "password" placeholder="password" 
                            value = {password}
                            onChange = {event=>{setPassword(event.target.value)}}
                        />
                        <button type = "submit" className = "sign-btn">Sign Up</button>
                        <p className = "create-acc">Already have an account? <span><Link to = "/login">sign in</Link></span></p>
                    </form>
                    
                </div>
                <div className = "l-svg-container">
                    <img src = {Interview} />
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Register;