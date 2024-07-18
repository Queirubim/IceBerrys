'use client';
import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 746 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet2: {
    breakpoint: { max: 746, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
type CarouselRespProps = {
  children: ReactNode[];
};

export const CarouselResp = ({ children }: CarouselRespProps) => {
  return (
    <Carousel
      responsive={responsive}
      ssr={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      arrows={false}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={500}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style bg-green-300"
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      className="transition-all ease-out"
    >
      {...children}
    </Carousel>
  );
};
