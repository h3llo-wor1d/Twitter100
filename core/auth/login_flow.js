module.exports = async () => {
    return new Promise((resolve, reject) => {
        global.request.post({
            url: "https://twitter.com/i/api/1.1/onboarding/task.json?flow_name=login", 
            jar:global.client.session,
            headers: global.client.__get_headers(),
            body: {
                "input_flow_data": {
                    "flow_context": {
                        "debug_overrides": {},
                        "start_location": {"location": "splash_screen"},
                    }
                },
                "subtask_versions": {
                    "contacts_live_sync_permission_prompt": 0,
                    "email_verification": 1,
                    "topics_selector": 1,
                    "wait_spinner": 1,
                    "cta": 4,
                },
            },
            json: true
        }, (error, response, body) => {
            if (!error) {
                body = JSON.parse(body);
                global.client.subtasks = body.subtasks;
                global.client.flow_token = body.flow_token;
                resolve();
            }
            reject();
        })
    })
}
