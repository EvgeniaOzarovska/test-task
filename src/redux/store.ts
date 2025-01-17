import { configureStore } from '@reduxjs/toolkit';
import linkReducer from './slices/navigationSlices';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        link: linkReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
