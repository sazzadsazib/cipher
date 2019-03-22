import React from "react";
import Icon from "./../../../assets/images/general/loader-icon.svg";

function IconLoader(props) {
     return (
          <div>
               <img src={Icon} alt={"loader-icon"} style={props.width !== undefined ? { width: props.width } : { width: 50 }} />
          </div>
     );
}
export default IconLoader;
