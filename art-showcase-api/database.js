const mongodb = require("mongodb");
require("dotenv").config();
const MongoClient = mongodb.MongoClient;

let db;

exports.mongoConnect = (cb) => {
  const dbUrl = process.env.MONGODB_URI;
  MongoClient.connect(`${dbUrl}`, {
    ssl: true,
    serverSelectionTimeoutMS: 10000,
  })
    .then((client) => {
      db = client.db("ArtGallery");
      cb()
    })
    .catch((err) => {
      throw "Database not foking found 1";
    });
};


exports.dbConnect = async () => {
  if (db) {
    return db;
  }
  else{
    try {
      await this.mongoConnect();
      return db;
    } catch (error) {
      throw new Error("Database connection failed: " + error);
    }
  }
};
