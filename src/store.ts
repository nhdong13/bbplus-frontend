import { configureStore, compose, applyMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './redux'

const store = configureStore({
  reducer: rootReducer,
  middleware:[thunk, logger]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
