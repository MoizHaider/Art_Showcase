
module.exports = {
    homeLoadQuery: ()=>{
        return{
            posts: [{
                _id: "123",
                creationDate: "2023",
                likesCount: 10,
                commentsCount: 20,
                saveCount: 30,
                title: "hello",
                description: "wordl",
                likes: [{
                    _id: "2"
                }],
                comments: [{
                    _id: "45"
                }]
            }],
            events: [{
                _id: "22",
                imgUrl: "234"
            }]
        }
    },
    profileLoadQuery(){
        return {
            
        }
    }

}