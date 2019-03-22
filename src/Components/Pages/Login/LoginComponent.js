import React, { Component } from "react";
import "./../../../assets/scss/pages/loginPage.scss";
import Logo from "./../../../assets/images/general/basic-icon.svg";

class LoginComponent extends Component {
     render() {
          return (
               <div className={"login-window"}>
                    <div className={"div-center mt-100px"}>
                         {" "}
                         <img src={Logo} alt={Logo} width={100} />
                    </div>
                    <p className={"login-title"}>Cipher Helps you to Store Notes,Chapter helps you to read Offline</p>
                    <br />
                    <input className={"login-input"} type={"text"} />
                    <input className={"login-input"} type={"password"} />
                    <button className={"login-button"}>Login</button>
               </div>
          );
     }
}
export default LoginComponent;
