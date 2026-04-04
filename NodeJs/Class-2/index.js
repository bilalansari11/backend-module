import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Response from Home Page" })
})

let products = [];

app.get("/products", (req, res) => {
    res.send(products)
})

app.post("/product", (req, res) => {
    const productDetails = req.body;
    let product = { ...productDetails, id: products.length + 1}
    products.push(product);
    res.send({ message: "Product added successfully" });
})

app.delete("/products/:id", (req, res) => {
    const {id} = req.params;
    const data = products.filter(p => p.id !== Number(id))
    res.send({ message: "Product deleted", data});
})

app.listen(3000, () => {
    console.log("Server Running");
})