import { Request, Response } from 'express';

import ProductModel from 'src/models/product';

const productsController = {
  // Obtener todos los productos
  getAll: async (_req: Request, res: Response) => {
    const allProducts = await ProductModel.find({});
    return res.status(200).json({
      status: 200,
      total: allProducts.length,
      data: allProducts,
    });
  },

  //Crear un producto
  create: async (req: Request, res: Response) => {
    try {
      const newProduct = new ProductModel({ ...req.body });

      const product = await newProduct.save();

      if (product) {
        return res.status(201).json({
          message: 'Producto creado exitosamente.',
          data: product,
          error: false,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
  },
};

export default productsController;
