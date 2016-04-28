
export const SCOPED = 'redux-commons/SCOPED';

/**
 * Given an action, returns an action that wraps it in a scope.
 * @param {string} scopeName the name of the scope
 * @param {object} action the action to wrap
 */
export function applyScope(scopeName){
    return action => (...args) => ({
        type: SCOPED,
        payload: action(...args),
        meta: {
            scope: scopeName
        }
    });
}
/**
 * This reducer enancher just allow to pass through the correct scoped actions
 * @param {string} scopeName the name of the scope to let pass through
 */
export default function(scopeName){
    return reducer => 
        (state, action) => {
            if(action && action.type == SCOPED && action.meta && action.meta.scope == scopeName){
                return reducer(state, action.payload);
            }
            return reducer(state);
        };             
}