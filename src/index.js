const http = require("http");
const app = require("./app.js");
const dataBaseConnection = require("./database.js");
const { PORT } = require("./libs/handleConfig.js");

const server = http.createServer(app);
server.listen(`${PORT}`, () => {
  console.log(`server listening on port ${PORT}`);
  dataBaseConnection();
})