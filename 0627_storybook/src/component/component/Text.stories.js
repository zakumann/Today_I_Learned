import React, { Component } from "react";
import {Text} from "./Text";

export default{
    title : "Text",
    component : Text,
};

const TEST_TEXT = "Story Text Test";
export const Default = () =><Text>{TEST_TEXT}</Text>;
export const Red = () =><Text color="red">{TEST_TEXT}</Text>;
export const Italic = () =><Text italic>{TEST_TEXT}</Text>;
export const Underline = () =><Text underline>{TEST_TEXT}</Text>;