import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isMobile: boolean;
};

const initialState: InitialState = {
  isMobile: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setMobile } = appSlice.actions;
export default appSlice.reducer;
