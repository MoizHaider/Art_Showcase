const {buildSchema} = require("graphql")

module.exports = buildSchema( `

  type data
  type RootQuery{
    data:
  }
  schema{
    query: RootQuery
  }
`)