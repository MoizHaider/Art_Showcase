const mongodb = require("mongodb");
require("dotenv").config();
const MongoClient = mongodb.MongoClient;

let db;

exports.mongoConnect =  (cb) => {
  const dbUrl = process.env.MONGODB_URI;
  MongoClient.connect(`${dbUrl}`, {
    ssl: true,
    serverSelectionTimeoutMS: 10000,
  })
    .then(async (client) => {
      console.log("MongoDB connected"); // Optional: Log success message
      db =  client.db("ArtGallery");
      console.log(db)
      cb()
    })
    .catch((err) => {
      throw "Database not foking found 1";
    });
};

exports.dbConnect =  () => {
  if (db) {
    console.log("only this one runs")
    return db;
  }
  else{
    console.log("only this one runs2")
     this.mongoConnect(()=>{})
    return db;
  }
  throw "Database not foking found 2";
};
