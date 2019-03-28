import React, { Component, lazy, Suspense } from "react";
import IconLoader from "../../ReUsableComponents/loader/IconLoader";

const RegisterComponent = lazy(() => {
     return Promise.all([import("./RegisterComponent"), new Promise((resolve) => setTimeout(resolve, 1000))]).then(
          ([moduleExports]) => moduleExports
     );
});

class RegisterWrapper extends Component {
     render() {
          return (
               <Suspense
                    fallback={
                         <div style={{ position: "absolute", top: "47%", left: "47%" }}>
                              <IconLoader />
                         </div>
                    }>
                    <RegisterComponent {...this.props} />
               </Suspense>
          );
     }
}
export default RegisterWrapper;
