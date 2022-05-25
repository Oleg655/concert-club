import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { usersReducer,  ActionsType } from "./users-reduser";
import thunk, { ThunkDispatch } from 'redux-thunk'
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
    usersPage: usersReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
type AppActionType = ActionsType 
//export type AppDispatch = typeof store.dispatch
type TypedDispatch = ThunkDispatch<AppStateType, any, AppActionType>

export const useTypedDispatch = () => useDispatch<TypedDispatch>()

export const store =  legacy_createStore(rootReducer, applyMiddleware(thunk))