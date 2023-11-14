const { dbConnect } = require("../database");
exports.addUserDetails = (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  const db = dbConnect();
  db.collection("usersData").updateOne({ _id: req.body._id }, { $set: {
    name: req.body.name,
    title: req.body.title,
    profilePicUrl: req.files.profileImg[0].path,
    backgroundImgUrl: req.files.backgroundImg[0].path,
    
  } });
}
