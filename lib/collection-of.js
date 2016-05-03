"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var stripUndefinedItems = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    return function (reducer) {
        return function () {
            var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
            var action = arguments[1];
            return state.map(function (item) {
                return reducer(item, action);
            }).filter(function (item) {
                return stripUndefinedItems && item != undefined;
            });
        };
    };
};