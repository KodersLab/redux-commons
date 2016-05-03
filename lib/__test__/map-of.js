'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _mockTests = require('./mock-tests');

var _mapOf = require('../map-of');

var _mapOf2 = _interopRequireDefault(_mapOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    a: { a: 1 },
    b: { b: 2 }
};
var reducer = (0, _mapOf2.default)()(_mockTests.testReducer);

(0, _tape2.default)('mapOf - should execute the action in every key', function (t) {
    t.deepEqual(reducer(state, (0, _mockTests.testAction)()), {
        a: { a: 1, test: 1 },
        b: { b: 2, test: 1 }
    });
    t.end();
});