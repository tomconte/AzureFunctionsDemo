var Twitter = require('twitter');

// Please visit http://go.microsoft.com/fwlink/?LinkID=761099&clcid=0x409 for more information on settting up Github Webhooks
module.exports = function (context, data) {
    context.log('GitHub Webhook triggered!', data);
    context.res = { body: 'GitHub event: ' + data };

    var twitter = new Twitter({
        consumer_key: 'C2minarHVC8uS8eH8Hj5wdDtw',
        consumer_secret: 'iJfm5iIXKF0lxIANxFVBXYIJ5RqOka3ZKfi1Q09zuUbAIYeH6q',
        access_token_key: '6029222-BYoKLdBP4Li2cZ1xItMYGZCQbe41Swkhc4oJFMTs70',
        access_token_secret: 'HUgoblxNDstMHoaf9zTddvqkIxgxFilPdagwVnY8Psbmg'
    });

    twitter.post('statuses/update', {
        status: "J'ai mis à jour mon blog ! http://hypernephelist.com/ Merci #Azure Functions :) #experiences"
    }, function(error, tweet, response) {
        context.done();
    });
};