'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testAction = testAction;
exports.testReducer = testReducer;
var TEST = exports.TEST = 'action/TEST';

function testAction() {
    return { type: TEST };
}

function testReducer(state, action) {
    if (!action) return state;

    switch (action.type) {
        case TEST:
            return Object.assign({}, state, { test: 1 });

        default:
            return state;
    }
}