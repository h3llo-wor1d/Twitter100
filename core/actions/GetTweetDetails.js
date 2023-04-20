const parseDetails = async (details) => {
    details = JSON.parse(details);
    let entries = details
        .data
        .threaded_conversation_with_injections_v2
        .instructions
        .filter(instruction => instruction.type === "TimelineAddEntries")[0]
        .entries;
    console.log(entries)
    let focusTweet = entries
        .filter(entry => entry.entryId.indexOf("tweet") !== -1)[0]
        .content
        .itemContent
        .tweet_results
        .result
        .legacy
    return focusTweet;
}

module.exports = async (id) => {
    return new Promise((resolve, reject) => {
        global.request.get({
            url: `https://twitter.com/i/api/graphql/BbCrSoXIR7z93lLCVFlQ2Q/TweetDetail?variables=%7B%22focalTweetId%22%3A%22${id}%22%2C%22with_rux_injections%22%3Afalse%2C%22includePromotedContent%22%3Atrue%2C%22withCommunity%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withBirdwatchNotes%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22blue_business_profile_image_shape_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22vibe_api_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Afalse%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Afalse%2C%22interactive_text_enabled%22%3Atrue%2C%22responsive_web_text_conversations_enabled%22%3Afalse%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D`,
            jar: global.session,
            headers: global.headers,
        }, (error, response, body) => {
            if (!error) {
                resolve(parseDetails(body));
            }
            reject();
        })
    })  
}