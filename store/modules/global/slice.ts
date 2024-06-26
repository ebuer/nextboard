import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../index";

interface GlobalState {
    loading: boolean
}

const initialState: GlobalState = {
    loading: false,

}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {
    setLoader
} = globalSlice.actions

export const getLoading = (state: RootState) => state.global.loading

export default globalSlice.reducer