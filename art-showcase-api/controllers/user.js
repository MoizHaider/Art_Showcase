const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const { dbConnect } = require("../database");
const { getDate } = require("../Utils/Date");

exports.addUserDetails = async (req, res, next) => {
  if ((req.isAuth = false)) {
    const error = new Error("Not Authenticated");
    error.code = 400;
    throw error;
  }
  
  const { name, title, _id, profileUrl, backgroundUrl, about } = req.body;

  console.log("body", req.body)

  console.log(name);
  console.log(title);

  console.log("profile ", profileUrl);
  console.log("bg ", backgroundUrl);
  console.log("id ", _id)
  console.log("id ", about)

  const objId = new ObjectId(_id);
  const db = await dbConnect();
  try {
    const response = await db.collection("usersData").updateOne(
      { _id: objId },
      {
        $set: {
          name: name,
          title: title,
          profilePicUrl: profileUrl,
          backgroundImgUrl: backgroundUrl,
          about: about,
        },
      }
    );

    console.log("update data", response);
    res.status(200).send({ message: "success" });
  } catch (err) {
    throw new Error(err);
  }
};

exports.addNewPost = async (req, res, next) => {
  if (!req.isAuth) {
    throw new Error("not authenticated");
  }
  console.log("runiing");
  const objId = new ObjectId(req.get("userId"));
  const email = req.get("email");
  const name = req.get("name");
  const profilePicUrl = req.get("profilePicUrl");
  const postUrls = JSON.parse(req.get("urls"));

  const title = req.get("title");
  const description = req.get("description");
  const newPost = {
    urls: postUrls,
    creationDate: new Date().toLocaleDateString(),
    likesCount: 0,
    commentsCount: 0,
    saveCount: 0,
    title: title,
    description: description,
    likes: [],
    score: 500, //Initial Score for the latest posts
    comments: [],
    user: {
      _id: objId,
      email: email,
      name: name,
      profilePicUrl: profilePicUrl,
    },
  };
  const db = await dbConnect();
  let response = {
    postId: null,
    userId: null,
    email: null,
  };
  const postInsrtRes = await db.collection("posts").insertOne(newPost);
  const userPostInsrtRes = await db.collection("usersData").updateOne(
    { _id: objId },
    {
      $push: {
        posts: {
          $each: [postInsrtRes.insertedId.toString()],
          $position: 0,
        },
      },
    }
  );

  newPost._id = postInsrtRes.insertedId.toString();
  res.json(newPost);
  next();
};
