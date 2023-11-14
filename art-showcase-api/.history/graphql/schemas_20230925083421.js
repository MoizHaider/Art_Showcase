const {buildSchema} = require("graphql")

module.exports = buildSchema( `

  type Post{
    
  }

  type HomeInitial{
    
  }
  type RootQuery{
    homeQuery: 
  }
  schema{
    query: RootQuery
  }
`)