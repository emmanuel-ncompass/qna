import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    questions: [],
    bookmarked: [] 
}

const generateTimestamp = () => {
    const date = new Date().toISOString()
    return date.split('T').join(' ').slice(0, 19)
}

const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        addQuestion (state, action) {
            state.questions.push({ 
                id: Math.round(Math.random() * 100),
                question: action.payload,
                votes: 0 ,
                timestamp: generateTimestamp()
            })
        },
        upVote (state, action) {
            const question = state.questions.find(question => question.id === action.payload)
            question.votes++;
        },
        downVote (state, action) {
            const question = state.questions.find(question => question.id === action.payload)
            question.votes--;
        },
        addAnswer (state, action) {
            const question = state.questions.find(question => question.id === action.payload.id)
            question.answer = action.payload.answer
        },
        toggleBookmark (state, action) {
            const index = state.bookmarked.indexOf(action.payload)
            if (index !== -1) 
                state.bookmarked.splice(index, 1)
            else 
                state.bookmarked.push(action.payload)
        }
    }
})

export const questionActions = questionSlice.actions; 
export default questionSlice.reducer;