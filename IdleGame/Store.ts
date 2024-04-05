import { configureStore } from '@reduxjs/toolkit'
import actvTask from './services/ActiveTaskSlice'

export const store = configureStore({
    reducer: {
        activeTask: actvTask, // Add your reducers here
    },
});

export type RootState = ReturnType<typeof store.getState>