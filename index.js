const dotenv = require("dotenv");
const server = require("./app.js");
dotenv.config();

server.listen(process.env.PORT, () => {
  console.log("Backend server is running!");
});
