import React,{useState} from "react";
import "../../App.scss";
import  "./landingPage.scss";
import logo from "../../assets/images/logo.svg";
import Login from "../login/Login";
import Register from "../register/Register";

const LandingPage = () => {
    const [view, setView] = useState("REGISTER");
    const getContent =() => {
        switch(view){
            case "LOGIN":
             return <Login/>
             case "REGISTER":
                return <Register/>
             default:
             return <Login/>
        }
    }
    return(
        <>
            <div className="landing-page-container">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {getContent()}
            </div>
        </>
    );
}
export default LandingPage;