const {buildSchema} = require("graphql")

module.exports = buildSchema( `

  type data{
    name: String!
  }
  type RootQuery{
    home
  }
  schema{
    query: RootQuery
  }
`)