import React, { Component } from 'react';
import Input from "./Input";

export default{
    title : "Input",
    component : Input,
};

export const label = () => <Input name="name" label="이름 : "/>;