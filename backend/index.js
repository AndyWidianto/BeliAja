const express = require("express");
const cors = require("cors");
const auth = require("./app/router/authRoutes");
const users = require("./app/router/usersRoutes");
const { ErrorHanlder } = require("./app/middleware/errorHandler");
const categories = require("./app/router/categoriesRoutes");
const products = require("./app/router/productsRoutes");
const address = require("./app/router/addressRoutes");
const profiles = require("./app/router/profilesRoutes");
const cartItem = require("./app/router/cartItemsService");
const carts = require("./app/router/cartsRoutes");
const paymentMethod = require("./app/router/paymentMethodRoutes");
const cookieParser = require("cookie-parser");


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
        "http://localhost:5173"
    ],
    credentials: true
}));
app.use(auth);
app.use(users);
app.use(categories);
app.use(products);
app.use(address);
app.use(profiles);
app.use(carts);
app.use(cartItem);
app.use(paymentMethod);
app.use(ErrorHanlder);
app.listen(3000, () => console.log("app berjalan di http://localhost:3000"));

