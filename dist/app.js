"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import cors from 'cors';
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("./routes/products"));
const app = (0, express_1.default)();
// app.use(cors());
app.use(express_1.default.json());
// Rutas de la app
app.use('/products', products_1.default);
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Server is up ✅ - Environment: ' + process.env.ENV,
        data: undefined,
        error: false,
    });
});
exports.default = app;
