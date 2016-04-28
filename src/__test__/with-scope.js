import test from 'tape';
import {testReducer, testAction} from './mock-tests';
import withScope, {applyScope} from '../with-scope';

const state = {a: 1};
const reducer = withScope('sampleScopeName')(testReducer);

const applyRightScope = applyScope('sampleScopeName');
const applyWrongScope = applyScope('sampleWrongScopeName');

const rightAction = applyRightScope(testAction);
const wrongAction = applyWrongScope(testAction);


test('withScope - should pass action if with same scope', t => {
    t.deepEqual(reducer(state, rightAction()), {a: 1, test: 1});
    t.end();
});

test('withScope - should ignore actions if with different scope', t => {
    t.deepEqual(reducer(state, wrongAction()), {a: 1});
    t.end();
});