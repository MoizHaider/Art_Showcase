const mongoObj = require("./database");
const app = require("./app")

mongoObj.mongoConnect(() => {
    app.listen(8080);
  });