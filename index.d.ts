// Basics
type Reducer<T, A> = (state: T, action: A) => T;

// collectionOf
type CollectionOfReducer<T, A> = (reducer: Reducer<T, A>) => Reducer<T[], A>;

export function collectionOf<T, A>(stripUndefined: boolean): CollectionOfReducer<T, A>;

// mapOf
type MapOfReducer<T, A> = (reducer: Reducer<T, A>) => Reducer<{[key: string]: T}, A>;
    
export function mapOf<T, A>(stripUndefined: boolean): MapOfReducer<T, A>;

// withDefaults
type WithDefaultsReducer<T, A, J> = (reducer: Reducer<T, A>) => (state: T, action: A) => T & J;

export function withDefaults<T, A, J>(defaults: J): WithDefaultsReducer<T, A, J>;

// withScope
type WithScopeReducer<T, A, J> = (reducer: Reducer<T, A>) => Reducer<T, A>;

export function withScope<T, A, J>(scope: J): WithScopeReducer<T, A, J>;

// applyScope
type ApplyScopeAction<J, R> = {type: string, payload: R, meta: {scope: J}};

type ApplyScopeAction1<J, P1, R> = (a: P1) => ApplyScopeAction<J, R>;
type ApplyScopeAction2<J, P1, P2, R> = (a: P1, b: P2) => ApplyScopeAction<J, R>;
type ApplyScopeAction3<J, P1, P2, P3, R> = (a: P1, b: P2, c: P3) => ApplyScopeAction<J, R>;
type ApplyScopeActionGen<J, R> = (...p: any[]) => ApplyScopeAction<J, R>;

type ApplyScopeActionCreator1<J, P1, R> = (action: (a: P1) => R) => ApplyScopeAction1<J, P1, R>; 
type ApplyScopeActionCreator2<J, P1, P2, R> = (action: (a: P1, b: P2) => R) => ApplyScopeAction2<J, P1, P2, R>; 
type ApplyScopeActionCreator3<J, P1, P2, P3, R> = (action: (a: P1, b: P2, c: P3) => R) => ApplyScopeAction3<J, P1, P2, P3, R>; 
type ApplyScopeActionCreatorGen<J, R> = (action: (...p: any[]) => R) => ApplyScopeActionGen<J, R>;

export function applyScope<J, P1, R>(scope: J): ApplyScopeActionCreator1<J, P1, R>;
export function applyScope<J, P1, P2, R>(scope: J): ApplyScopeActionCreator2<J, P1, P2, R>;
export function applyScope<J, P1, P2, P3, R>(scope: J): ApplyScopeActionCreator3<J, P1, P2, P3, R>;
export function applyScope<J, R>(scope: J): ApplyScopeActionCreatorGen<J, R>;
