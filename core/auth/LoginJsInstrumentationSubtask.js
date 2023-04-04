module.exports = async () => {
    return new Promise((resolve, reject) => {
        global.request.post({
            url: "https://twitter.com/i/api/1.1/onboarding/task.json", 
            jar:global.client.session,
            headers: global.client.__get_headers(),
            body: {
                "flow_token": global.client.flow_token,
                "subtask_inputs": [
                    {
                        "subtask_id": "LoginJsInstrumentationSubtask",
                        "js_instrumentation": {
                            "response": JSON.stringify(
                                {
                                    "rf": {
                                        "af07339bbc6d24ced887d705eb0c9fd29b4a7d7ddc21136c9f94d53a4bc774d2": 88,
                                        "a6ce87d6481c6ec4a823548be3343437888441d2a453061c54f8e2eb325856f7": 250,
                                        "a0062ad06384a8afd38a41cd83f31b0dbfdea0eff4b24c69f0dd9095b2fb56d6": 16,
                                        "a929e5913a5715d93491eaffaa139ba4977cbc826a5e2dbcdc81cae0f093db25": 186,
                                    },
                                    "s": "Q-H-53m1uXImK0F0ogrxRQtCWTH1KIlPbIy0MloowlMa4WNK5ZCcDoXyRs1q_cPbynK73w_wfHG_UVRKKBWRoh6UJtlPS5kMa1p8fEvTYi76hwdzBEzovieR8t86UpeSkSBFYcL8foYKSp6Nop5mQR_QHGyEeleclCPUvzS0HblBJqZZdtUo-6by4BgCyu3eQ4fY5nOF8fXC85mu6k34wo982LMK650NsoPL96DBuloqSZvSHU47wq2uA4xy24UnI2WOc6U9KTvxumtchSYNnXq1HV662B8U2-jWrzvIU4yUHV3JYUO6sbN6j8Ho9JaUNJpJSK7REwqCBQ3yG7iwMAAAAX2Vqcbs",
                                }
                            ),
                            "link": "next_link",
                        },
                    }
                ],
            },
            json: true
        }, (error, response, body) => {
            if (!error) {
                global.client.subtasks = body.subtasks;
                global.client.flow_token = body.flow_token;
                resolve();
            }
            reject();
        })
    })
}