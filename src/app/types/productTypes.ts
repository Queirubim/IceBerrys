type image = {
  alt: string;
  url: string;
};

export type Carousel = {
  title: string;
  image: image;
};

export type Highlight = {
  title: string;
  desc: string;
  image: image;
};

export type Product = {
  id: number;
  desc: string;
  name: string;
  price: number;
  image: image;
};

export type ProductCart = Product & {
  quantity: number;
};
