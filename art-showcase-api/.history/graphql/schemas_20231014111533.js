const { buildSchema } = require("graphql");

//Add creatore field in comment, like, post
module.exports = buildSchema(`

type Comment{
  _id: ID!
}

type userData{
  _id: ID!
  name: String!
  profilePicUrl: String!
  backgroundImgUrl: String!
}

type Like{
  user: userData
}

type Comment{
  text: String!
  user: userData!
}

type Post{
  _id: ID!
  urls: [String]
  creationDate: String
  likesCount: Int!
  commentsCount: Int!
  saveCount: Int!
  title: String
  description: String
  likes: [Like!]!
  comments: [Comment]!
}

type Event{
  _id: ID!
  imgUrl: String!
}

type HomeInitial{
  events: [Event]!
  posts: [Post]!
}

type UserProfile{
  _id: ID!
  name: String!
  title: String!
  email: String!
  profilePicUrl: String!
  backgroundImgUrl: String!
  about: String!
  badges: [String]
  events: [String]
  posts: [ID]!
  savedPosts: [Post]
  followers: [ID]!
  following: [ID]!
  followersCount: Int!
  followingCount: Int!
}

type ProfileLoad{
  userData: UserProfile!
  posts: [Post]!
}

type signupData{
  _id: ID!
  email: String!
}
type loginData{
  _id: ID!
  token: String!
}
type RootMutation{
  signup(email: String!, password: String!, confirmPassword: String!): signupData!
  likePost(postId: String!, userData: userData!):
}
type RootQuery{
  homeLoadQuery: HomeInitial
  profileLoadQuery(userId: ID!): ProfileLoad
  login(email: String!, password: String!): loginData
  isLoggedIn(token: String!, _id: ID!): loginData!
}
  schema{
    query: RootQuery
    mutation: RootMutation
  }
`);
