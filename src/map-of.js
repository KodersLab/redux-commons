/**
 * Given a reducer, returns a reducer which manages a keyed object of that value. Useful for usersById etc...
 * @param {bool} stripUndefinedItems Whenever to automatically remove undefined items from the collection.
 */
export default function (stripUndefinedItems = true){
    return reducer => 
        (state = {}, action) => {
            var newState = {};
            Object.keys(state).forEach(key => {
                var value = reducer(state[key], action);
                if((stripUndefinedItems && value != undefined) || !stripUndefinedItems){
                    newState[key] = value;
                }
            });
            return newState;
        };
}