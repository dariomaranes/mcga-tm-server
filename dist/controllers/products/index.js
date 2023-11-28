"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("src/models/product"));
const productsController = {
    // Obtener todos los productos
    getAll: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const allProducts = yield product_1.default.find({});
        return res.status(200).json({
            status: 200,
            total: allProducts.length,
            data: allProducts,
        });
    }),
    //Crear un producto
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newProduct = new product_1.default(Object.assign({}, req.body));
            const product = yield newProduct.save();
            if (product) {
                return res.status(201).json({
                    message: 'Producto creado exitosamente.',
                    data: product,
                    error: false,
                });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    message: error.message,
                    error: true,
                });
            }
        }
    }),
};
exports.default = productsController;
