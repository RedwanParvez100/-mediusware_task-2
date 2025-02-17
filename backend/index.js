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
    res.send("Hello from the server!!!...");
});

app.use(bodyParser.json());
app.use(
    cors({
        origin: "https://mediusware-task-2-ui.vercel.app", // Allow your frontend
        methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
        allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    })
);

app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
