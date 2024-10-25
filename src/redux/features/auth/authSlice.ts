import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user:  any;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
