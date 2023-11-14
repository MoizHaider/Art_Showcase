const {buildSchema} = require("graphql")

module.exports = buildSchema( `

type Comment{
  _id: String!
  post_id
}

type Like{

}

type Post{
  _id: String!
  userName: String!
  email: String!
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