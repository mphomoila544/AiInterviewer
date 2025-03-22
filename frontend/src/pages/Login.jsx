import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Authcontext";
import "../styles/Login.css";
import Interview from "../assets/Interview.svg"
import NavBar from "../components/NabBar";


function Login(){
    let [username, setUserName] = useState("");
    let [password, setPassword] = useState("");
    let {loginUser} = useAuth();
    const handleLogin = async(e)=>{
        console.log("called");
        e.preventDefault();
        if (password !== "" && username !== ""){
            loginUser({"username": username, "password": password});
        }else{
             alert("make sure you enter all fields");
        }

    }
    return(
        <div className = "login-container">
            <NavBar />
            <div className = "log-form-container">
                <div className = "login-form">
                    <div className = "form-container">
                        
                        <form className = "l-form" onSubmit = {handleLogin}>
                            <h1>Welcome Back</h1>
                            <input type = "text" placeholder = "username"
                                value = {username}
                                onChange = {event=>setUserName(event.target.value)}
                            />
                            <input type = "password" placeholder="password" 
                                value = {password}
                                onChange = {event=>setPassword(event.target.value)}
                            />
                            <button type = "submit" className = "sign-btn">Sign In</button>
                            <p className = "create-acc">Don't have an account? <span><Link to = "/register">sign up</Link></span></p>
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
export default Login;