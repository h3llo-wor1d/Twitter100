module.exports = async (tweet_id) => {
    return new Promise((resolve, reject) => {
        global.request.post({
            url: "https://twitter.com/i/api/graphql/ojPdsZsimiJrUGLR1sjUtA/CreateRetweet", 
            jar: global.session,
            headers: global.headers,
            body: {
                "queryId": "ojPdsZsimiJrUGLR1sjUtA",
                "variables": JSON.stringify(
                    {
                        "tweet_id": tweet_id,
                        "dark_request": false
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