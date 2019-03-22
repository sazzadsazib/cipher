import React from "react";
import "./../../../assets/scss/_loader.scss";

function DottedLoader(props) {
     return (
          <div className='lds-grid'>
               <div />
               <div />
               <div />
               <div />
               <div />
               <div />
               <div />
               <div />
               <div />
          </div>
     );
}
export default DottedLoader;
