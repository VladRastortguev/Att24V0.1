import { configureStore } from '@reduxjs/toolkit'
import { taskReducer } from './Tasks/tasksSlice'



export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    }
})

