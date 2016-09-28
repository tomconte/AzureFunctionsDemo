module.exports = function(context, req) {
    context.log('Node.js HTTP trigger function processed a request. body=%s', req.body);

    if (req.body) {
        context.res = {
            body: eval(req.body)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass some valid JavaScript for evaluation."
        };
    }
    context.done();
};