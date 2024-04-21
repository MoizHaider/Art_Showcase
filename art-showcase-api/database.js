const mongodb = require("mongodb");
require("dotenv").config();
const MongoClient = mongodb.MongoClient;

let db;

exports.mongoConnect = (cb) => {
  const dbUrl = process.env.MONGODB_URI;
  return MongoClient.connect(`${dbUrl}`, {
    ssl: true,
    serverSelectionTimeoutMS: 10000,
  })
    .then((client) => {
      console.log("MongoDB connected");
      db =  client.db("ArtGallery"); // Return database object
      cb()
      return db;
    })
    .catch((err) => {
      throw new Error("Database connection failed: " + err);
    });
};

exports.dbConnect = () => {
  if (db) {
    console.log("Only this one runs");
    return db; // No need for async or await here
  } else {
    console.log("Only this one runs2");
    return this.mongoConnect().then((database) => {
      db = database;
      return db;
    });
  }
};