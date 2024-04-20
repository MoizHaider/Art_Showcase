const mongodb = require("mongodb");
require("dotenv").config();
const MongoClient = mongodb.MongoClient;

let db;

exports.mongoConnect = () => {
  const dbUrl = process.env.MONGODB_URI;
  return MongoClient.connect(`${dbUrl}`, {
    ssl: true,
    serverSelectionTimeoutMS: 10000,
  })
    .then((client) => {
      db = client.db("ArtGallery");
    })
    .catch((err) => {
      throw new Error("Database connection failed: " + err);
    });
};

exports.dbConnect = () => {
  if (db) {
    return Promise.resolve(db);
  } else {
    return new Promise((resolve, reject) => {
      this.mongoConnect()
        .then(() => {
          resolve(db);
        })
        .catch((err) => {
          reject(new Error("Database connection failed: " + err));
        });
    });
  }
};
