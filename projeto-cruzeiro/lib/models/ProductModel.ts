import mongoose from 'mongoose';

// Remove o model antigo do cache (importante para atualizar o schema)
delete mongoose.models.Product;

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    flavor: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Forçar collection "products" e evitar schema antigo
const ProductModel =
  mongoose.models.Product ||
  mongoose.model('Product', productSchema, 'products');

export default ProductModel;

export type Product = {
  name: string;
  slug: string;
  image: string;
  price: number;
  description: string;
  flavor: string;
  category: string;
};
