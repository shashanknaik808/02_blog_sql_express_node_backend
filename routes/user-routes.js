const express = require('express');


const userRouter = express.Router();


userRouter.post("/signup",signup);

module.exports = userRouter;