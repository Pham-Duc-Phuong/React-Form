import {combineReducers} from 'redux'
import { formReactReducer } from "./FormReact/slice";
export const rootReducer = combineReducers({
    formReact: formReactReducer
})