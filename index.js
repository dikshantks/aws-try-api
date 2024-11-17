const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/json", (req, res) => {
    res.json({ message: "Hello, this is a JSON response!" });
});

app.post("/echo", express.json(), (req, res) => {
    res.json({ message: "I will reflect back", ...req.body });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
