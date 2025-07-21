import * as productService from '../services/products.service.js';

// Obtener todos los productos
export async function getProducts(req, res) {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos' });
  }
}

// Obtener producto por ID
export async function getProduct(req, res) {
  try {
    const product = await productService.getProductById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto' });
  }
}

// Crear producto nuevo
export async function createProduct(req, res) {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto' });
  }
}

// Eliminar producto
export async function deleteProduct(req, res) {
  try {
    const deletedProduct = await productService.deleteProductById(req.params.id);
    if (deletedProduct) {
      res.json({ message: 'Producto eliminado', product: deletedProduct });
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto' });
  }
}
