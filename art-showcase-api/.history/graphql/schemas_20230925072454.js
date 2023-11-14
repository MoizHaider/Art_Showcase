const {buildSchema} = require("graphql")

module.exports = buildSchema( `

  type RootQuery{
    data:
  }
  schema{
    query: RootQuery
  }
`)