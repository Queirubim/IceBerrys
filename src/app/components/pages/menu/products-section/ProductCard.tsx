import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';

import { addCartProduct } from 'app/actions/cartActions';
import { Product } from 'app/types/productTypes';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="hover:scale-110 transition-all duration-300 overflow-hidden bg-fuchsia-100 shadow-shadowCard flex items-center justify-between rounded-lg">
      <div className="px-4 py-1 w-2/3">
        <p className="font-sans font-semibold line-clamp-1 text-pink-600 text-lg">
          {product.name}
        </p>
        <p className="text-sm line-clamp-2 text-gray-500 font-medium mb-2">
          {product.desc}
        </p>
        <div className="flex gap-3">
          <form
            action={async () => {
              'use server';
              return addCartProduct(product);
            }}
          >
            <button className="text-pink-500 py-0.5 hover:scale-150 transition-all">
              <FaCartPlus size={20} />
            </button>
          </form>
          <p className="font-sans font-medium text-red-600 ">
            R$: {product.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="w-1/3 h-[136px]">
        <Image
          width={140}
          height={130}
          className="overflow-hidden w-full h-full object-cover origin-center"
          alt={product.image.alt}
          src={product.image.url}
        />
      </div>
    </div>
  );
};
