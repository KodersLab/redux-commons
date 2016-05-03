"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var defaultsFn = arguments.length <= 0 || arguments[0] === undefined ? NOOP : arguments[0];

    return function (reducer) {
        return function (state, action) {
            return reducer(state ? Object.assign({}, defaultsFn(state), state) : state, action);
        };
    };
};

var NOOP = function NOOP() {
    return {};
};
/**
 * If the reducer state is an object, provide default attributes values.
 * @param {object|function} A function that returns a object or a object with the defaults values.
 */