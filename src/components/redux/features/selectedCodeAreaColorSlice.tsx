import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState {
  value: string;
}

const initialState: ColorState = {
  value: "#6bd1ff",
};

export const selectedCodeAreaColorSlice = createSlice({
  name: "selectedCodeAreaColor",
  initialState,
  reducers: {
    setCodeAreaColor: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setCodeAreaColor } = selectedCodeAreaColorSlice.actions;
export default selectedCodeAreaColorSlice.reducer;
