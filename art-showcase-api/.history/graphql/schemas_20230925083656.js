const {buildSchema} = require("graphql")

module.exports = buildSchema( `


  type RootQuery{
    hello: {
      name: String!
    }
  }
  schema{
    query: RootQuery
  }
`)