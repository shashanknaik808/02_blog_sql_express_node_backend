require('dotenv').config();
const express = require('express');
const userRouter = require("./routes/user-routes.js");

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Sever Running on PORT ${PORT}`));