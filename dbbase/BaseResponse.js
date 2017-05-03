'use strict';
var extend = require('node.extend');

const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

var baseSchema = {
    resultType: '',
    results: null,
    resultMsg: '',
    exceptionDetail: null,
};

exports.createNew = function (error, resultData, msg) {
    var result = extend({}, baseSchema);
    if (resultData) {
        result = extend(result, {
            resultType: SUCCESS,
            resultMsg: msg,
            results: resultData,
        });
    }

    if (error) {
        result = extend(result, {
            resultType: ERROR,
            resultMsg: msg || error.message,
            exceptionDetail: error,
        });
    }

    return result;
}