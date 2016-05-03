"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var stripUndefinedItems = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    return function (reducer) {
        return function () {
            var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            var action = arguments[1];

            var newState = {};
            Object.keys(state).forEach(function (key) {
                var value = reducer(state[key], action);
                if (stripUndefinedItems && value != undefined || !stripUndefinedItems) {
                    newState[key] = value;
                }
            });
            return newState;
        };
    };
};