import test from 'tape';
import {testReducer, testAction} from './mock-tests';
import mapOf from '../map-of';

const state = {
    a: {a: 1},
    b: {b: 2}
};
const reducer = mapOf()(testReducer);

test('mapOf - should execute the action in every key', t => {
    t.deepEqual(
        reducer(state, testAction()), 
        {
            a: {a:1, test: 1}, 
            b: {b: 2, test: 1}
        }
    );
    t.end();
});