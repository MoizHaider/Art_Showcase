const express = require('express')
const expressGraphql = require("express-graphql").graphqlHTTP;

const app = express();
app.use((req, res, next)=>{
    res.send("hello world")
})

app.use(expressGraphql({
    
}))

app.listen(8080)