const express = require('express')
const expressGraphql = require("express-graphql").graphqlHTTP;
const graphqlSchema = require("./graphql/schemas")
const graphqlResolver = require("./graphql/resolvers")
const app = express();
const path = require("path")

express.static(path.join(__dirname, 'public'));
app.use((req, res, next)=>{
    res.send("hello world")
})

app.use("/graphql",expressGraphql({
    schema : graphqlSchema,
    rootValue: graphqlResolver
}))

app.listen(8080)