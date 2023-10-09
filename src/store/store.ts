import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./reducer/cartSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import {createWrapper} from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true,
});

export const { dispatch, getState } = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import { authSliceUnused } from "./authSliceUnused";
// import { createWrapper } from "next-redux-wrapper";
//
// const makeStore = () =>
//   configureStore({
//     reducer: {
//       [authSliceUnused.name]: authSliceUnused.reducer,
//     },
//     devTools: true,
//   });
//
// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore["getState"]>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;
//
// export const wrapper = createWrapper<AppStore>(makeStore);
//
