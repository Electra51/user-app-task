import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
