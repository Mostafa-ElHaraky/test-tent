import { AboutUsSection } from "./sections/AboutUsSection";
import { ConsultationSection } from "./sections/ConsultationSection/ConsultationSection";
import { HeroSection1 } from "./sections/HeroSection1/HeroSection1";
import { ServicesSection1 } from "./sections/ServicesSection1/ServicesSection1";

export const Element8 = (): JSX.Element => {
  return (
    <div className="flex justify-center items-start w-full min-h-screen bg-white">
      <main className="w-[1440px] h-[2717px]">
        <HeroSection1 />
        <ServicesSection1 />
        <AboutUsSection />
        <ConsultationSection />
      </main>
    </div>
  );
};