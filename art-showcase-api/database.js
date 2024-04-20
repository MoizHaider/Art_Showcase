const mongodb = require("mongodb");
require("dotenv").config();
const MongoClient = mongodb.MongoClient;

let db;
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  mongoConnect: async (cb) => {
    try {
      const dbUrl = process.env.MONGODB_URI;
      await client.connect();
      db = client.db("ArtGallery");
      return callback(null);
    } catch (error) {
      return callback(error);
    }
  },
  dbConnect: () => {
    if (db) {
      return db;
    }
    throw "Database not foking found 2";
  },
};
