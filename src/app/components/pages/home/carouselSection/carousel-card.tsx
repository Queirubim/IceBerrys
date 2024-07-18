import Image from 'next/image';

import { Carousel } from 'app/types/productTypes';

type CarouselCardProps = {
  card: Carousel;
};

export const CarouselCard = ({ card }: CarouselCardProps) => {
  return (
    <div className="group h-52 items-center justify-start min-w-38 p-4 flex flex-col">
      <Image
        className="min-w-32 max-w-32 max-h-32 min-h-32 pointer-events-none object-cover rounded-full transition-all group-hover:scale-125"
        height={200}
        width={200}
        alt={card.image.alt}
        src={card.image.url}
      />
      <p className="text-md mt-4 text-center font-semibold font-sans text-pink-500">
        {card.title}
      </p>
    </div>
  );
};
