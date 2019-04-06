import React, { Component } from "react";
import { Row, Col, Icon, Input, Button, notification } from "antd";
import "./../../../assets/scss/pages/_notes.scss";
import Axios from "axios";
import { connect } from "react-redux";

const env = require("../../../env")();
const TextArea = Input.TextArea;

const openNotificationWithIcon = (type, title, info) => {
     notification[type]({
          message: title,
          description: info,
     });
};

class CreateNotes extends Component {
     constructor(props) {
          super(props);
          this.state = {
               noteData: "",
               noteTitle: "",
               isDisabled: false,
          };
     }
     componentDidMount() {
          this.props.setCurrentState("1");
     }
     postData() {
          this.setState(
               {
                    isDisabled: true,
               },
               () => {
                    if (this.state.noteData !== "" && this.state.noteTitle !== "") {
                         const data = {
                              username: this.props.authReducer.auth.data.username,
                              storedPassword: this.props.authReducer.auth.data.password,
                              notesTitle: this.state.noteTitle,
                              notesData: this.state.noteData,
                         };
                         console.log(data);
                         Axios.post(env.notes, data, { headers: { "Content-Type": "application/json" } })
                              .then((result) => {
                                   if (result.data.success === true) {
                                        this.setState({
                                             isDisabled: false,
                                        });
                                        openNotificationWithIcon("success", "Saved Successfully", "Your Note Has been Saved Successfully");
                                        // message.success("Registered Successfully", 2.5).then(message.info("Login now!"), 2.5);
                                        this.props.history.push("/dashboard/notes");
                                   }
                              })
                              .catch((e) => {
                                   openNotificationWithIcon(
                                        "error",
                                        "Could not Save",
                                        "There is a Problem with System, Please try again later"
                                   );
                                   this.setState({
                                        isDisabled: false,
                                   });
                              });
                    } else {
                         this.setState({
                              isDisabled: false,
                         });
                         openNotificationWithIcon("warning", "Provide Proper Data", "Title or Note is Missing in the Body");
                    }
               }
          );
     }
     render() {
          return (
               <React.Fragment>
                    <Row>
                         <Col md={{ span: 22, offset: 1 }} xs={24}>
                              <Row>
                                   <Col md={{ span: 24, offset: 0 }} xs={{ span: 16, offset: 4 }}>
                                        {/*{console.log(this.props)}*/}
                                        <div onClick={() => this.props.history.push("/dashboard/notes")} className={"caret-back mt-40px"}>
                                             <Icon type='left' /> &nbsp; Back to Notes
                                        </div>
                                        <div className={"caret-title"}>Create Your Notes</div>
                                   </Col>
                              </Row>
                              <Row className={"dashboard-normal-card"} style={{ minHeight: "70vh" }}>
                                   <Col sm={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                                        <div className={"title-post-note"}>Provide a Title</div>
                                        <Input
                                             className={"input-login"}
                                             onChange={(e) => this.setState({ noteTitle: e.target.value })}
                                             size={"large"}
                                             suffix={<Icon type='file' style={{ color: "rgba(0,0,0,.25)" }} />}
                                             placeholder='Provide A Title'
                                        />
                                   </Col>
                                   <Col sm={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                                        <div className={"title-post-note"}>Provide a Title</div>
                                        <TextArea
                                             className={"input-login"}
                                             onChange={(e) => this.setState({ noteData: e.target.value })}
                                             autosize={{ minRows: 10, maxRows: 14 }}
                                             placeholder='Paste Your Notes Here ;)'
                                        />
                                   </Col>
                                   <br />
                                   <Col sm={{ span: 4, offset: 11 }} xs={{ span: 22, offset: 1 }}>
                                        <Button
                                             onClick={() => this.postData()}
                                             loading={this.state.isDisabled}
                                             icon={"save"}
                                             type={"cipher-primary"}
                                             size={"large"}
                                             style={{ width: "100%", marginTop: 20 }}>
                                             Save
                                        </Button>
                                   </Col>
                                   <Col sm={{ span: 4, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                                        <Button
                                             onClick={() => this.props.history.push("/dashboard/notes")}
                                             icon={"eye"}
                                             type={"cipher-primary-inverse"}
                                             size={"large"}
                                             className={"light-grey-bg"}
                                             style={{ width: "100%", marginTop: 20 }}>
                                             Cancel
                                        </Button>
                                   </Col>
                              </Row>
                         </Col>
                    </Row>
               </React.Fragment>
          );
     }
}

function mapStateToProps(store) {
     return {
          authReducer: store.authReducer,
     };
}

export default connect(mapStateToProps)(CreateNotes);
