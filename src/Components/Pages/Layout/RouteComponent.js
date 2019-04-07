import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Notes from "./Notes";
import CreateNotes from "./CreateNotes";
import Viewer from "./Viewer/Viewer";

class RouteComponent extends Component {
     render() {
          return (
               <Switch>
                    <Route
                         exact
                         path='/dashboard/notes'
                         render={(props) => (
                              <Notes isMenuAvailable={this.props.isMenuAvailable} setCurrentState={this.props.setCurrentState} {...props} />
                         )}
                    />
                    <Route
                         exact
                         path='/dashboard/notes/create'
                         render={(props) => (
                              <CreateNotes
                                   isMenuAvailable={this.props.isMenuAvailable}
                                   setCurrentState={this.props.setCurrentState}
                                   {...props}
                              />
                         )}
                    />
                    <Route
                         exact
                         path='/dashboard/notes/:noteId'
                         render={(props) => (
                              <Viewer
                                   isMenuAvailable={this.props.isMenuAvailable}
                                   visible={this.props.visible}
                                   setVisible={this.props.setVisible}
                                   setCurrentState={this.props.setCurrentState}
                                   {...props}
                              />
                         )}
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
