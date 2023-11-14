const dbConnect = require('../database')
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
  login(){
    return{
      _id: "3728dkkd",
      email: "edhdfj"
    }
  },
  async signup({email, password, confirmPassword}, req){
    console.log(email)
    try{

    }
    catch(err){

    }

  }
  
};
