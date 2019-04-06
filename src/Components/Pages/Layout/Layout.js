import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon, Dropdown, message } from "antd";
import "../../../assets/scss/main.scss";
import "./../../../assets/scss/pages/_dashboardLayout.scss";
import Logo from "./../../../assets/images/general/full_logo.svg";
import LogoSmall from "./../../../assets/images/general/basic-icon.svg";
import AdminAvatar from "./../../../assets/images/general/admin_avatar.png";
import { connect } from "react-redux";
import RouteComponent from "./RouteComponent";

const { Header, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashboardLayout extends Component {
     constructor(props) {
          super(props);
          this.state = {
               collapsed: true,
               currentActiveState: "",
          };
          this.toggle = this.toggle.bind(this);
          this.onNavClick = this.onNavClick.bind(this);
          this.onLogout = this.onLogout.bind(this);
     }

     toggle() {
          this.setState({
               collapsed: !this.state.collapsed,
          });
     }

     onNavClick({ key }) {
          // this is logout method;
          if (key === "1") {
               this.setState({
                    currentActiveState: "1",
               });
               this.props.history.push("/dashboard/notes/create");
          } else if (key === "2") {
               this.setState({
                    currentActiveState: "2",
               });
               this.props.history.push("/dashboard/notes");
          } else if (key === "3") {
               this.setState({
                    currentActiveState: "3",
               });
               this.props.history.push("/dashboard/settings");
          }
     }

     onLogout({ key }) {
          if (key === "1") {
               this.props.history.push("/logout");
          } else {
               message.error("Error Occurred!!");
          }
     }

     render() {
          // console.log(this.state.ResolvedData);
          const ProfileMenu = (
               <Menu onClick={this.onLogout}>
                    <Menu.Item key='1'>
                         <span className='dropdown-link-color' rel='noopener noreferrer'>
                              Logout
                         </span>
                    </Menu.Item>
               </Menu>
          );
          return (
               <Layout style={{ minHeight: "100vh" }}>
                    {window.innerWidth > 600 ? (
                         <Sider
                              style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0 }}
                              trigger={null}
                              collapsible
                              theme={"light"}
                              collapsed={this.state.collapsed}>
                              <div className='logo'>
                                   {this.state.collapsed ? (
                                        <a href='/pages'>
                                             <img src={LogoSmall} alt='Alice' className={"logoBrandFold"} />
                                        </a>
                                   ) : (
                                        <a href='/pages'>
                                             <img src={Logo} alt='Alice' className={"logoBrand"} />
                                        </a>
                                   )}
                              </div>
                              <Menu
                                   theme='light'
                                   mode='inline'
                                   selectedKeys={["" + this.state.currentActiveState]}
                                   onClick={this.onNavClick}>
                                   <SubMenu
                                        key='notes'
                                        title={
                                             <span>
                                                  <Icon type='file-text' />
                                                  <span>Notes</span>
                                             </span>
                                        }>
                                        <Menu.Item key='1'>
                                             <span>
                                                  <Icon type='eye' />
                                                  <span>Create</span>
                                             </span>
                                        </Menu.Item>
                                        <Menu.Item key='2'>
                                             <span>
                                                  <Icon type='file-text' />
                                                  <span>Notes</span>
                                             </span>
                                        </Menu.Item>
                                   </SubMenu>
                                   <Menu.Item key='3'>
                                        <Icon type='setting' />
                                        <span>Settings</span>
                                   </Menu.Item>
                              </Menu>
                         </Sider>
                    ) : this.state.collapsed !== true ? (
                         <Sider
                              style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0, zIndex: 2 }}
                              trigger={null}
                              collapsible
                              theme={"light"}
                              collapsed={this.state.collapsed}>
                              <div className='logo'>
                                   <a href='/pages'>
                                        <img src={Logo} alt='Alice' className={this.state.collapsed ? "logoBrandFold" : "logoBrand"} />
                                   </a>
                              </div>
                              <Menu
                                   theme='light'
                                   mode='inline'
                                   selectedKeys={["" + this.state.currentActiveState]}
                                   onClick={this.onNavClick}>
                                   <SubMenu
                                        key='notes'
                                        title={
                                             <span>
                                                  <Icon type='file-text' />
                                                  <span>Notes</span>
                                             </span>
                                        }>
                                        <Menu.Item key='1'>
                                             <span>
                                                  <Icon type='eye' />
                                                  <span>Create</span>
                                             </span>
                                        </Menu.Item>
                                        <Menu.Item key='2'>
                                             <span>
                                                  <Icon type='file-text' />
                                                  <span>Notes</span>
                                             </span>
                                        </Menu.Item>
                                   </SubMenu>
                                   <Menu.Item key='3'>
                                        <Icon type='setting' />
                                        <span>Settings</span>
                                   </Menu.Item>
                              </Menu>
                         </Sider>
                    ) : (
                         ""
                    )}

                    <Layout
                         className={
                              window.innerWidth > 600
                                   ? this.state.collapsed
                                        ? "ml80px"
                                        : "ml200px"
                                   : this.state.collapsed
                                   ? ""
                                   : "ml200px"
                         }>
                         {window.innerWidth > 600 ? (
                              <Header
                                   style={{
                                        background: "#fff",
                                        padding: 0,
                                        position: "fixed",
                                        top: "0",
                                        width: this.state.collapsed ? window.innerWidth - 80 : window.innerWidth - 200,
                                        zIndex: "100",
                                        boxShadow: "1px 2px 4px #c4d6e894",
                                   }}>
                                   <Icon
                                        className='trigger'
                                        type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                                        onClick={this.toggle}
                                   />
                                   <Menu
                                        theme='light'
                                        mode='horizontal'
                                        defaultSelectedKeys={[this.state.currentActiveState]}
                                        style={{ lineHeight: "64px", float: "right", height: "0px" }}>
                                        <Menu.Item key='3'>
                                             <Dropdown overlay={ProfileMenu}>
                                                  <div className='ant-dropdown-link'>
                                                       <img className='image-round' src={AdminAvatar} alt='' width={30} /> &nbsp; &nbsp;
                                                       <Icon type='down' />
                                                  </div>
                                             </Dropdown>
                                        </Menu.Item>
                                   </Menu>
                              </Header>
                         ) : (
                              <Header
                                   style={{
                                        background: "#fff",
                                        padding: 0,
                                        position: "fixed",
                                        top: "0",
                                        width: this.state.collapsed ? window.innerWidth : window.innerWidth - 200,
                                        zIndex: "1",
                                        boxShadow: "1px 2px 4px #c4d6e894",
                                   }}>
                                   <Icon
                                        className='trigger'
                                        type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                                        onClick={this.toggle}
                                   />
                                   {window.innerWidth < 600 && this.state.collapsed ? (
                                        <span className='platform-data-info'>
                                             <img src={Logo} style={{ width: 100 }} alt={"cipher logo"} />
                                        </span>
                                   ) : (
                                        ""
                                   )}
                                   <Menu
                                        theme='light'
                                        mode='horizontal'
                                        defaultSelectedKeys={[this.state.currentActiveState]}
                                        style={{ lineHeight: "64px", float: "right", height: "0px" }}>
                                        <Menu.Item key='3'>
                                             <Dropdown overlay={ProfileMenu}>
                                                  <div className='ant-dropdown-link'>
                                                       <img className='image-round' src={AdminAvatar} alt='' width={30} /> &nbsp; &nbsp;
                                                       <Icon type='down' />
                                                  </div>
                                             </Dropdown>
                                        </Menu.Item>
                                   </Menu>
                              </Header>
                         )}
                         <div className='container-dashboard__layout' style={{ minHeight: "calc(100vh - 60px)" }}>
                              <RouteComponent setCurrentState={(x) => this.setState({ currentActiveState: x })} />
                         </div>
                         {/*<Footer style={{ textAlign: 'center' }}>*/}
                         {/*All Right Reserved &copy; Misfit.Tech 2018*/}
                         {/*</Footer>*/}
                    </Layout>
               </Layout>
          );
     }
}

function mapStateToProps(store) {
     return {
          authReducer: store.authReducer,
     };
}

export default connect(mapStateToProps)(DashboardLayout);
