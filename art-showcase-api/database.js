const mongodb = require("mongodb");
require("dotenv").config();
const MongoClient = mongodb.MongoClient;

let db;


exports.mongoConnect = async (cb) => {
  const dbUrl = process.env.MONGODB_URI;
const client = new MongoClient(dbUrl, { useNewUrlParser: true });
  try {
    await client.connect();
    db = client.db("ArtGallery");
    console.log("db connected")
    cb();
  } catch (err) {
    throw "Database not foking found 1";
  }
};

exports.dbConnect = () => {
  if (db) {
    console.log("only this one runs");
    return db;
  } else {
    console.log("only this one runs2");
    return this.mongoConnect(() => {}).then(()=>{return db});
  }
  throw "Database not foking found 2";
};
