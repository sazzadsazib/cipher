import React, { Component } from "react";
import { List, Switch } from "antd";
import "./../../../assets/scss/pages/_setting.scss";

class Settings extends Component {
     componentDidMount() {
          this.props.setCurrentState("3");
          if (localStorage.getItem(process.env.REACT_APP_ENC_DARK_THEME) === null) {
               localStorage.setItem(process.env.REACT_APP_ENC_DARK_THEME, false);
          }
     }

     render() {
          return (
               <div className={this.props.darkTheme ? "layout-container-dark" : "layout-container"}>
                    {console.log(this.props)}
                    <List
                         size='small'
                         header={<div className={"text-center header-css"}>Settings</div>}
                         bordered
                         dataSource={[
                              <div className={this.props.darkTheme ? "settings-menu-dark" : "settings-menu"}>
                                   Dark Mode{" "}
                                   <div className={"fl-r"}>
                                        <Switch
                                             checked={this.props.darkTheme}
                                             className={"cipher-switch"}
                                             defaultChecked
                                             onChange={(e) => {
                                                  this.props.darkThemeSet(e);
                                                  localStorage.setItem(process.env.REACT_APP_ENC_DARK_THEME, e);
                                             }}
                                        />
                                   </div>
                              </div>,
                         ]}
                         renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
               </div>
          );
     }
}
export default Settings;
