
import express from "express";
// import { Getdata } from "./GetUserSchema.js";  //for mongoDB access
import Data from './Data.json' assert {type: "json"};

const Index = express.Router()

Index.get('/', async (req, res, next) => {
    // const data = await Getdata()   //GetData From MongoDB
    res.send(Data);
});

export default Index

