import React, { Component } from "react";
import "./../../../assets/scss/pages/loginPage.scss";
import "./../../../assets/scss/main.scss";
import { Row, Col, Input, Icon, Button, Alert } from "antd";
import Logo from "./../../../assets/images/general/basic-icon.svg";
import CryptoJS from "crypto-js";
import { userLogin } from "./../../../Redux/Action/authAction";
import { connect } from "react-redux";

class LoginComponent extends Component {
     constructor(props) {
          super(props);
          this.state = {
               username: "",
               password: "",
               isLoading: 0, //0 meaning not active, 1 means active, 2 means not active & error, 3 means not active & success, 4 means not active & username not found, 5 means not active & password not found
          };
          this.fetchLoginData = this.fetchLoginData.bind(this);
     }
     fetchLoginData() {
          if (this.state.username !== "" && this.state.password !== "") {
               this.setState({
                    isLoading: 1,
               });
               const password = CryptoJS.SHA256(this.state.password).toString();
               this.props
                    .userLogin({ username: this.state.username, password: password })
                    .then((result) => {
                         if (result) {
                              if (this.props.authReducer.auth.success) {
                                   this.props.history.push("/dashboard/notes");
                              } else {
                                   this.setState({
                                        isLoading: 2,
                                   });
                              }
                         } else {
                              this.setState({
                                   isLoading: 2,
                              });
                         }
                    })
                    .catch((e) => console.log(e));
          } else {
               if (this.state.username === "") {
                    this.setState({
                         isLoading: 4,
                    });
               } else {
                    this.setState({
                         isLoading: 5,
                    });
               }
          }
     }
     componentDidMount() {
          if (this.props.authReducer.auth !== undefined && this.props.authReducer.auth.success) {
               this.props.history.push("/dashboard/notes");
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
                                        <p className={"card-title mt-10px mb-5px"}>Welcome To Cipher</p>
                                        <p className={"card-subtitle"}>Please Login to your Acccount</p>
                                        <br />
                                        <Input
                                             className={"input-login"}
                                             value={this.state.username}
                                             onChange={(e) => this.setState({ username: e.target.value })}
                                             size={"large"}
                                             prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
                                             placeholder='Username'
                                        />
                                        <br />
                                        <br />
                                        <Input.Password
                                             className={"input-login"}
                                             value={this.state.password}
                                             onChange={(e) => this.setState({ password: e.target.value })}
                                             size={"large"}
                                             prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />}
                                             type='password'
                                             placeholder='Password'
                                        />
                                        <br /> <br />
                                        {this.props.location.search === "?rfr" ? (
                                             <Alert
                                                  style={{ marginBottom: 10 }}
                                                  message='Register Successful, Login Now'
                                                  type='success'
                                                  showIcon
                                                  closable
                                             />
                                        ) : this.props.location.search === "?logout" ? (
                                             <Alert
                                                  style={{ marginBottom: 10 }}
                                                  message='Logout Successful'
                                                  type='success'
                                                  showIcon
                                                  closable
                                             />
                                        ) : (
                                             ""
                                        )}
                                        {this.state.isLoading === 2 ? (
                                             <Alert message="Username or Password Don't Match" type='error' showIcon closable />
                                        ) : this.state.isLoading === 3 ? (
                                             <Alert message='Logged In Successfully' type='success' showIcon closable />
                                        ) : this.state.isLoading === 4 ? (
                                             <Alert message='Username Cannot be Empty' type='warning' showIcon closable />
                                        ) : this.state.isLoading === 5 ? (
                                             <Alert message='Password Cannot be Empty' type='warning' showIcon closable />
                                        ) : (
                                             ""
                                        )}
                                        <br />
                                        <Button
                                             onKeyPress={(e) => console.log(e)}
                                             icon={"lock"}
                                             loading={this.state.isLoading === 1 ? true : false}
                                             onClick={() => this.fetchLoginData()}
                                             type={"cipher-primary"}
                                             size={"large"}
                                             style={{ width: "100%" }}>
                                             Login
                                        </Button>
                                        <br />
                                        <br />
                                        <Button
                                             onClick={() => this.props.history.push("/register")}
                                             type={"cipher-primary-inverse"}
                                             size={"large"}
                                             style={{ width: "100%" }}>
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

function mapStateToProps(store) {
     return {
          authReducer: store.authReducer,
     };
}

const mapDispatchToState = (dispatch, ownProps) => {
     return {
          userLogin: (data) => dispatch(userLogin(data)),
     };
};

export default connect(
     mapStateToProps,
     mapDispatchToState
)(LoginComponent);
