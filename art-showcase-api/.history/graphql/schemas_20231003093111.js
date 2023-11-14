const { buildSchema } = require("graphql");

//Add creatore field in comment, like, post
module.exports = buildSchema(`

type Comment{
  _id: ID!
}

type Like{
  _id: ID!
}

type Post{
  _id: ID!
  creationDate: String!
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
  badges: [String]!
  events: [String]!
  posts: [Post]!
  savedPosts: [Post]!
  followers: [UserProfile]!
  following: [UserProfile]1
  followersCount: Int!
  followingCount: Int!
}
type ProfileLoad{
  profileData: UserProfile!
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
