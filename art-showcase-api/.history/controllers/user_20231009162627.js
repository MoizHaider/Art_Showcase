const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const { dbConnect } = require("../database");


exports.addUserDetails = (req, res, next) => {
  if ((req.isAuth = false)) {
    const error = new Error("Not Authenticated");
    error.code = 400;
    throw error;
  }
  const objId = new ObjectId(req.body._id);
  console.log(req.body);
  const db = dbConnect();
  db.collection("usersData")
    .updateOne(
      { _id: objId },
      {
        $set: {
          name: req.body.name,
          title: req.body.title,
          profilePicUrl: req.files.profileImg[0].path,
          backgroundImgUrl: req.files.backgroundImg[0].path,
          about: req.body.about,
        },
      }
    )
    .then(() => res.status(200).send({ message: "success" }));
};

exports.addNewPost = (req, res, next) => {
  if (!req.isAuth) {
    throw new Error("not authenticated");
  }

  const 
  console.log("id ", req.get("userId"))
  console.log("This is hell ", req.body)
  console.log(req.file)
  const objId = new ObjectId(req.get("userId"));
  const newPost = {
    url: null,
    createionDate: new Date().toLocaleDateString(),
    likesCount: 0,
    commentsCount: 0,
    saveCount: 0,
    title: req.body.title,
    description: req.body.description,
    likes: [],
    comments: []
  }
  const db = dbConnect();
  db.collection("usersData").updateOne(
    { _id: objId },
    {
      $push: {
          posts: {
              $each: [newPost],
              $position: 0
          }
      }
  }
  );
};
