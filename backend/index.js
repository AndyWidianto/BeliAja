const express = require("express");
const cors = require("cors");
const auth = require("./app/router/authRoutes");
const users = require("./app/router/usersRoutes");
const { ErrorHanlder } = require("./app/middleware/errorHandler");


const app = express();

app.use(express.json());
app.use(cors({
    origin: "",
    credentials: true
}));
app.use(auth);
app.use(users);
app.use(ErrorHanlder);
app.listen(3000, () => console.log("app berjalan di http://localhost:3000"));

