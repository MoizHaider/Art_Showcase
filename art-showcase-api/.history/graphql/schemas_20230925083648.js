const {buildSchema} = require("graphql")

module.exports = buildSchema( `


  type RootQuer{
    hello: {
      name: String!
    }
  }
  schema{
    query: RootQuery
  }
`)