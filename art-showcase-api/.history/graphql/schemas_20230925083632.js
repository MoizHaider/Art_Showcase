const {buildSchema} = require("graphql")

module.exports = buildSchema( `


  type Roo
  schema{
    query: RootQuery
  }
`)