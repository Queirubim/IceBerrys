import { getCartProducts } from 'app/actions/cartActions';

import { FormModal } from './formModal';
import { Modal } from './modal';
import { ProductItem } from './productItem';

export const Cart = async () => {
  const cart = await getCartProducts();
  const totalPrice = () => {
    if (cart === null) {
      return 0;
    }
    return cart.products.reduce(
      (acc, product) => (acc += product.price * product.quantity),
      0,
    );
  };
  const products = cart?.products;

  return (
    <Modal>
      <div className="bg-purple-100  h-full w-full xs:w-[400px] flex flex-col justify-between">
        <h2 className="text-3xl font-yuji font-semibold text-pink-600 text-center mt-5">
          Carrinho
        </h2>
        {products! && (
          <ul className="flex p-5 overflow-y-scroll mt-2 gap-3 flex-col mb-2 h-full">
            {products.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
          </ul>
        )}
        <div className="w-full flex items-center justify-between mt-4 border-pink-200 border-t-2 p-5">
          <span className="text-2xl font-medium text-pink-500">
            R$: {totalPrice().toFixed(2)}
          </span>
          <FormModal />
        </div>
      </div>
    </Modal>
  );
};
