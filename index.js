const request = require('request');
global.request = request;

module.exports = class Twitter {
    user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36";
    authorization = "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
    session = null;
    x_guest_token;
    method_check_bypass = false;
    flow_token = null;
    language;
    subtasks = [];

    constructor(language="en") {
        this.language = language;
        global.client = this;
    }

    init = async () => {
        await this.__twitter();
        this.x_guest_token = await this.__get_guest_token();
        console.log(this.x_guest_token);
        console.log("may have failed to get x_guest_token...")
    }

    __twitter = async () => {
        await request.get({url: "https://twitter.com/", jar: this.session, headers: {
            "User-Agent": this.user_agent
        }})
        return;
    }

    __get_headers = () => {
        var csrf = "";
        try {
            let cookie = this.session.getCookieString("https://twitter.com").split('; ').reduce((prev, current) => {
                const [name, ...value] = current.split('=');
                prev[name] = value.join('=');
                return prev;
              }, {});
              csrf = cookie.ct0;
        } catch {}
        
        return {
            "authorization": this.authorization,
            "User-Agent": this.user_agent,
            "Content-type": "application/json",
            "x-guest-token": this.x_guest_token,
            "x-csrf-token": csrf,
            "x-twitter-active-user": "yes",
            "x-twitter-client-language": this.language,
        }
    }

    __get_guest_token = require('./core/auth/__get_guest_token');
    
    login = require('./core/auth/login');

    login_flow = require('./core/auth/login_flow');

    LoginJsInstrumentationSubtask = require('./core/auth/LoginJsInstrumentationSubtask');

    LoginEnterUserIdentifierSSO = require('./core/auth/LoginEnterUserIdentifierSSO');

    LoginEnterPassword = require('./core/auth/LoginEnterPassword');

    AccountDuplicationCheck = require('./core/auth/AccountDuplicationCheck');

    get_subtask_ids = require('./core/util/get_subtask_ids');

    CreateTweet = require('./core/actions/CreateTweet');

    ReplyTweet = require('./core/actions/ReplyTweet');

    LikeTweet = require('./core/actions/LikeTweet');

    UnlikeTweet = require('./core/actions/UnlikeTweet');

    FetchNotifs = require('./core/data/FetchNotifs');

    GetTweetDetails = require('./core/actions/GetTweetDetails');
}   