import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  load: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.load = true;
    },
    signInSuccess: (state, action) => {
      (state.currentUser = action.payload),
        (state.load = false),
        (state.error = null);
    },
    signInFail: (state, action) => {
      (state.error = action.payload), (state.load = false);
    },
  },
});
export const { signInStart, signInSuccess, signInFail } = userSlice.actions;
export default userSlice.reducer 
