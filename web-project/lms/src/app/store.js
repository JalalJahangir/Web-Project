import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice.js";
import dashboardSlice from "../features/dashboard/dashboardSlice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
    dashboard: dashboardSlice,
  },
});
