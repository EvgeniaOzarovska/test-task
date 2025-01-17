import {createSlice} from "@reduxjs/toolkit";
import {fetchUserData} from "../../api/api";

interface UserState {
    userId: string;
    userData: any | null;
    loading: boolean;
    error: string;
}

const initialState: UserState = {
    userId: "",
    userData: null,
    loading: false,
    error: "",
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserData: (state, action) => {
            state.userData = action.payload;
        },
        clearUserData: (state) => {
            state.userData = null;
            state.error = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { updateUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
