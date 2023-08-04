const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const port = 3000;

// -----------------------MONGO----------------

const Book2 = require("./model/Book2.js");

mongoose.connect("mongodb+srv://danielkiss910:WSOzp3ANNKJodcXH@cluster1.b2sqffc.mongodb.net/");

const gatherBook2List = async () =>{
    try {
        const data = await Book2.find({});
        const listData = await JSON.stringify(data);
        return listData;
    } catch (error) {
        console.log("error:", error);
    }
}


// -----------------------SERVER---------------

app.get("/", (req, res) => {
    console.log(port);
});

app.get("/api/", async (req, res) => {
    console.log("read");
    const list = await gatherBook2List();
    res.send(JSON.parse(list));
});

app.post("/create/", (req, res) => {
    console.log(res.body);
});

app.delete("/delete/:id", (req, res) => {
    console.log(req.params.id);
});

app.put("/update/", (req, res) => {
    console.log(req.body.name);
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});