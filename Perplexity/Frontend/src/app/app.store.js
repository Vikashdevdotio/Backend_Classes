import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/service/auth.slice"
import chatReducer from "../features/chat/chat.slice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        chat: chatReducer,
    }
})