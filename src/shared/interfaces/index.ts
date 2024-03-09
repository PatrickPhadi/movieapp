import { JSXElementConstructor, ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

interface IStackRoutes {
    name: string;
    component: JSXElementConstructor<any>,
    options?: {
        title?: string;
        headerBackTitle?: string;
        headerShown?: boolean;
        headerBackTitleVisible?: boolean;
        headerTintColor?: string;
        headerStyle?: any
    }
}

type TRequestType = "fetch" | "search" | "details";

export type {
    IStackRoutes,
    TRequestType
}