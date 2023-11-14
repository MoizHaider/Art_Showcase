const {buildSchema} = require("graphql")

//Add creatore field in comment, like, post
module.exports = buildSchema( `

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
  name: String!
  title: String!
  profileImgUrl: String!
  backgroundImgUrl: String!
  about: String!
  badges: [String]!
  events: [String]!
  posts: [Post]!
  savedPosts: [Post]!
}
type ProfileLoad{
  profileData: UserProfile!
}
type RootQuery{
  homeLoadQuery: HomeInitial
  profileLoadQuery(userId: ID!): ProfileLoad
}
type signupData{
  _id: ID!
  email: String!
}
type RootMutation{
  signup(email: String!, password: String!, confirmPassword: String!): Sign
}
  schema{
    query: RootQuery
    mutation: RootMutation
  }
`)