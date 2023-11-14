const {buildSchema} = require("graphql")

module.exports = buildSchema( `

  type data{
    name: String!
  }
  type RootQuery{
    hello: {
      name: String!
    }
  }
  schema{
    query: RootQuery
  }
`)