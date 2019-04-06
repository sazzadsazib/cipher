import React, { Component } from "react";
import IconLoader from "../../ReUsableComponents/loader/IconLoader";
import { connect } from "react-redux";

class Logout extends Component {
     componentDidMount() {
          setTimeout(() => {
               this.props.userLogout();
               this.props.history.push("/?logout");
          }, 1000);
     }
     render() {
          return (
               <div style={{ position: "absolute", top: "47%", left: "47%" }}>
                    <IconLoader />
                    <p style={{ color: "teal", fontSize: 8, marginTop: 5 }}>Logging Out...</p>
               </div>
          );
     }
}

function mapStateToProps(store) {
     return {
          authReducer: store.authReducer,
     };
}

const mapDispatchToState = (dispatch, ownProps) => {
     return {
          userLogout: () => dispatch({ type: "GET_LOGOUT_SUCCESS", payload: {} }),
     };
};

export default connect(
     mapStateToProps,
     mapDispatchToState
)(Logout);
