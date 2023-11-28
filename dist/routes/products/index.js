"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = __importDefault(require("../../controllers/products"));
const productsRouter = (0, express_1.Router)();
//GET - http://localhost/products
productsRouter.get('/', products_1.default.getAll);
//POST - http://localhost/products
productsRouter.post('/', products_1.default.create);
//GET - http://localhost/products/:id
// productsRouter.get('/:id', productsController.getById);
//DELETE - http://localhost/products/:id
// productsRouter.delete('/:id', productsController.delete);
//PUT - http://localhost/products/:id
// productsRouter.put('/:id', productsController.update);
exports.default = productsRouter;
