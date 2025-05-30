import { configureStore } from "@reduxjs/toolkit";
import selectedLanguageReducer from "./features/selectedLanguageSlice";

export const store = configureStore({
  reducer: {
    selectLanguage: selectedLanguageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
