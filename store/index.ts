import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "./modules";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
})

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type AppState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     AppState,
//     unknown,
//     Action<string>
//     >

export default store


