"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const express = require('express')
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    //console.log('Here');
    const age = 39;
    //res.send('node is here!')
    res.json({ message: "hey there" });
});
app.listen(3000);
