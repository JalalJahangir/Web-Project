import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentView: "dashboard" };

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    changeView: (state, action) => {
      state.dashboard = action.payload;
    },
  },
});

export const { changeView } = dashboardSlice.actions;
export const selectView = (state) => state.dashboard.currentView;

export default dashboardSlice.reducer;
