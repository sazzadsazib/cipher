import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { GoogleLogin } from "react-google-login";

class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               width: window.innerWidth,
          };
     }

     handleWindowSizeChange = () => {
          this.setState({ width: window.innerWidth });
     };
     componentWillMount() {
          window.addEventListener("resize", this.handleWindowSizeChange);
     }

     componentWillUnmount() {
          window.removeEventListener("resize", this.handleWindowSizeChange);
     }

     render() {
          const { width } = this.state;
          const isMobile = width <= 600;
          if (isMobile) {
               return (
                    <Switch>
                         <Route
                              exact
                              path='/'
                              component={() => (
                                   <div>
                                        <GoogleLogin
                                             clientId='479429734653-ns6uurld7sbm9heir0mjhrlis6tj3kpq.apps.googleusercontent.com'
                                             buttonText='Login'
                                             onSuccess={(e) => console.log(e)}
                                             onFailure={(e) => console.log(e)}
                                        />
                                   </div>
                              )}
                         />
                         <Route path='/login' component={() => <div>Login</div>} />
                         <Route path='*' exact={true} component={() => <div>Lost</div>} />
                    </Switch>
               );
          } else {
               return (
                    <Switch>
                         <Route exact path='/' component={() => <div>PC ROOT </div>} />
                         <Route path='/login' component={() => <div>PCLogin</div>} />
                         <Route path='*' exact={true} component={() => <div>PC Lost</div>} />
                    </Switch>
               );
          }
     }
}

export default App;
