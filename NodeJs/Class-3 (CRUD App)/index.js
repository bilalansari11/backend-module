import express from "express";
import { productSchema } from "./schema/index.js"

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
    console.log("Response from middleware => reciptionist");
    next();
}) 

let products = [];

app.get("/", (req, res) => {
    res.send({ message: "The server is running fine"})
})

app.get("/products", (req, res) => {
    res.send(products);
})

app.post("/product", async (req, res) => {
    const product = await productSchema.validateAsync(req.body);
    products.push({...product, id: Date.now().toString(36)});
    res.send({ message: "Product added successfully!" });
})

app.put("/product/:id", (req, res) => {
    const { id } = req.params;
    let index = products.findIndex(p => p.id === id);
    products.splice(index, 1, {...req.body, id});
    res.send({ message: "Product updated successfully", products})
})

app.delete("/product/:id", (req, res) => {
    const { id } = req.params;
    products = products.filter(p => p.id !== id);
    res.send({ message: "Product deleted", products});
})


app.listen("3000", () => {
    console.log("Server is running on localhost:3000")
})