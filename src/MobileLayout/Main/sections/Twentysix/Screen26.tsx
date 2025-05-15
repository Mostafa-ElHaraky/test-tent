import { ChevronRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Type definitions
type Feature = {
  icon: string;
  title: string;
  description: string;
};

type Country = {
  name: string;
  flag: string;
};

// Data with explicit types
const features: Feature[] = [
  {
    icon: "/group.png",
    title: "Расскажет о циклах",
    description: "и методах производства",
  },
  {
    icon: "/group-1.png",
    title: "Покажет разные ткани",
    description: "для сравнения качества",
  },
  {
    icon: "/group-2.png",
    title: "Произведет замеры участка",
    description: "и соберет данные для создания бесплатного 3D проекта",
  },
  {
    icon: "/group-3.png",
    title: "Отвезет на реальные объекты",
    description: "смонтированные у клиентов",
  },
];

const cities: string[][] = [
  ["Новосибирск", "Самара", "Казань", "Иркутск"],
  ["Екатеринбург", "Сочи", "Краснодар", "Чебоксары"],
];

const countries: Country[] = [
  { name: "Казахстан", flag: "/ellipse-14.png" },
  { name: "Узбекистан", flag: "/ellipse-14-1.png" },
  { name: "Азербайджан", flag: "/ellipse-14-2.png" },
  { name: "Республика Беларусь", flag: "/ellipse-14-3.png" },
];

// Props types for sub-components
type FeaturesCardProps = {
  features: Feature[];
};

type FeatureItemProps = {
  feature: Feature;
  index: number;
  isBottomRow?: boolean;
};

type LocationsCardProps = {
  cities: string[][];
  countries: Country[];
};

export const Screen26 = (): JSX.Element => {
  return (
    <div className="relative w-[375px] h-[1168px] bg-white font-raleway">
      {/* Header Section */}
      <div className="absolute w-[327px] top-[29px] left-6 font-semibold text-2xl leading-normal">
        <span className="text-primary-blue">Организуем живую встречу </span>
        <span className="text-dark-blue">
          с представителем компании в вашем городе
        </span>
      </div>

      {/* Features Card */}
      <FeaturesCard features={features} />

      {/* Bottom Section */}
      <div className="absolute w-full h-[684px] top-[454px] left-0">
        <ImageSection />
        <LocationsCard cities={cities} countries={countries} />
      </div>
    </div>
  );
};

// Features Card Component with proper typing
const FeaturesCard = ({ features }: FeaturesCardProps) => (
  <Card className="absolute top-[141px] left-6 rounded-2xl overflow-hidden shadow-card backdrop-blur-[79px] bg-radial-gradient">
    <CardContent className="p-4">
      <div className="relative w-[295.5px] h-[265px]">
        {/* First row of features */}
        <div className="grid grid-cols-2 gap-10">
          {features.slice(0, 2).map((feature, index) => (
            <FeatureItem key={`feature-top-${index}`} feature={feature} index={index} />
          ))}
        </div>

        {/* Second row of features */}
        <div className="grid grid-cols-2 gap-10 mt-[115px]">
          {features.slice(2, 4).map((feature, index) => (
            <FeatureItem 
              key={`feature-bottom-${index}`} 
              feature={feature} 
              index={index} 
              isBottomRow 
            />
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Feature Item Component with proper typing
const FeatureItem = ({ 
  feature, 
  index, 
  isBottomRow = false 
}: FeatureItemProps) => (
  <div className={`flex flex-col items-center gap-3 ${isBottomRow ? 'mt-4' : ''}`}>
    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
      <div 
        className={`bg-[url('${feature.icon}')] bg-cover ${index === 0 ? 'w-6 h-6' : 'w-7 h-7'}`}
      />
    </div>
    <div className={`flex flex-col items-center gap-1.5 ${index === 1 ? 'items-start' : ''}`}>
      <div className={`font-semibold text-blue-gray text-xs leading-[18px] ${index === 1 ? 'text-left' : 'text-center'}`}>
        {feature.title}
      </div>
      <div className={`text-blue-gray text-[11px] text-center leading-4 ${isBottomRow && index === 0 ? 'w-[159px]' : ''}`}>
        {feature.description}
      </div>
    </div>
  </div>
);

// Image Section Component
const ImageSection = () => (
  <div className="absolute w-full h-[363px] top-0 left-0 overflow-hidden">
    <div className="relative w-[356px] h-[415px] -left-1.5">
      <img
        className="absolute w-[279px] h-[339px] top-0 left-1.5"
        alt="Rectangle"
        src="/rectangle-49.png"
      />
      <img
        className="absolute w-[313px] h-[363px] top-0 left-[37px]"
        alt="Confident young businessman"
        src="/confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
      />

      {/* Decorative elements */}
      <div className="absolute w-[125px] h-[125px] top-[264px] left-[26px] rounded-full rotate-[46.81deg] blur-[25px] bg-gradient-to-b from-blue-500/55 to-transparent" />
      <div className="absolute w-[47px] h-[47px] top-40 left-[302px] rounded-full rotate-[-158.76deg] blur-[15px] bg-gradient-to-b from-sky-500 to-transparent" />
      <div className="absolute w-[18px] h-[18px] top-[25px] left-[108px] rounded-full rotate-[-158.76deg] blur-[15px] bg-gradient-to-b from-primary-blue to-transparent" />
    </div>
  </div>
);

// Locations Card Component with proper typing
const LocationsCard = ({ 
  cities, 
  countries 
}: LocationsCardProps) => (
  <Card className="absolute w-[327px] h-[344px] top-[340px] left-6 rounded-[20px] border border-gray-200 shadow-lg bg-gradient-to-br from-dark-blue to-gray-blue">
    <CardContent className="p-[15px]">
      <div className="flex flex-col items-start gap-[19px]">
        <h2 className="w-[244px] font-semibold text-white text-base leading-[18px]">
          Представительства в городах и странах СНГ
        </h2>

        <div className="flex gap-[57px]">
          {cities.map((column, colIndex) => (
            <div key={`city-column-${colIndex}`} className="flex flex-col gap-4">
              {column.map((city, cityIndex) => (
                <div key={`${colIndex}-${cityIndex}`} className="flex items-center gap-2.5">
                  <ChevronRightIcon className="w-2.5 h-2.5 text-white" />
                  <div className="font-medium text-white text-xs leading-5">
                    {city}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          {countries.map((country) => (
            <Badge
              key={country.name}
              className="flex items-center gap-2.5 p-2 bg-blue-100/10 rounded-[20px] w-full"
            >
              <img
                className="w-[35px] h-[35px] object-cover"
                alt={`Flag of ${country.name}`}
                src={country.flag}
              />
              <div className="font-semibold text-white text-[10px] leading-4">
                {country.name}
              </div>
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);