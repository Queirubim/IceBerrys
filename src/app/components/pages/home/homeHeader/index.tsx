import Image from 'next/image';

export const HomeHeader = () => {
  return (
    <section className="w-full lg:h-auto bg-waves bg-cover bg-center bg-no-repeat flex flex-col justify-end py-32">
      <div className="container flex items-center justify-between flex-col-reverse lg:flex-row">
        <div className="w-full max-w-[500px]">
          <h1 className=" text-5xl text-center lg:text-start font-bold font-yuji text-shadow text-gray-50 mb-12">
            Os Melhores Sorvetes da Sua Vida!
          </h1>
          <p className="text-2xl font-sans font-semibold text-shadow text-center lg:text-start text-gray-50 mt-6">
            Descubra o sabor natural e refrescante das frutas da estação em
            nossos sorvetes artesanais. Delicie-se com uma variedade de sabores
            autênticos e mergulhe em uma experiência única de frescor e
            qualidade.
          </p>
        </div>
        {/* <div className="origin-center w-full mt-10  "> */}
        <Image
          width={1024}
          height={1024}
          src={'/images/sunday-hero.png'}
          alt="Desenho de um sundae"
          className="w-[300px] h-[300px] sm:w-[420px] sm:h-[404px] md:w-[600px] md:h-[600px] lg:h-[600px] lg:w-[800px] mb-6 lg:mb-0 rounded-lg object-cover mt-10"
        />
        {/* </div> */}
      </div>
    </section>
  );
};
