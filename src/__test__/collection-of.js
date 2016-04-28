import test from 'tape';
import {testReducer, testAction} from './mock-tests';
import collectionOf from '../collection-of';

const state = [{a: 1}, {b: 2}];
const reducer = collectionOf()(testReducer);

test('collectionOf - should execute the action in every item', t => {
    t.deepEqual(
        reducer(state, testAction()), 
        [{a:1, test: 1}, {b: 2, test: 1}]
    );
    t.end();
});