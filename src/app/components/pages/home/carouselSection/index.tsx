import { Carousel } from 'app/types/productTypes';

import { CarouselCard } from './carousel-card';
import { CarouselResp } from './carouselResp';

async function getCarousel(): Promise<Carousel[]> {
  const response = await fetch('http://localhost:3000/api/carousel');
  return response.json();
}

export const CarouselSection = async () => {
  const items = await getCarousel();
  return (
    <section className="bg-landscape2 bg-cover bg-center bg-fixed">
      <div className="w-full pb-16 bg-violet-100/90">
        <div className="container py-8 flex flex-col justify-center">
          <h2 className="my-10 text-center px-8 text-3xl font-yuji font-semibold text-pink-600">
            Conheça nossas receitas
          </h2>
          <div className="max-w-[1800px]">
            <CarouselResp>
              {items.map((item) => (
                <CarouselCard card={item} key={item.title} />
              ))}
            </CarouselResp>
          </div>
        </div>
      </div>
    </section>
  );
};
