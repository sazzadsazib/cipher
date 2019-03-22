import React from "react";
import { Switch, Route } from "react-router";
import LoginWrapper from "../Components/Pages/Login/LoginWrapper";

function RoutePath(props) {
     if (props.isMobile) {
          return (
               <Switch>
                    <Route exact path='/' component={LoginWrapper} />
                    <Route path='/login' component={() => <div>Login</div>} />
                    <Route path='*' exact={true} component={() => <div>Lost</div>} />
               </Switch>
          );
     } else {
          return (
               <Switch>
                    <Route exact path='/' component={LoginWrapper} />
                    <Route path='/login' component={() => <div>PCLogin</div>} />
                    <Route path='*' exact={true} component={() => <div>PC Lost</div>} />
               </Switch>
          );
     }
}
export default RoutePath;
