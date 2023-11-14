const {buildSchema} = require("graphql")

module.exports = buildSchema( `

  type data
  type RootQuery{
    hello: {
      name: String!
    }
  }
  schema{
    query: RootQuery
  }
`)