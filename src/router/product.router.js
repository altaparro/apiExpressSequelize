const router = require("express").Router()
const { faker } = require("@faker-js/faker")
const Products = require("../model/product.model")

router.get("/products", (req, res) => {
    res.send("soy un router");
});
router.get("/products", (req, res) => {
    res.send("soy un router");
});
router.post("/products", async(req, res) => {
    await Products.sync()
    const createProduct = await Products.create({
        product_name: faker.commerce.product(),
        price: faker.commerce.price(),
        is_stock: faker.datatype.boolean()
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Producto cargado",
    })

});
router.put("/products", (req, res) => {
    res.send("soy un router");
});
router.delete("/products", (req, res) => {
    res.send("soy un router");
});

module.exports = router;