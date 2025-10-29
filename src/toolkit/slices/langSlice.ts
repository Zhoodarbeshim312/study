import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Lang = "EN" | "RU";

interface LangState {
  lang: Lang;
}

// При первом запуске проверяем localStorage
const initialLang =
  (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) ||
  "EN";

const initialState: LangState = {
  lang: initialLang,
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<Lang>) {
      state.lang = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("lang", action.payload);
      }
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
