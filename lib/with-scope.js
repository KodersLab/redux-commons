'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.applyScope = applyScope;

exports.default = function (scopeName) {
    return function (reducer) {
        return function (state, action) {
            if (action && action.type == SCOPED && action.meta && action.meta.scope == scopeName) {
                return reducer(state, action.payload);
            }
            return reducer(state);
        };
    };
};

var SCOPED = exports.SCOPED = 'redux-commons/SCOPED';

/**
 * Given an action, returns an action that wraps it in a scope.
 * @param {string} scopeName the name of the scope
 * @param {object} action the action to wrap
 */
function applyScope(scopeName) {
    return function (action) {
        return function () {
            return {
                type: SCOPED,
                payload: action.apply(undefined, arguments),
                meta: {
                    scope: scopeName
                }
            };
        };
    };
}
/**
 * This reducer enancher just allow to pass through the correct scoped actions
 * @param {string} scopeName the name of the scope to let pass through
 */