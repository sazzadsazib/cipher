import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Notes from "./Notes";
import CreateNotes from "./CreateNotes";

class RouteComponent extends Component {
     render() {
          return (
               <Switch>
                    <Route
                         exact
                         path='/dashboard/notes'
                         render={(props) => <Notes setCurrentState={this.props.setCurrentState} {...props} />}
                    />
                    <Route
                         exact
                         path='/dashboard/notes/create'
                         render={(props) => <CreateNotes setCurrentState={this.props.setCurrentState} {...props} />}
                    />
                    <Route
                         path='*'
                         exact={true}
                         render={(props) => <div style={{ textAlign: "center", marginTop: 30 }}>Lost in Dashbaord</div>}
                    />
               </Switch>
          );
     }
}
export default RouteComponent;
