import { configureStore } from "@reduxjs/toolkit";
import selectedLanguageReducer from "./features/selectedLanguageSlice";
import selectedCodeAreaColorReducer from "./features/selectedCodeAreaColorSlice";

export const store = configureStore({
  reducer: {
    selectLanguage: selectedLanguageReducer,
    selectCodeAreaColor: selectedCodeAreaColorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
