const {buildSchema} = require("graphql")

module.exports = buildSchema( `

type Post{

}

type Event{
  
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