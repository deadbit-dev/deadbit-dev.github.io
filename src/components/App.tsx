import React from "react";
import { Screen } from "./Screen";

export const App = (props: {context: Element}) => (
    <Screen context={props.context} />
);
