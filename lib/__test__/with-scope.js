'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _mockTests = require('./mock-tests');

var _withScope = require('../with-scope');

var _withScope2 = _interopRequireDefault(_withScope);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = { a: 1 };
var reducer = (0, _withScope2.default)('sampleScopeName')(_mockTests.testReducer);

var applyRightScope = (0, _withScope.applyScope)('sampleScopeName');
var applyWrongScope = (0, _withScope.applyScope)('sampleWrongScopeName');

var rightAction = applyRightScope(_mockTests.testAction);
var wrongAction = applyWrongScope(_mockTests.testAction);

(0, _tape2.default)('withScope - should pass action if with same scope', function (t) {
    t.deepEqual(reducer(state, rightAction()), { a: 1, test: 1 });
    t.end();
});

(0, _tape2.default)('withScope - should ignore actions if with different scope', function (t) {
    t.deepEqual(reducer(state, wrongAction()), { a: 1 });
    t.end();
});