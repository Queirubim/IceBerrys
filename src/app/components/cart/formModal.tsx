'use client';
import { cleanCartProducts } from 'app/actions/cartActions';

export const FormModal = () => {
  return (
    <form action={cleanCartProducts}>
      <button
        // disabled={!hasItemCart()}
        onClick={() => {
          alert('Pedido enviado com sucesso');
        }}
        type="submit"
        className="bg-pink-500 hover:bg-pink-600 transition-colors text-white px-4 py-2 rounded-lg"
      >
        Finalizar pedido
      </button>
    </form>
  );
};
