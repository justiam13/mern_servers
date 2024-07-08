const express=require('express')
const router=express.Router()
const Book=require('../model/bookSchema')
const Author = require('../model/authorSchema')


router.post('/', async (req, res) => {
    try {
        const { bid, name, publisher, description, _id } = req.body;
        const book = new Book({ bid, name, publisher, description, _id });
        await book.save();
        res.status(201).send({ message: "Book created", book });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await Book.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;
