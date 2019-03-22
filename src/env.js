const DevUrl = "http://localhost:5001";
const ProductionUrl = "https://cipher-backend.herokuapp.com";
const NgrokUrl = "";
const Staging = "";
const status = "production";

module.exports = () => {
     if (status === "dev") {
          return {
               EnvStatus: "dev",
          };
     } else if (status === "production") {
          return {
               EnvStatus: "production",
          };
     } else if (status === "ngrok") {
          return {
               EnvStatus: "ngrok",
          };
     } else if (status === "staging") {
          return {
               EnvStatus: "staging",
          };
     } else {
          return {
               msg: "No Data Found",
          };
     }
};
