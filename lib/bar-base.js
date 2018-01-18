"use strict";

var codabar = require('./codabar');

var repeatV = function (bin, n) {
    var matrix = [];
    for (var i = 0; i <= n; i++)
        matrix.push(bin)
    return matrix;
}

exports.BAR = function (text, height) {
    var encoded = codabar(text);
    var bits = encoded.data.map(function(e){
        return e.bits;
    }).join("").split("").map(function(char){
        return parseInt(char);
    });
    return repeatV(bits, height);
}