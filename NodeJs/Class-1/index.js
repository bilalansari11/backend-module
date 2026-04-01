import express from "express";

const app = express();

app.get("/users", (req, res) => {
    res.send(
        {
            id: 1,
            name: "Bilal",
            lastname: "Ansari",
            age: 24,
            profession: "Student"
        }
    );
})

app.get("/posts", (req, res) => {
    res.send({ title: "Server post!" });
})

app.listen(3000, () => {
    console.log("Response from Server");
})