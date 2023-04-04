module.exports = async (tweet_id) => {
    return new Promise((resolve, reject) => {
        global.request.post({
            url: "https://twitter.com/i/api/graphql/iQtK4dl5hBmXewYZuEOKVw/DeleteRetweet", 
            jar: global.session,
            headers: global.headers,
            body: {
                "queryId": "iQtK4dl5hBmXewYZuEOKVw",
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