import { Highlight } from 'app/types/productTypes';

import { ProductCard } from './productCard';

async function getHighlight(): Promise<Highlight[]> {
  const response = await fetch('http://localhost:3000/api/highlight');
  return response.json();
}

export const HighlightProductsSection = async () => {
  const products = await getHighlight();
  return (
    <section className="bg-landscape bg-cover bg-center bg-fixed">
      <div className="w-full pt-8 bg-purple-100/80">
        <div className="container gap-16 py-16 flex flex-col justify-center items-center">
          {products.map((product, i) => {
            const isEven = i % 2 === 0;
            return (
              <ProductCard
                className={isEven ? 'sm:flex-row-reverse' : ''}
                product={product}
                key={product.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
