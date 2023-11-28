import { model, Schema } from 'mongoose';

import { ProductData } from 'src/types';

const productSchema = new Schema({
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

export default model<ProductData>('Product', productSchema);
