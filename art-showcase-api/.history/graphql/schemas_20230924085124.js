const {buildSchema} = require("graphql")

module.exports = buildSchema( `
    type Post{
        img: String!
    }
    type Root
`)