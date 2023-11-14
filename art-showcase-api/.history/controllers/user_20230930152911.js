const mongodb = require("mongodb")
const ObjectId = mongodb.ObjectId;
const { dbConnect } = require("../database");
exports.addUserDetails = (req, res, next) => {
    const objId = new ObjectId(req.body._id)
  console.log(req.body)  
  const db = dbConnect();
  db.collection("usersData").updateOne(
    { _id: req.body._id },
    {
      $set: {
        name: req.body.name,
        title: req.body.title,
        profilePicUrl: req.files.profileImg[0].path,
        backgroundImgUrl: req.files.backgroundImg[0].path,
        about: req.body.about,
      },
    }
  );
};
