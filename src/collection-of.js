/**
 * Given a reducer, returns a reducer which manages an array of items and feed each item into the given reducer
 * @param {bool} stripUndefinedItems Whenever to automatically remove undefined items from the collection.
 */
export default function (stripUndefinedItems = true){
    return reducer => 
        (state = [], action) => 
            state.map(item => reducer(item, action))
                .filter(item => stripUndefinedItems && item == undefined);
}