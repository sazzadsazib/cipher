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
               notes: DevUrl + "/notes",
          };
     } else if (status === "production") {
          return {
               EnvStatus: "production",
               registerUrl: ProductionUrl + "/user",
               userAuth: ProductionUrl + "/userAuth",
               getUserNote: ProductionUrl + "/getUserNotes",
               notes: ProductionUrl + "/notes",
          };
     } else if (status === "ngrok") {
          return {
               EnvStatus: "ngrok",
               registerUrl: NgrokUrl + "/user",
               userAuth: NgrokUrl + "/userAuth",
               getUserNote: NgrokUrl + "/getUserNotes",
               notes: NgrokUrl + "/notes",
          };
     } else if (status === "staging") {
          return {
               EnvStatus: "staging",
               registerUrl: Staging + "/user",
               userAuth: Staging + "/userAuth",
               getUserNote: Staging + "/getUserNotes",
               notes: Staging + "/notes",
          };
     } else {
          return {
               msg: "No Data Found",
          };
     }
};
