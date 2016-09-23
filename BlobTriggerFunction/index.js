var Jimp = require("jimp");

module.exports = function (context, inputBlob) {
    context.log('Node.js blob trigger function processed blob...');
    Jimp.read(inputBlob, function (err, image) {
        image.scale(0.5);
        context.bindings.outputBlob = image;
        context.done();
    });
};