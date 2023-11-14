const {buildSchema} = require("graphql")

module.exports = buildSchema( `

  type HomeInitial{
    name: String!
  }
  type RootQuery{
    homeQuery: 
  }
  schema{
    query: RootQuery
  }
`)