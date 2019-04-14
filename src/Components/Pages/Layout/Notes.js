import React, { Component } from "react";
import { getNotes } from "../../../Redux/Action/notesAction";
import { connect } from "react-redux";
import { Row, Col, Tooltip, Button, Icon, Modal } from "antd";
import "./../../../assets/scss/pages/_notes.scss";
import "./../../../assets/scss/main.scss";
import "./../../../assets/scss/pages/loginPage.scss";
import IconLoader from "../../ReUsableComponents/loader/IconLoader";
import NotFound from "../../../assets/images/general/not found.svg";
import moment from "moment";
import Axios from "axios";

const env = require("../../../env")();
const confirm = Modal.confirm;

function showDeleteConfirm(data, props) {
     confirm({
          title: "Are you sure delete this task?",
          content: "Some descriptions",
          okText: "Yes",
          okType: "danger",
          cancelText: "No",
          onOk() {
               Axios.delete(env.notes, { data }, { headers: { "Content-Type": "application/json" } })
                    .then((result) => {
                         if (result.data.success) {
                              props.getNotes({
                                   username: props.authReducer.auth.data.username,
                                   storedPassword: props.authReducer.auth.data.password,
                              });
                         }
                    })
                    .catch((e) => console.log(e));
          },
          onCancel() {
               console.log("Cancel", data);
          },
     });
}

class Notes extends Component {
     constructor(props) {
          super(props);
          this.state = {
               apiLoaded: false,
          };
     }
     componentDidMount() {
          console.log(this.props);
          this.props.isMenuAvailable(true);
          if (this.props.noteReducer.notes === undefined || this.props.location.search === "?fr") {
               this.props
                    .getNotes({
                         username: this.props.authReducer.auth.data.username,
                         storedPassword: this.props.authReducer.auth.data.password,
                    })
                    .then((result) => setTimeout(() => this.setState({ apiLoaded: true }), 300))
                    .catch((e) => console.log(e));
          } else {
               this.setState({ apiLoaded: true });
          }
          this.props.setCurrentState("2");
     }
     render() {
          return (
               <React.Fragment>
                    <Row style={{ margin: 20 }}>
                         {this.state.apiLoaded ? (
                              this.props.noteReducer.notes.length === 0 ? (
                                   <div className={"div-center"}>
                                        <img style={{ marginTop: 50 }} src={NotFound} width={200} alt={"not-found"} />
                                        <p className={"no-data-text"}>No Notes Found</p>
                                   </div>
                              ) : (
                                   this.props.noteReducer.notes.map((note) => (
                                        <Col
                                             key={note._id}
                                             lg={{ span: 6, offset: 0 }}
                                             md={{ span: 8, offset: 0 }}
                                             sm={{ span: 12, offset: 0 }}
                                             xs={{ span: 24, offset: 0 }}>
                                             <div className={this.props.darkTheme ? "note-cards-dark" : "note-cards"}>
                                                  <div onClick={() => this.props.history.push("/dashboard/notes/" + note._id)}>
                                                       <div className={"note-id"}>
                                                            <b>Note ID:</b> &nbsp;{note._id}
                                                       </div>
                                                       <div className={"note-title"}>
                                                            <Tooltip title={note.notesTitle}>{note.notesTitle}</Tooltip>
                                                       </div>
                                                       <div className={"note-description"}>
                                                            {note.notesData.slice(0, 300)}
                                                            ...
                                                       </div>
                                                       <div className={"created-at"}>
                                                            Created : &nbsp;{moment(note.createdAt).fromNow()}
                                                       </div>
                                                  </div>
                                                  {this.props.darkTheme ? (
                                                       <Button
                                                            onClick={() =>
                                                                 showDeleteConfirm(
                                                                      {
                                                                           username: this.props.authReducer.auth.data.username,
                                                                           storedPassword: this.props.authReducer.auth.data.password,
                                                                           noteId: note._id,
                                                                      },
                                                                      this.props
                                                                 )
                                                            }
                                                            type={"cipher-primary-inverse div-center flex light-grey-bg dark-theme-button"}
                                                            className={"mt-15px"}
                                                            size={"small"}
                                                            style={{ width: "80%" }}>
                                                            <span className={"text-center div-center flex"}>
                                                                 <Icon type='delete' theme='filled' /> Delete
                                                            </span>
                                                       </Button>
                                                  ) : (
                                                       <Button
                                                            onClick={() =>
                                                                 showDeleteConfirm(
                                                                      {
                                                                           username: this.props.authReducer.auth.data.username,
                                                                           storedPassword: this.props.authReducer.auth.data.password,
                                                                           noteId: note._id,
                                                                      },
                                                                      this.props
                                                                 )
                                                            }
                                                            type={"cipher-primary-inverse div-center flex light-grey-bg"}
                                                            className={"mt-15px"}
                                                            size={"small"}
                                                            style={{ width: "80%" }}>
                                                            <span className={"text-center div-center flex"}>
                                                                 <Icon type='delete' theme='filled' /> Delete
                                                            </span>
                                                       </Button>
                                                  )}
                                             </div>
                                        </Col>
                                   ))
                              )
                         ) : (
                              <div style={{ margin: "30vh auto 0 auto", textAlign: "center" }}>
                                   <IconLoader />
                              </div>
                         )}
                    </Row>
               </React.Fragment>
          );
     }
}

function mapStateToProps(store) {
     return {
          authReducer: store.authReducer,
          noteReducer: store.noteReducer,
     };
}

const mapDispatchToState = (dispatch, ownProps) => {
     return {
          getNotes: (data) => dispatch(getNotes(data)),
     };
};

export default connect(
     mapStateToProps,
     mapDispatchToState
)(Notes, showDeleteConfirm);
