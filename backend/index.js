const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

require("dotenv").config();
require("./Models/db");
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello from the server lo thela");
});

app.use(bodyParser.json());
app.use(cors());
// Allow specific origin
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://mediusware-task-2-ui.vercel.app"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
