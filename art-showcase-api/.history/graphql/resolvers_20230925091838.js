
module.exports = {
    homeLoadQuery: ()=>{
        return{
            _id: "123",
            creationDate: "2023",
            likesCount: 10,
            commentsCount: 20,
            saveCount: 30,
            title: "hello",
            description: "wordl",
            likes: [{
                _id: "2"
            }]
            comments: [{
                _id: "45"
            }]
        }
    }
}