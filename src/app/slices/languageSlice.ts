import { createSlice } from '@reduxjs/toolkit';
import pl from "../../languages/pl.json";
import en from "../../languages/en.json";

const browserPolLangCheck = navigator.language.toLowerCase().includes("pl");

const initialState = {
  selectedLanguage: browserPolLangCheck ? pl : en,
  langSwitch: browserPolLangCheck ? "pl" : "en",
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state) => {
      if (state.langSwitch === "pl") {
        state.selectedLanguage = en;
        state.langSwitch = "en";
      } else if (state.langSwitch === "en") {
        state.selectedLanguage = pl;
        state.langSwitch = "pl";
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;