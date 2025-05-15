import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

export const Element4 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-[1440px] h-[3090px] bg-white mx-auto">
      <section className="relative h-[3090px] rounded-[0px_0px_30px_30px]">
        <HeroSection />
        <CallToActionSection />
        <ServicesSection />
        <TestimonialsSection />
        <FeaturesSection />
      </section>
    </main>
  );
};

