const express = require("express");
const router = express.Router();

// Import item
const itemSchema = require("../model/item");

// Create item
router.post("/items/create", (req, res) => {
    const item = itemSchema(req.body);
    item
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Get All Items
router.get("/items/get", (req, res) => {
    itemSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Get Item by ID ( PathVariable )
router.get("/items/get/id/:id", (req, res) => {
    const {id} = req.params;
    itemSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Update Item by ID ( PathVariable )
router.put("/items/update/id/:id", (req, res) => {
    const {id} = req.params;
    const {name, price, description, image, category, stock} = req.body;
    itemSchema
        .updateOne(
            {_id: id}, 
            {$set: {name, price, description, image, category, stock}}
            )
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Delete Item by ID ( PathVariable )
router.delete("/items/delete/id/:id", (req, res) => {
    const {id} = req.params;
    itemSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Find By Product Name
router.get("/items/get/name/:name", (req, res) => {
    const {name} = req.params;
    itemSchema
        .find({name: name})
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Find Last 3 Items by createdAt
router.get("/items/get/last", (req, res) => {
    itemSchema
        .find()
        .sort({createdAt: -1})
        .limit(3)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Find By Category
router.get("/items/get/category/:category", (req, res) => {
    const {category} = req.params;
    itemSchema
        .find({category: category})
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

module.exports = router;