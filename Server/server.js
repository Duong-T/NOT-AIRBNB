const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/connectDB");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const placeRoute = require("./routes/place");
const bookingRoute = require("./routes/booking");
const filterRoute = require("./routes/filter");

var bodyParser = require("body-parser");
dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));
app.use(cookieParser());

connectDB();

const port = process.env.PORT || 8000;

//ROUTES
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/place", placeRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/filter", filterRoute);

app.listen(port, () => {
    console.log("conect sever PORT", port);
});