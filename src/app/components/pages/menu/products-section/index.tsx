import { products } from 'app/data/data';

import { ProductCard } from './ProductCard';

export const ProductsSection = async () => {
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
