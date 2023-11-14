const dbConnect = require('../database')
module.exports = {
  homeLoadQuery: () => {
    
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
  login(){
    return{
      _id: "3728dkkd",
      email: "edhdfj"
    }
  },
  signup({user, password, confirmPassword}, req){
    const db = dbConnect();
    db.collection("usersData").insertOne({
      name: "",
      title: "",
      email: email,
      password: password,
      posts: [],
      savedPosts: [],
      profilePicUrl: "",
      backgroundImgUrl: "",
      about: "",
      badges: [],
      events: [],
      followers: [],
      following: [],
    })
  }
};
