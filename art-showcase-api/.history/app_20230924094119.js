const express = require('express')
const expressGraphql = require("express-graphql").graphqlHTTP;
const graphqlSchema = require("./graphql/schemas")
const graphqlResolver = require("./graphql/resolvers")
const app = express();
app.use((req, res, next)=>{
    res.send("hello world")
})

app.use("/graphql",expressGraphql({
    schema : graphqlSchema,
    rea
}))

app.listen(8080)