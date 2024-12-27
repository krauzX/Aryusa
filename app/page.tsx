import {
  CategoryMenu,
  Hero,
  Incentives,
  IntroducingSection,
  Newsletter,
  ProductsSection,
} from "@/components";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <Loader>
      <Hero />

      <IntroducingSection />
      <ProductsSection />
      <Incentives />
      <CategoryMenu />

      <Newsletter />
    </Loader>
  );
}
