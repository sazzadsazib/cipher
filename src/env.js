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
               userAuth: DevUrl + "/userAuth",
          };
     } else if (status === "production") {
          return {
               EnvStatus: "production",
               registerUrl: ProductionUrl + "/user",
               userAuth: ProductionUrl + "/userAuth",
          };
     } else if (status === "ngrok") {
          return {
               EnvStatus: "ngrok",
               registerUrl: NgrokUrl + "/user",
               userAuth: NgrokUrl + "/userAuth",
          };
     } else if (status === "staging") {
          return {
               EnvStatus: "staging",
               registerUrl: Staging + "/user",
               userAuth: Staging + "/userAuth",
          };
     } else {
          return {
               msg: "No Data Found",
          };
     }
};
