const {buildSchema} = require("graphql")

module.exports = buildSchema( `
  type Query {
    hello: Name!
  }
  type Name{
    name: String!
  }
`)