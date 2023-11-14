const express = require("express");
var { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schemas");
const graphqlResolver = require("./graphql/resolvers");
const app = express();
const path = require("path");
const userController = require("./controllers/user");
const bodyParser = require("body-parser");
const multer = require("multer")

const fileStorage = {
  destination(req, file, cb){
    cb(null, "public/images")
  },
  filename(req, file, cb){
    cb(null, Date.now() + "-" + file.originalname)
  }
}
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(multer(storage: fileStorage))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.post("/signup", userController.signup);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

app.listen(8080);
