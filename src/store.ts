import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from "./Reduce/reduce";


const rootReducer = combineReducers ({
 state:counterReducer
})
export const store = legacy_createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;