import { IoIosRemove, IoMdAdd } from 'react-icons/io';

import { addCartProduct, fallCartProduct } from 'app/actions/cartActions';
import { ProductCart } from 'app/types/productTypes';

type ProductProps = {
  product: ProductCart;
};

export const ProductItem = ({ product }: ProductProps) => {
  return (
    <li className="flex items-center gap-1 justify-between">
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="max-w-20 bg-gray-500 object-cover min-w-20 h-20 rounded-md"
      />
      <div className="w-full h-full text-gray-500 font-medium">
        <p className="font-bold line-clamp-1 text-pink-500">{product.name}</p>
        <p className="text-sm">Qtd: {product.quantity}</p>
        <p>R$: {product.price.toFixed(2)}</p>
      </div>
      <div className="flex gap-2 mr-2">
        <form
          action={async () => {
            'use server';
            console.log('click');
            return fallCartProduct(product);
          }}
        >
          <button
            type="submit"
            className="hover:text-red-500 transition-colors"
          >
            <IoIosRemove size={25} />
          </button>
        </form>
        <form
          action={async () => {
            'use server';
            return addCartProduct(product);
          }}
        >
          <button
            type="submit"
            className="hover:text-green-500 transition-colors"
          >
            <IoMdAdd size={25} />
          </button>
        </form>
      </div>
    </li>
  );
};
