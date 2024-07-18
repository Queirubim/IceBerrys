import Image from 'next/image';

import { cn } from 'app/lib/merge';
import { Highlight } from 'app/types/productTypes';
import { ChevronRight } from 'lucide-react';

type HighlightCardProps = {
  product: Highlight;
  className?: string;
};

export const ProductCard = ({ product, className }: HighlightCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row rounded-2xl shadow-shadowCard mx-4 overflow-hidden bg-fuchsia-100',
        className,
      )}
    >
      <div className="overflow-hidden h-[300px] max-w-[334px]  sm:min-w-[280px] md:min-w-[480px]  ">
        <Image
          width={640}
          height={480}
          src={product.image.url}
          alt={product.image.alt}
          className={'w-full h-full object-cover'}
        />
      </div>
      <div className="p-4 flex flex-col items-start justify-center md:justify-around">
        <div className="p-2 mb-4 max-w-[300px]">
          <p className="text-2xl text-pink-600 mb-2 font-bold">
            {product.title}
          </p>
          <p className="font-sans text-gray-400 font-medium line-clamp-5 ">
            {product.desc}
          </p>
        </div>
        <button className="p-4 w-full bg-pink-600 text-sm flex items-center gap-2 justify-center text-rose-100 sm:text-md lg:text-xl font-semibold rounded-xl ">
          Confira Esse Sabor
          <ChevronRight size={25} />
        </button>
      </div>
    </div>
  );
};
