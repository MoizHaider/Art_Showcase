const express = require('express')
const expressGraphQL = require("express-graphql").graphqlHTTP;

const app = express();
app.use((req, res, next)=>{
    res.send("hello world")
})

app.listen(8080)