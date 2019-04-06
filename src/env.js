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
               getUserNote: DevUrl + "/getUserNotes",
          };
     } else if (status === "production") {
          return {
               EnvStatus: "production",
               registerUrl: ProductionUrl + "/user",
               userAuth: ProductionUrl + "/userAuth",
               getUserNote: ProductionUrl + "/getUserNotes",
          };
     } else if (status === "ngrok") {
          return {
               EnvStatus: "ngrok",
               registerUrl: NgrokUrl + "/user",
               userAuth: NgrokUrl + "/userAuth",
               getUserNote: NgrokUrl + "/getUserNotes",
          };
     } else if (status === "staging") {
          return {
               EnvStatus: "staging",
               registerUrl: Staging + "/user",
               userAuth: Staging + "/userAuth",
               getUserNote: Staging + "/getUserNotes",
          };
     } else {
          return {
               msg: "No Data Found",
          };
     }
};
