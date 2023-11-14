const { dbConnect } = require("../database");
const bcrypt = require("bcrypt");
module.exports = {
  homeLoadQuery: () => {
    return {
      posts: [
        {
          _id: "123",
          creationDate: "2023",
          likesCount: 10,
          commentsCount: 20,
          saveCount: 30,
          title: "hello",
          description: "wordl",
          likes: [
            {
              _id: "2",
            },
          ],
          comments: [
            {
              _id: "45",
            },
          ],
        },
      ],
      events: [
        {
          _id: "22",
          imgUrl: "234",
        },
      ],
    };
  },
  profileLoadQuery() {
    return {
      profileData: {
        name: "Moiz",
        title: "Hello moiz",
        profileImgUrl: "23",
        backgroundImgUrl: "34",
        about: "hello",
        badges: ["hh"],
        events: ["ee"],
        posts: [
          {
            _id: "123",
            creationDate: "2023",
            likesCount: 10,
            commentsCount: 20,
            saveCount: 30,
            title: "hello",
            description: "wordl",
            likes: [
              {
                _id: "2",
              },
            ],
            comments: [
              {
                _id: "45",
              },
            ],
          },
        ],
        savedPosts: [
          {
            _id: "123",
            creationDate: "2023",
            likesCount: 10,
            commentsCount: 20,
            saveCount: 30,
            title: "hello",
            description: "wordl",
            likes: [
              {
                _id: "2",
              },
            ],
            comments: [
              {
                _id: "45",
              },
            ],
          },
        ],
      },
    };
  },
  async login({ email, password }, req) {
    const db = dbConnect();
    const userData = await db
      .collection("usersData")
      .find({ email: email })
      .next();
    if(!userData){
      const error = new Error("User not Found")
      error.code = 401;
      throw error;
    }
    bcrypt
      .compare(password, userData.password)
      .then((res) => {
        if(!res){
          const error = new Error("Invalid Password");
          error.code = 401;
          throw error;
        }
        
        
      })
      .catch((err) => {
        err.message = "Password Comparing Function Failed"
        next(err);
      });
    console.log(userData);
    return {
      _id: "3728dkkd",
      email: "edhdfj",
    };
  },
  async signup({ email, password, confirmPassword }, req) {
    const hashPass = await bcrypt.hash(password, 12);
    try {
      const db = dbConnect();
      //Check wether the email already exists first
      const data = await db.collection("usersData").insertOne({
        name: "",
        title: "",
        email: email,
        password: hashPass,
        posts: [],
        savedPosts: [],
        profilePicUrl: "",
        backgroundImgUrl: "",
        about: "",
        badges: [],
        events: [],
        followers: [],
        following: [],
      });

      return {
        _id: data.insertedId.toString(),
        email: email,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
