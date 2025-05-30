import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  value: string;
}

const initialState: LanguageState = {
  value: "javascript",
};

export const selectedLanguageSlice = createSlice({
  name: "selectedLanguage",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      console.log("2" + action);
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
