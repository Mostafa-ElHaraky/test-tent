import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection/ClientTestimonialsSection";
import { CompanyOverviewSection } from "./sections/CompanyOverviewSection";
import { ContactInformationSection } from "./sections/ContactInformationSection/ContactInformationSection";
import { HeroImageSection } from "./sections/HeroImageSection";
import { ServiceFeaturesSection } from "./sections/ServiceFeaturesSection/ServiceFeaturesSection";

export const Element7 = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center bg-white">
      <section className="relative w-[1440px] h-[3456px] mt-[195px]">
      <ServiceFeaturesSection />
      <HeroImageSection />
      <CompanyOverviewSection />
      <ClientTestimonialsSection />
      <ContactInformationSection />

      </section>
    </div>
  );
};
