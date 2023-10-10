const express = require('express');
const { signup, getAllUser, login } = require("../controllers/user-controller.js");

const userRouter = express.Router();


userRouter.post("/signup", signup);
userRouter.get("/", getAllUser);
userRouter.post("/login",login);

module.exports = userRouter;