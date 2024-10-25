import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './api';
import auth from './features/auth/authSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth,
});

export default rootReducer;
