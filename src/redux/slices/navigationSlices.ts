import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface navigationLinksState {
    activeLink: string;
}

const savedLink = localStorage.getItem('activeTab') || 'home';

const initialState: navigationLinksState = {
    activeLink: savedLink,
};

const linkSlice = createSlice({
    name: 'link',
    initialState,
    reducers: {
        setActiveLink: (state, action: PayloadAction<string>) => {
            state.activeLink = action.payload;
        },
    },
});

export const { setActiveLink } = linkSlice.actions;
export default linkSlice.reducer;
