const express = require('express')
var { graphqlHTTP } = require("express-graphql")
const graphqlSchema = require("./graphql/schemas")
const graphqlResolver = require("./graphql/resolvers")
const app = express();
const path = require("path")

app.use(express.static(path.join(__dirname, 'public')));

app.use("/graphql",graphqlHTTP({
    schema : graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}))

app.listen(8080)