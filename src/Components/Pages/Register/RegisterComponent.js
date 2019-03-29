import React, { Component } from "react";
import { message } from "antd";
import "./../../../assets/scss/pages/loginPage.scss";
import "./../../../assets/scss/main.scss";
import { Row, Col, Input, Icon, Button } from "antd";
import Logo from "./../../../assets/images/general/basic-icon.svg";
import Axios from "axios";
import CryptoJS from "crypto-js";

const env = require("../../../env")();

class RegisterComponent extends Component {
     constructor(props) {
          super(props);
          this.state = {
               username: "",
               password: "",
               error: false,
          };
          this.registerUser = this.registerUser.bind(this);
     }

     registerUser() {
          if (this.state.username !== "" && this.state.password !== "") {
               const password = CryptoJS.AES.encrypt(this.state.password, process.env.REACT_APP_ENC_KEY).toString();
               Axios.post(
                    env.registerUrl,
                    { username: this.state.username, password: this.state.password },
                    { headers: { "Content-Type": "application/json" } }
               )
                    .then((result) => {
                         if (result.data.success === true) {
                              message.success("Registered Successfully", 2.5).then(message.info("Login now!"), 2.5);
                              this.props.history.push("/");
                         }
                    })
                    .catch((e) => console.log(e));
          } else {
               message.warn("Provide Username & Password to Register");
          }
     }
     render() {
          return (
               <div className={"login-window"}>
                    <Row>
                         <Col lg={{ span: 8, offset: 8 }} xs={{ span: 22, offset: 1 }}>
                              <div className={"card-view"}>
                                   <div className={"div-center"}>
                                        <img src={Logo} alt={"logo"} style={{ width: 120 }} />
                                        <br />
                                        <p className={"card-title mt-10px mb-5px"}>Register To Cipher</p>
                                        <p className={"card-subtitle"}>Please Provide Username and Password</p>
                                        <br />
                                        <Input
                                             className={"input-login"}
                                             onChange={(e) => this.setState({ username: e.target.value })}
                                             size={"large"}
                                             prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
                                             placeholder='Username'
                                        />
                                        <br />
                                        <br />
                                        <Input
                                             className={"input-login"}
                                             onChange={(e) => this.setState({ password: e.target.value })}
                                             size={"large"}
                                             prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />}
                                             type='password'
                                             placeholder='Password'
                                        />
                                        <br />
                                        <br />
                                        <Button
                                             onClick={() => this.registerUser()}
                                             type={"cipher-primary"}
                                             size={"large"}
                                             style={{ width: "100%" }}>
                                             Register
                                        </Button>
                                        <br />
                                        <br />
                                        <Button
                                             onClick={() => this.props.history.push("/")}
                                             type={"cipher-primary-inverse"}
                                             size={"large"}
                                             style={{ width: "100%" }}>
                                             Already a user? &nbsp; <b>Login</b>
                                        </Button>
                                   </div>
                              </div>
                         </Col>
                    </Row>
               </div>
          );
     }
}
export default RegisterComponent;
