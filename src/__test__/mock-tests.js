export const TEST = 'action/TEST';

export function testAction(){
    return {type: TEST};
}

export function testReducer(state, action){
    if(!action) return state;
    
    switch (action.type) {
        case TEST:
            return Object.assign({}, state, {test: 1});
    
        default:
            return state;
    }
}
