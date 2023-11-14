const {buildSchema} = require("graphql")

module.exports = buildSchema( `

type Comment{

}

type Like{

}

type Post{
  _id: String!
  userName: String!
  email: String!
  creationDate: String!
  likesCount: Number!
  commentsCount: Number!
  title: String
  description: String
  
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