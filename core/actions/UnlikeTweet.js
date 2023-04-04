module.exports = async (tweet_id) => {
    return new Promise((resolve, reject) => {
        global.request.post({
            url: "https://twitter.com/i/api/graphql/ZYKSe-w7KEslx3JhSIk5LA/UnfavoriteTweet", 
            jar: global.session,
            headers: global.headers,
            body: {
                "queryId": "ZYKSe-w7KEslx3JhSIk5LA",
                "variables": JSON.stringify(
                    {
                        "tweet_id": tweet_id
                    }
                ),
            },
            json: true
        }, (error, response, body) => {
            if (!error) {
                resolve();
            }
            reject();
        })
    })  
}