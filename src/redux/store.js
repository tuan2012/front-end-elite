import { combineReducers } from 'redux'
import authenticationSlice from './slices/authenticationSlice';
import { configureStore } from '@reduxjs/toolkit';


const reducer = combineReducers({
  authenticationSlice
  })

const store = configureStore({
  reducer,
})

export default store;