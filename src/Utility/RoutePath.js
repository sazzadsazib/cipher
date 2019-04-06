import React from "react";
import { Switch, Route } from "react-router";
import LoginWrapper from "../Components/Pages/Login/LoginWrapper";
import RegisterWrapper from "../Components/Pages/Register/RegisterWrapper";
import Layout from "../Components/Pages/Layout/Layout";

function RoutePath(props) {
     if (props.isMobile) {
          return (
               <Switch>
                    <Route exact path='/' component={LoginWrapper} />
                    <Route exact path='/register' component={RegisterWrapper} />
                    <Route exact path='/home' component={Layout} />
                    <Route path='*' exact={true} component={() => <div>Lost</div>} />
               </Switch>
          );
     } else {
          return (
               <Switch>
                    <Route exact path='/' component={LoginWrapper} />
                    <Route exact path='/register' component={RegisterWrapper} />
                    <Route exact path='/home' component={Layout} />
                    <Route path='*' exact={true} component={() => <div>PC Lost</div>} />
               </Switch>
          );
     }
}
export default RoutePath;
