import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    title: string;
    containerStyles?: string;
    handleclick?:
    MouseEventHandler<HTMLButtonElement>;
}