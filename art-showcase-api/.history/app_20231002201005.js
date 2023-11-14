const express = require("express");
var { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schemas");
const graphqlResolver = require("./graphql/resolvers");
const app = express();
const path = require("path");
const userController = require("./controllers/user");
const bodyParser = require("body-parser");
const multer = require("multer");
const mongoObj = require("./database");
const ObjectId = require("mongodb").ObjectId;
const auth = require("./middleware/auth")

const fileStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/images");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const upload = multer({ storage: fileStorage });

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
app.use(auth)
app.post(
  "/create-user-details",
  upload.fields([
    { name: "profileImg", maxCount: 1 },
    { name: "backgroundImg", maxCount: 1 },
  ]),
  userController.addUserDetails
);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError(err){
      console.log(err.or)
      if(!err.orighnalError){
        return err;
      }
      const data = err.originalError.data;
      const message = err.message || "Server Error occured";
      const code = err.code || 500;
      return {message, status: code, data}
    }
  })
);
mongoObj.mongoConnect(() => {
  app.listen(8080);
});
