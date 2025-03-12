const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    isLoading : false,
    theme : "light"
}

const appSlice = createSlice({
    name : 'appSlice',
    initialState,
    reducers : {
        startLoading : state => {
            state.isLoading = true
        },
        stopLoading : state => {
            state.isLoading = false
        }
    }
})

const appReducer = appSlice.reducer

export const {startLoading, stopLoading} = appSlice.actions 
export default appReducer