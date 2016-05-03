'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _mockTests = require('./mock-tests');

var _collectionOf = require('../collection-of');

var _collectionOf2 = _interopRequireDefault(_collectionOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = [{ a: 1 }, { b: 2 }];
var reducer = (0, _collectionOf2.default)()(_mockTests.testReducer);

(0, _tape2.default)('collectionOf - should execute the action in every item', function (t) {
    t.deepEqual(reducer(state, (0, _mockTests.testAction)()), [{ a: 1, test: 1 }, { b: 2, test: 1 }]);
    t.end();
});