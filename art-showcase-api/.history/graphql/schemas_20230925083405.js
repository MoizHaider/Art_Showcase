const {buildSchema} = require("graphql")

module.exports = buildSchema( `

  

  type HomeInitial{
    
  }
  type RootQuery{
    homeQuery: 
  }
  schema{
    query: RootQuery
  }
`)