const DevUrl = "http://localhost:5001";
const ProductionUrl = "https://cipher-backend.herokuapp.com";
const NgrokUrl = "";
const Staging = "";
const status = "production";

module.exports = () => {
     if (status === "dev") {
          return {
               EnvStatus: "dev",
               registerUrl: DevUrl + "/user",
          };
     } else if (status === "production") {
          return {
               EnvStatus: "production",
               registerUrl: ProductionUrl + "/user",
          };
     } else if (status === "ngrok") {
          return {
               EnvStatus: "ngrok",
               registerUrl: NgrokUrl + "/user",
          };
     } else if (status === "staging") {
          return {
               EnvStatus: "staging",
               registerUrl: Staging + "/user",
          };
     } else {
          return {
               msg: "No Data Found",
          };
     }
};
