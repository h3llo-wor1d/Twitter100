module.exports = async (text) => {
    return new Promise((resolve, reject) => {
        global.request.post({
            url: "https://twitter.com/i/api/graphql/XyvN0Wv13eeu_gVIHDi10g/CreateTweet", 
            jar: global.session,
            headers: global.headers,
            body: {
                "queryId": "XyvN0Wv13eeu_gVIHDi10g",
                "variables": JSON.stringify(
                    {
                        "tweet_text": text,
                        "media": {"media_entities": [], "possibly_sensitive": false},
                        "withDownvotePerspective": false,
                        "withReactionsMetadata": false,
                        "withReactionsPerspective": false,
                        "withSuperFollowsTweetFields": true,
                        "withSuperFollowsUserFields": false,
                        "semantic_annotation_ids": [],
                        "dark_request": false,
                        "withBirdwatchPivots": false,
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