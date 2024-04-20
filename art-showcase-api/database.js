const mongodb = require("mongodb");
require("dotenv").config();
const MongoClient = mongodb.MongoClient;

let db;
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

exports.mongoConnect = async (cb) => {
  try {
    const dbUrl = process.env.MONGODB_URI;
    await client.connect();
    db = client.db("ArtGallery");
    cb();
  } catch (err) {
    throw "Database not foking found 1";
  }
};

exports.dbConnect = async () => {
  if (db) {
    return db;
  } else {
    try {
      await this.mongoConnect();
      return db;
    } catch (error) {
      throw new Error("Database connection failed: " + error);
    }
  }
};
