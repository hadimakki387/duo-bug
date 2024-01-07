import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  text: string;
  Dialog: boolean;
  tabs: number;
  drawer: boolean;
} = {
  text: "",
  Dialog: false,
  tabs: 0,
  drawer: false,
};

const landingSlice = createSlice({
  name: "landingSlice",
  initialState,
  reducers: {
    setText(state, action) {
      state.text = action.payload;
    },
    setDialog(state, action) {
      state.Dialog = action.payload;
    },
    setTabs(state, action) {
      state.tabs = action.payload;
    },
    setDrawer(state, action) {
      state.drawer = action.payload;
    },
  },
});

export const { setText, setDialog, setTabs, setDrawer } = landingSlice.actions;

export default landingSlice.reducer;
