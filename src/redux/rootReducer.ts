import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './api';
import auth from './features/auth/authSlice';
import farm from './features/farm/farmSlice'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth,
  farm
});

export default rootReducer;
