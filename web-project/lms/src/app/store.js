import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
