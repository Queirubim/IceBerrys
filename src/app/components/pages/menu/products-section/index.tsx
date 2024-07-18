import { Product } from 'app/types/productTypes';

import { ProductCard } from './ProductCard';

async function getProducts(): Promise<Product[]> {
  const response = await fetch('http://localhost:3000/api/products');
  return response.json();
}

export const ProductsSection = async () => {
  const products = await getProducts();
  return (
    <section className="bg-landscape bg-fixed bg-cover">
      <div className="bg-pink-200/50 py-20">
        <div className="container">
          <h2 className="text-4xl font-yuji mb-8 font-bold text-pink-700">
            Menu
          </h2>
          <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(370px,1fr))] gap-x-4 gap-y-8 mb-10">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
