const express = require('express');

const Router = express.Router();

const bookController = require('../controller/book.controller');

Router
    .get('/', bookController.getAllBooks)
    .get('/:id', bookController.getOneBook)
    .post('/', bookController.createNewBook)
    .patch('/:bookId', bookController.updateOneBook)
    .delete('/:id', bookController.deleteOneBook)

module.exports = Router;