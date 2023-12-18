import { createSlice } from '@reduxjs/toolkit'
import { getOneTasks } from './tasksActions';

const initialState = {
    tasks: [],
    tasksDetails: {},
}

export const tasksSlice = createSlice({
    name: '@tasks',
    initialState,
    reducers: {
        setTask(state, action) {
            state.tasks = action.payload;
        },
        setComment(state, action) {
            state.tasks = action.payload;
        },
    },
    extraReducers: (buider) => {
        buider.addCase(getOneTasks.fulfilled, (state, action) => {
            state.tasksDetails = action.payload;
        });
    },
});

export const { setTask, setComment } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;