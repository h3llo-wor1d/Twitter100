module.exports = async () => {
    return new Promise((resolve, reject) => {
        global.request.post({url: "https://api.twitter.com/1.1/guest/activate.json", jar: global.client.session,
        headers: {
            "authorization": global.client.authorization,
            "User-Agent": global.client.user_agent,
        }}, (error, response, body) => {
            if (!error) {          
                resolve(body.guest_token);
            } 
            reject();
        })
    })  
}