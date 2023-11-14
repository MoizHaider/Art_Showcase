const {buildSchema} = require("graphql")

//Add creatore field in comment, like, post
module.exports = buildSchema( `

type Comment{
  _id: String!
}

type Like{
  _id: String!
}

type Post{
  _id: String!
  creationDate: String!
  likesCount: Int!
  commentsCount: Int!
  saveCount: Int!
  title: String
  description: String
  likes: [Like!]!
  comments: [Comment]
}

type Event{
  _id: String!
  imgUrl: String!
}

type HomeInitial{
  events: [Event]!
  posts: [Post]!
}
type RootQuery{
  homeLoadQuery: HomeInitial
}
  schema{
    query: RootQuery
  }
`)