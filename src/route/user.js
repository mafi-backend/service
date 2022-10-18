const express = require("express");
const user = require("../model/user");
const router = express.Router();

// Import user
const userSchema = require("../model/user");

// Create user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Get All Users
router.get("/users", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Get User by ID ( PathVariable )
router.get("/users/:id", (req, res) => {
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Update User by ID ( PathVariable )
router.put("/users/:id", (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age, email} = req.body;
    userSchema
        .updateOne(
            {_id: id}, 
            {$set: {firstName, lastName, age, email}}
            )
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

// Delete User by ID ( PathVariable )
router.delete("/users/:id", (req, res) => {
    const {id} = req.params;
    userSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});
module.exports = router;