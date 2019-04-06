import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Drawer, Slider, Divider, Select, Radio, Icon } from "antd";
import "./../../../../assets/scss/pages/_viewer.scss";

const { Option, OptGroup } = Select;

class Viewer extends Component {
     constructor(props) {
          super(props);
          this.state = {
               currentNote: {},
               fontSize: 20,
               fonts: "merriweather",
               align: "left",
          };
     }

     componentDidMount() {
          this.props.isMenuAvailable(true);
          const currentNote = this.props.noteReducer.notes.filter((e) => e._id === this.props.match.params.noteId);
          if (currentNote.length !== 0) {
               this.setState({
                    currentNote: currentNote[0],
               });
          }
     }
     render() {
          return (
               <div className={"layout-container"}>
                    <Row>
                         <Col xs={24}>
                              <p
                                   className={this.state.fonts}
                                   style={{ fontSize: this.state.fontSize, textAlign: this.state.align, whiteSpace: "pre-line" }}>
                                   {this.state.currentNote !== {} ? this.state.currentNote.notesData : ""}
                              </p>
                         </Col>
                         <br />
                         <Col sm={{ span: 4, offset: 10 }} xs={{ span: 24, offset: 0 }}>
                              <Button
                                   onClick={() => this.props.history.push("/dashboard/notes")}
                                   icon={"caret-back"}
                                   type={"cipher-primary-inverse"}
                                   size={"large"}
                                   className={"light-grey-bg"}
                                   style={{ width: "100%", marginTop: 30, marginBottom: 30 }}>
                                   Back
                              </Button>
                         </Col>
                    </Row>
                    <Drawer
                         title='Customize Your Reading..'
                         placement={"bottom"}
                         closable={true}
                         height={"50%"}
                         onClose={(e) => this.props.hideVisible("false")}
                         visible={this.props.visible}>
                         <Row>
                              <Col xs={24}>
                                   <p className={"small-title"}>Font Size</p>
                                   <Slider min={8} max={80} onChange={(e) => this.setState({ fontSize: e })} value={this.state.fontSize} />
                                   <Divider />
                              </Col>
                              <Col xs={16}>
                                   <p className={"small-title"}>Font Family</p>
                                   <Select
                                        className={"minimal-select"}
                                        value={this.state.fonts}
                                        style={{ width: "90%" }}
                                        onChange={(e) => this.setState({ fonts: e })}>
                                        <OptGroup label='Font Family'>
                                             <Option value='merriweather'>Merriweather</Option>
                                             <Option value='open-sans'>Open Sans</Option>
                                             <Option value='roboto'>Roboto</Option>
                                             <Option value='montserrat'>Montserrat</Option>
                                             <Option value='indie-flower'>Indie Flower</Option>
                                             <Option value='bitter'>Bitter</Option>
                                        </OptGroup>
                                   </Select>
                              </Col>
                              <Col xs={8}>
                                   <p className={"small-title"}>Font Justify</p>
                                   <Radio.Group
                                        className={"minimal-radio-group"}
                                        size={"small"}
                                        value={this.state.align}
                                        onChange={(e) => this.setState({ align: e.target.value })}>
                                        <Radio.Button value='left'>
                                             <Icon type='align-left' />
                                        </Radio.Button>
                                        <Radio.Button value='justify'>
                                             <Icon type='pic-center' />
                                        </Radio.Button>
                                        <Radio.Button value='center'>
                                             <Icon type='align-center' />
                                        </Radio.Button>
                                        <Radio.Button value='Right'>
                                             <Icon type='align-right' />
                                        </Radio.Button>
                                   </Radio.Group>
                              </Col>
                              <br />
                              <br />
                         </Row>
                         <Divider />
                    </Drawer>
               </div>
          );
     }
}
function mapStateToProps(store) {
     return {
          noteReducer: store.noteReducer,
     };
}

export default connect(mapStateToProps)(Viewer);
