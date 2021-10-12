import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortQuestionsBy: 'votes',
    filterByBookmark: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        sortQuestionsBy (state, action) {
            state.sortQuestionsBy = action.payload
        },
        filterByBookmark (state) {
            state.filterByBookmark = !state.filterByBookmark
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;