module.exports = async (password) => {
    return new Promise((resolve, reject) => {
        global.request.post({
            url: "https://twitter.com/i/api/1.1/onboarding/task.json", 
            jar:global.client.session,
            headers: global.client.__get_headers(),
            body: {
                "flow_token": global.client.flow_token,
                "subtask_inputs": [
                    {
                        "subtask_id": "LoginEnterPassword",
                        "enter_password": {"password": password, "link": "next_link"},
                    }
                ],
            },
            json: true
        }, (error, response, body) => {
            if (!error) {
                global.client.flow_token = body.flow_token;
                global.client.subtasks = body.subtasks
                resolve();
            }
            reject();
        })
    })
}