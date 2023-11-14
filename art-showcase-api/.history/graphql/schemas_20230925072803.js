const {buildSchema} = require("graphql")

module.exports = buildSchema( `

  type data{
    name: String!
  }
  type RootQuery{
    hello: data!
  }
  schema{
    query: RootQuery
  }
`)