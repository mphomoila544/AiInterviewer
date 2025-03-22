import React, {useState, useContext, createContext} from "react";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext();


const AuthProvider = ({children})=>{

    const [authToken, setAuthToken] = useState(()=>localStorage.getItem("authToken")?JSON.parse(localStorage.getItem("authToken")):null);
    const navigate = useNavigate()

    const loginUser = async(data)=>{
        let response = await fetch("http://127.0.0.1:8000/api-auth/token/", {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(data)
        });
        const res = await response.json();
        console.log(res);
        if (response.status === 200){
            console.log(res.access);
            setAuthToken(res.access);
            localStorage.setItem("authToken", JSON.stringify(res));
            navigate("/home");
        }
    }

    const context = {
        loginUser:loginUser,
    }

    return(
        <AuthContext.Provider value = {context}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = ()=>{
    return useContext(AuthContext);
}