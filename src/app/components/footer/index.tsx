import Link from 'next/link';
export const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center bg-purple-100 text-center text-pink-500"
    >
      <div className="container px-6 py-8 flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="flex flex-col m-8 items-start w-1/2">
          <h2>Siga nossas redes sociais</h2>
          <div className="mb-6 flex mt-8 justify-center">
            <Link
              href="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-pink-500 uppercase leading-normal text-pink-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link
              href="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-pink-500 uppercase leading-normal text-pink-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </Link>
            <Link
              href="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-pink-500 uppercase leading-normal text-pink-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </div>
          <strong>Receba ofertas exclusivas</strong>
          <form
            className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4"
            action=""
          >
            <div className="relative" data-te-input-wrapper-init>
              <input
                type="text"
                className="rounded-lg peer block min-h-[auto] w-full border-0 px-3 py-2 leading-[1.6] text-gray-400 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-400 dark:placeholder:text-gray-400 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Seu Email"
              />
              <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-gray-400 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-400 dark:peer-focus:text-gray-400">
                Seu Email
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="inline-block rounded border-2 border-pink-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-pink-500 transition duration-150 ease-in-out hover:border-purple-500 hover:bg-opacity-10 hover:text-purple-500 focus:border-purple-500 focus:text-purple-500 focus:outline-none focus:ring-0 active:border-pink-500 active:text-pink-500 dark:hover:bg-purple-500 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col sm:flex-row mt-8  justify-center gap-24">
          <div className=" flex flex-col  gap-4">
            <h5 className=" font-bold uppercase">Empresa</h5>

            <ul className="list-none flex min-w-1/4 flex-col items-start text-gray-400 gap-2">
              <li>
                <Link href="#!">Sobre</Link>
              </li>
              <li>
                <Link href="#!">Equipe</Link>
              </li>
              <li>
                <Link href="#!">Cremes</Link>
              </li>
              <li>
                <Link href="#!">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col  gap-4">
            <h5 className=" font-bold uppercase">Contato</h5>

            <ul className="list-none flex min-w-1/4 flex-col items-start text-gray-400 gap-2">
              <li>
                <Link href="#!">Ajuda</Link>
              </li>
              <li>
                <Link href="#!">Suport</Link>
              </li>
              <li>
                <Link href="#!">Parceiros</Link>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col  gap-4">
            <h5 className=" font-bold uppercase">Juridico</h5>

            <ul className="list-none flex min-w-1/4 flex-col items-start text-gray-400 gap-2">
              <li>
                <Link href="#!">Sugurança</Link>
              </li>
              <li>
                <Link href="#!">Privacidade</Link>
              </li>
              <li>
                <Link href="#!">Termos</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-4/5 border-b-2 h-1 rounded-sm " />
      <div className="w-full p-4 text-center">
        © 2023 Copyright:
        <Link href="https://github.com/Queirubim"> Criado Por Queirubim</Link>
      </div>
    </footer>
  );
};
