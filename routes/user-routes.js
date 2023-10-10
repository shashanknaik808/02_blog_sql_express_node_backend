const express = require('express');
const { signup, getAllUser } = require("../controllers/user-controller.js");

const userRouter = express.Router();


userRouter.post("/signup", signup);
userRouter.get("/", getAllUser);

module.exports = userRouter;