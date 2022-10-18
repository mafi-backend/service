const express = require("express");
const router = express.Router();

// Import item
const itemSchema = require("../model/item");

// Create item
router.post("/items", (req, res) => {
    const item = itemSchema(req.body);
    item
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Get All Items
router.get("/items", (req, res) => {
    itemSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Get Item by ID ( PathVariable )
router.get("/items/:id", (req, res) => {
    const {id} = req.params;
    itemSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Update Item by ID ( PathVariable )
router.put("/items/:id", (req, res) => {
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
router.delete("/items/:id", (req, res) => {
    const {id} = req.params;
    itemSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

module.exports = router;