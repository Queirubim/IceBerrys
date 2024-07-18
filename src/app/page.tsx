import { CarouselSection } from './components/pages/home/carouselSection';
import { HighlightProductsSection } from './components/pages/home/highlightProdutsSection';
import { HomeHeader } from './components/pages/home/homeHeader';

export default async function Home() {
  return (
    <main>
      <HomeHeader />

      <CarouselSection />

      <HighlightProductsSection />
    </main>
  );
}
