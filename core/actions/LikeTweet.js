module.exports = async (tweet_id) => {
    return new Promise((resolve, reject) => {
        global.request.post({
            url: "https://twitter.com/i/api/graphql/lI07N6Otwv1PhnEgXILM7A/FavoriteTweet", 
            jar: global.session,
            headers: global.headers,
            body: {
                "queryId": "lI07N6Otwv1PhnEgXILM7A",
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