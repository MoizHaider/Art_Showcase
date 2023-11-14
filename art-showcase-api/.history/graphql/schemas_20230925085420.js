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
}

type Event{
  
}

type HomeInitial{
  
}
type RootQuery{
  homeQuery: 
}
  schema{
    query: RootQuery
  }
`)