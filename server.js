// server.js
const app = require("./src/app");
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("Running on " + process.env.NODE_ENV + " mode...");
    console.log("Listening to requests on : http://" + process.env.DEV_HOST + ":" + process.env.PORT + "/api/v1/");
});