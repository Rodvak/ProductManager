const ProductController = require("./../controllers/productM.controller")

module.exports = (app) => {
    app.get("/api/products", ProductController.allProducts)
    app.post("/api/products/new", ProductController.createProduct)
    app.get("/api/products/:id", ProductController.oneProduct)
    app.put("/api/products/:id", ProductController.updateProduct)
    app.delete("/api/products/:id", ProductController.deleteProduct)
    app.put("/api/:id/edit", ProductController.deleteProduct)
}