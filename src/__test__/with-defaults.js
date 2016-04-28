import test from 'tape';
import {testReducer, testAction} from './mock-tests';
import withDefaults from '../with-defaults';

const state = {a: 1};
const reducer = withDefaults(() => ({
    defaults: 1
}))(testReducer);

test('withDefaults - should provide default values to objects', t => {
    t.deepEqual(reducer(state), {a: 1, defaults: 1});
    t.end();
});

test('withDefaults - should untouch nullish values', t => {
    t.deepEqual(reducer(null), null);
    t.deepEqual(reducer(undefined), undefined);
    t.end();
});