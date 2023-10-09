"use client";
import React, {useEffect} from "react";
import { Provider } from "react-redux";
import {store, useAppDispatch} from "@/store/store";
import {getCart} from "@/api/cart/getCart";
import {setCart} from "@/store/reducer/cartSlice";

type Props = {
  children: React.ReactNode;
};

const ReduxProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
