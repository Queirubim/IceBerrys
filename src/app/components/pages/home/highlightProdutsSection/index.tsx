import { highlight } from 'app/data/data';

import { ProductCard } from './productCard';

export const HighlightProductsSection = async () => {
  return (
    <section className="bg-landscape bg-cover bg-center bg-fixed">
      <div className="w-full pt-8 bg-purple-100/80">
        <div className="container gap-16 py-16 flex flex-col justify-center items-center">
          {highlight.map((product, i) => {
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
