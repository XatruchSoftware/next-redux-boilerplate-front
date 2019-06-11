import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducer, { todosReducerDefaultState } from '../reducers/todos'

export const initializeStore = (initialState = todosReducerDefaultState) => {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
        )
    }