'use client';
import React, { useRef, useState } from 'react';
import { BsCart4 } from 'react-icons/bs';

export function Modal({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);

  const toggleModal = () => {
    setShow(!show);
  };

  const cartModal = useRef(null);
  return (
    <>
      <button
        onClick={toggleModal}
        className={`${show ? 'hidden' : ''} rounded-full fixed right-4 bottom-4 z-20 bg-pink-100 text-pink-500 p-2 lg:p-4 shadow-xl`}
      >
        <BsCart4 size={20} />
      </button>
      {show && (
        <div
          ref={cartModal}
          onClick={(event) => {
            if (event.target === cartModal.current) {
              toggleModal();
            }
          }}
          className="w-full fixed inset-0 bg-black/40 z-20 flex justify-end"
        >
          {children}
        </div>
      )}
    </>
  );
}
