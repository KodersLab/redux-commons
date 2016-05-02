declare module 'redux-commons' {
    export type Reducer<T, A> = (state: T, action: A) => T;
}

declare module 'redux-commons/ducks/collection-of' {
    import {Reducer} from 'redux-commons';
    
    export type CollectionOfReducer<T, A> = (reducer: Reducer<T, A>) => Reducer<T[], A>;
    
    export default function collectionOf<T, A>(stripUndefined: boolean): CollectionOfReducer<T, A>;
}

declare module 'redux-commons/ducks/map-of' {
    import {Reducer} from 'redux-commons';
    
    export type MapOfReducer<T, A> = (reducer: Reducer<T, A>) => Reducer<{[key: string]: T}, A>;
     
    export default function mapOf<T, A>(stripUndefined: boolean): MapOfReducer<T, A>;
}

declare module 'redux-commons/ducks/with-defaults' {
    import {Reducer} from 'redux-commons';
    
    export type WithDefaultsReducer<T, A, J> = (reducer: Reducer<T, A>) => (state: T, action: A) => T & J;
    
    export default function withDefaults<T, A, J>(defaults: J): WithDefaultsReducer<T, A, J>;
}

declare module 'redux-commons/ducks/with-scope' {
    import {Reducer} from 'redux-commons';
    
    export type WithScopeReducer<T, A, J> = (reducer: Reducer<T, A>) => Reducer<T, A>;
    
    export default function withScope<T, A, J>(scope: J): WithScopeReducer<T, A, J>;
    
    export type ApplyScopeAction<J, R> = {type: string, payload: R, meta: {scope: J}};
    
    export type ApplyScopeAction1<J, P1, R> = (a: P1) => ApplyScopeAction<J, R>;
    export type ApplyScopeAction2<J, P1, P2, R> = (a: P1, b: P2) => ApplyScopeAction<J, R>;
    export type ApplyScopeAction3<J, P1, P2, P3, R> = (a: P1, b: P2, c: P3) => ApplyScopeAction<J, R>;
    export type ApplyScopeActionGen<J, R> = (...p: any[]) => ApplyScopeAction<J, R>;
    
    export type ApplyScopeActionCreator1<J, P1, R> = (action: (a: P1) => R) => ApplyScopeAction1<J, P1, R>; 
    export type ApplyScopeActionCreator2<J, P1, P2, R> = (action: (a: P1, b: P2) => R) => ApplyScopeAction2<J, P1, P2, R>; 
    export type ApplyScopeActionCreator3<J, P1, P2, P3, R> = (action: (a: P1, b: P2, c: P3) => R) => ApplyScopeAction3<J, P1, P2, P3, R>; 
    export type ApplyScopeActionCreatorGen<J, R> = (action: (...p: any[]) => R) => ApplyScopeActionGen<J, R>;
    
    export function applyScope<J, P1, R>(scope: J): ApplyScopeActionCreator1<J, P1, R>;
    export function applyScope<J, P1, P2, R>(scope: J): ApplyScopeActionCreator2<J, P1, P2, R>;
    export function applyScope<J, P1, P2, P3, R>(scope: J): ApplyScopeActionCreator3<J, P1, P2, P3, R>;
    export function applyScope<J, R>(scope: J): ApplyScopeActionCreatorGen<J, R>;
}