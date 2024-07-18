import {
  addCartProduct,
  fallCartProduct,
  getCartProducts,
  setCartProducts,
} from 'app/actions/cartActions';

export default async function Menu() {
  const data = [
    {
      id: 5,
      price: 24.9,
      desc: 'Sundaes estilo Redvelvet com framboesas macias e suculentas em cima.',
      name: 'Sundaes',
      quantity: 2,
      image: {
        url: 'https://plus.unsplash.com/premium_photo-1669680784325-f8de41034ad9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&xidM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de um sundae com framboesas em cima',
      },
    },
    {
      id: 6,
      price: 17.0,
      quantity: 2,
      desc: 'Milkshake Gourmet com framboesas e amoras macias e suculentas.',
      name: 'Milkshake Gourmet',
      image: {
        url: 'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de um milkshake com morangos e amoras caindo por cima',
      },
    },
  ];
  const product = {
    id: 5,
    price: 24.9,
    desc: 'Sundaes estilo Redvelvet com framboesas macias e suculentas em cima.',
    name: 'Sundaes',
    quantity: 1,
    image: {
      url: 'https://plus.unsplash.com/premium_photo-1669680784325-f8de41034ad9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&xidM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de um sundae com framboesas em cima',
    },
  };

  const card = await getCartProducts();
  return (
    <div>
      <form action={getCartProducts}>
        <button>Get Cart</button>
      </form>
      <form
        action={async () => {
          'use server';
          return setCartProducts(data);
        }}
      >
        <button>Set Cart</button>
      </form>
      <form
        action={async () => {
          'use server';
          return addCartProduct(product);
        }}
      >
        <button>+</button>
      </form>
      <form
        action={async () => {
          'use server';
          return fallCartProduct(product);
        }}
      >
        <button>-</button>
      </form>
      <div>{card?.products?.map((p) => p.quantity)}</div>
    </div>
  );
}
