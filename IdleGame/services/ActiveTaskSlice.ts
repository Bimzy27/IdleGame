import { createSlice } from '@reduxjs/toolkit'

export const ActiveTaskSlice = createSlice({
    name: 'activeTask',
    initialState: {
        taskName: 'task',
        progress: 0,
    },
    reducers: {
        setTask: (state, action) => {
            state.taskName = action.payload
        },
        setProgress: (state, action) => {
            state.progress = action.payload
            if (state.progress > 1)
            {
                state.progress = 1
            }
            else if (state.progress < 0)
            {
                state.progress = 0;
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setProgress, setTask } = ActiveTaskSlice.actions

export default ActiveTaskSlice.reducer