import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./question-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice,
        questions: questionSlice
    }
})

export default store;