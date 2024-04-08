const mongodb = require("mongodb");
require("dotenv").config();
const MongoClient = mongodb.MongoClient;

let db;

exports.mongoConnect = () => {
  const dbUrl = process.env.MONGODB_URI;
  MongoClient.connect(`${dbUrl}`, {
    ssl: true,
    serverSelectionTimeoutMS: 10000,
  })
    .then((client) => {
      db = client.db("ArtGallery");
    })
    .catch((err) => {
      throw "Database not foking found 1";
    });
};

exports.dbConnect = () => {
  if (db) {
    return db;
  }
  throw "Database not foking found 2";
};
