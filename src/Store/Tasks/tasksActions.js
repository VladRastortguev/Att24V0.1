import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIComment, APITasks } from "../../Helpers/Consts";
import { setComment, setTask } from "./tasksSlice";

export const getTasks = createAsyncThunk(
    "@tasks/getTasks",
    async (_, {dispatch}) => {
        const { data } = await axios(APITasks);
        dispatch(setTask(data));
    }    
);

export const getComment = createAsyncThunk(
    "@tasks/getComments",
    async (_, {dispatch}) => {
        const { data } = await axios(APIComment);
        dispatch(setComment(data))
    }
)

export const addTask = createAsyncThunk(
    "@tasks/addTask",
    async (tasksObj, { dispatch }) => {
        await axios.post(APITasks, tasksObj);
        dispatch(getTasks());
    }
);

export const addComment = createAsyncThunk(
    "@tasks/addComment",
    async (commnetObj, { dispatch }) => {
        await axios.post(APIComment, commnetObj);
        dispatch(getComment())
    }
)

export const getOneTasks = createAsyncThunk(
    "@tasks/getOneTasks",
    async (id) => {
        const { data } = await axios(`${APITasks}`);
        return data 
    } 
);