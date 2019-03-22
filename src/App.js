import React, { Component } from "react";
import RoutePath from "./Utility/RoutePath";
import "./assets/scss/main.scss";

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
          return <RoutePath isMobile={isMobile} />;
     }
}

export default App;
