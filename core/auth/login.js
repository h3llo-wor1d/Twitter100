const FileCookieStore = require('tough-cookie-filestore');
const fs = require('fs');

module.exports = async (username, password) => {
    if(!fs.existsSync("cookies.json")){
        fs.closeSync(fs.openSync("cookies.json", 'w'));
        global.client.session = request.jar(new FileCookieStore("cookies.json"));
        await global.client.login_flow();
        await global.client.LoginJsInstrumentationSubtask();
        console.log("Logging into twitter...")
        await global.client.LoginEnterUserIdentifierSSO(username);
        console.log("Doing password")
        await global.client.LoginEnterPassword(password);
        console.log("Finished that shit, onto substacks")
        let subtasks = global.client.get_subtask_ids();
        if (subtasks && subtasks.indexOf("AccountDuplicationCheck") !== -1) {
            await global.client.AccountDuplicationCheck()
        }
        subtasks = global.client.get_subtask_ids();
        if (subtasks && subtasks.indexOf("LoginSuccessSubtask") !== -1) {
            // Successful login to Twitter
            global.session = global.client.session;
            global.headers = global.client.__get_headers();
            return true
        }
        return false
    } else {
        // Load existing login credentials
        global.client.session = request.jar(new FileCookieStore("cookies.json"));
        global.session = global.client.session;
        global.headers = global.client.__get_headers();
        return true;
    }
}