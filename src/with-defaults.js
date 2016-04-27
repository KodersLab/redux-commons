
const NOOP = () => ({});
/**
 * If the reducer state is an object, provide default attributes values.
 * @param {object|function} A function that returns a object or a object with the defaults values.
 */
export default function (defaultsFn = NOOP){
    return reducer => 
        (state = {}, action) =>
            reducer(
                state ? Object.assign({}, defaultsFn(state), state) : state,
                action
                );
}
