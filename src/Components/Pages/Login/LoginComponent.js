import React, { Component } from "react";
import "./../../../assets/scss/pages/loginPage.scss";
import "./../../../assets/scss/main.scss";
import { Row, Col, Input, Icon, Button } from "antd";
import Logo from "./../../../assets/images/general/basic-icon.svg";

class LoginComponent extends Component {
     render() {
          return (
               <div className={"login-window"}>
                    <Row>
                         <Col lg={{ span: 8, offset: 8 }} xs={{ span: 22, offset: 1 }}>
                              <div className={"card-view"}>
                                   <div className={"div-center"}>
                                        <img src={Logo} alt={"logo"} style={{ width: 120 }} />
                                        <br />
                                        <p className={"card-title mt-10px mb-5px"}>Welcome To Cipher</p>
                                        <p className={"card-subtitle"}>Please Login to your Acccount</p>
                                        <br />
                                        <Input
                                             className={"input-login"}
                                             size={"large"}
                                             prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
                                             placeholder='Username'
                                        />
                                        <br />
                                        <br />
                                        <Input
                                             className={"input-login"}
                                             size={"large"}
                                             prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />}
                                             type='password'
                                             placeholder='Password'
                                        />
                                        <br />
                                        <br />
                                        <Button type={"cipher-primary"} size={"large"} style={{ width: "100%" }}>
                                             Login
                                        </Button>
                                        <br />
                                        <br />
                                        <Button type={"cipher-primary-inverse"} size={"large"} style={{ width: "100%" }}>
                                             Not an user? &nbsp; <b>Register</b>
                                        </Button>
                                   </div>
                              </div>
                         </Col>
                    </Row>
               </div>
          );
     }
}
export default LoginComponent;
