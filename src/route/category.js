const express = require("express");
const router = express.Router();

// Import category
const categorySchema = require("../model/category");

// Create category
router.post("/categories", (req, res) => {
    const category = categorySchema(req.body);
    category
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Get All Categories
router.get("/categories", (req, res) => {
    categorySchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Get Category by ID ( PathVariable )
router.get("/categories/:id", (req, res) => {
    const {id} = req.params;
    categorySchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Update Category by ID ( PathVariable )
router.put("/categories/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    categorySchema
        .updateOne(
            {_id: id}, 
            {$set: {name}}
            )
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Delete Category by ID ( PathVariable )
router.delete("/categories/:id", (req, res) => {
    const {id} = req.params;
    categorySchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

module.exports = router;