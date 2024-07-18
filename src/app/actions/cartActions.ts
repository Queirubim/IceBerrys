'use server';
import { cookies } from 'next/headers';

import { Product, ProductCart } from 'app/types/productTypes';

export async function cleanCartProducts() {
  const cookiesStore = cookies();
  cookiesStore.delete('menu_products');
}

export async function fallCartProduct(product: ProductCart) {
  const products = await getCartProducts();

  const newCart = products!.products;

  const hasProduct = newCart.find((prd) => prd.id === product.id);

  if (!hasProduct) {
    return;
  }
  const index = newCart.indexOf(hasProduct);
  if (hasProduct.quantity > 1) {
    newCart[index].quantity -= 1;
  } else {
    newCart.splice(index, 1);
  }
  setCartProducts(newCart);
}

export async function addCartProduct(product: Product) {
  const products = await getCartProducts();
  const newProduct = {
    ...product,
    quantity: 1,
  };

  if (!products) {
    setCartProducts([newProduct]);
    return;
  }

  const newCart = products.products;

  const hasProduct = newCart.find((prd) => prd.id === newProduct.id);

  if (!hasProduct) {
    newCart.push(newProduct);
    setCartProducts(newCart);
    return;
  }
  newCart[newCart.indexOf(hasProduct)].quantity += 1;
  setCartProducts(newCart);
}

export async function getCartProducts() {
  const cookiesStore = cookies();
  const products = cookiesStore.get('menu_products')?.value;

  if (!products) {
    return null;
  }

  const res: { products: ProductCart[] } = JSON.parse(products);
  return res;
}

export async function setCartProducts(products: ProductCart[]) {
  const cookiesStore = cookies();
  cookiesStore.set(
    'menu_products',
    JSON.stringify({
      products,
    }),
  );
}
