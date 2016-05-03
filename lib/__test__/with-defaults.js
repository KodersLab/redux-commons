'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _mockTests = require('./mock-tests');

var _withDefaults = require('../with-defaults');

var _withDefaults2 = _interopRequireDefault(_withDefaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = { a: 1 };
var reducer = (0, _withDefaults2.default)(function () {
    return {
        defaults: 1
    };
})(_mockTests.testReducer);

(0, _tape2.default)('withDefaults - should provide default values to objects', function (t) {
    t.deepEqual(reducer(state), { a: 1, defaults: 1 });
    t.end();
});

(0, _tape2.default)('withDefaults - should untouch nullish values', function (t) {
    t.deepEqual(reducer(null), null);
    t.deepEqual(reducer(undefined), undefined);
    t.end();
});