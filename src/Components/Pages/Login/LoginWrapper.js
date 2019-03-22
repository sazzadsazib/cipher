import React, { Component, lazy, Suspense } from "react";
import IconLoader from "../../ReUsableComponents/loader/IconLoader";

const LoginComponent = lazy(() => {
     return Promise.all([import("./LoginComponent"), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
          ([moduleExports]) => moduleExports
     );
});

class LoginWrapper extends Component {
     render() {
          return (
               <Suspense
                    fallback={
                         <div style={{ position: "absolute", top: "47%", left: "47%" }}>
                              <IconLoader />
                         </div>
                    }>
                    <LoginComponent {...this.props} />
               </Suspense>
          );
     }
}
export default LoginWrapper;
