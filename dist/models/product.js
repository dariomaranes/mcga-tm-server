"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: new Date(),
        required: false,
    },
    deletedAt: {
        type: Date,
        required: false,
    },
});
exports.default = (0, mongoose_1.model)('Product', productSchema);
