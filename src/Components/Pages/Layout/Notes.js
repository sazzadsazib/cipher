import React, { Component } from "react";
import { getNotes } from "../../../Redux/Action/notesAction";
import { connect } from "react-redux";
import { Row, Col, Tooltip, Button, Icon } from "antd";
import "./../../../assets/scss/pages/_notes.scss";
import "./../../../assets/scss/main.scss";
import "./../../../assets/scss/pages/loginPage.scss";
import IconLoader from "../../ReUsableComponents/loader/IconLoader";
import moment from "moment";

class Notes extends Component {
     constructor(props) {
          super(props);
          this.state = {
               apiLoaded: false,
          };
     }
     componentDidMount() {
          this.props.isMenuAvailable(false);
          if (this.props.noteReducer.notes === undefined) {
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
                                   <div>No Notes Found</div>
                              ) : (
                                   this.props.noteReducer.notes.map((note) => (
                                        <Col
                                             key={note._id}
                                             lg={{ span: 6, offset: 0 }}
                                             md={{ span: 8, offset: 0 }}
                                             sm={{ span: 12, offset: 0 }}
                                             xs={{ span: 24, offset: 0 }}>
                                             <div
                                                  className={"note-cards"}
                                                  onClick={() => this.props.history.push("/dashboard/notes/" + note._id)}>
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
                                                  <div className={"created-at"}>Created : &nbsp;{moment(note.createdAt).fromNow()}</div>
                                                  <Tooltip placement={"top"} title={"Coming Soon"}>
                                                       <Button
                                                            type={"cipher-primary-inverse div-center flex light-grey-bg"}
                                                            className={"mt-15px"}
                                                            size={"small"}
                                                            style={{ width: "80%" }}>
                                                            <span className={"text-center div-center flex"}>
                                                                 <Icon type='eye' theme='filled' /> Mark As Read
                                                            </span>
                                                       </Button>
                                                  </Tooltip>
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
)(Notes);
