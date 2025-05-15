import { Badge } from "../../../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { Button } from "../../../../../../../components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const GroupWrapperServices3 = (): JSX.Element => {
  // Data for category filters
  const categories = [
    "Кондиционеры",
    "Входная группа",
    "Полы",
    "Комплектующие",
  ];

  // Client information
  const clientInfo = {
    company: "Название компании",
    city: "Москва",
    task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacusLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
  };

  

  return (
    <section className="w-full py-10 px-22 rounded-[30px] relative">
<div 
  className="
    flex flex-col lg:flex-row gap-8 max-w-[1440px] mx-auto
    w-[1440px] h-[566px] rounded-[30px]
    bg-[linear-gradient(108.32deg,_#243057_-27.58%,_#435575_107.93%)] 
  "
>        <div className="flex flex-col gap-[60px]">
          {/* Heading section */}
          <div className="flex flex-col gap-10 left-[50px] top-[50px] relative">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <p className="font-medium text-white text-lg leading-6 [font-family:'Raleway',Helvetica]">
                  Более 60% становятся постоянными клиентами
                </p>
              </div>

              <h2 className="text-4xl [font-family:'Raleway',Helvetica] w-full max-w-[555px]">
                <span className="font-semibold text-white">
                  Посмотрите, кому уже оснастили{" "}
                </span>
                <span className="font-semibold text-[#6da4ff]">шатры</span>
              </h2>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-4 left-[50px] top-[50px] relative">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="outline"
                className="p-3 rounded-[20px] border border-solid border-[#d3d3d3] bg-transparent"
              >
                <span className="font-semibold text-white text-base text-center leading-5 [font-family:'Raleway',Helvetica]">
                  {category}
                </span>
              </Badge>
            ))}
          </div>

          {/* Client information */}
          <Card className="w-full max-w-[560px] bg-transparent border-none left-[50px] top-[50px] relative ">
            <CardContent className="p-0 flex flex-col gap-6">
              <div className="flex justify-between w-full max-w-[378px]">
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-white text-base leading-6 [font-family:'Raleway',Helvetica]">
                    Компания
                  </h3>
                  <p className="font-normal text-white text-sm leading-5 [font-family:'Raleway',Helvetica]">
                    {clientInfo.company}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-white text-base leading-6 [font-family:'Raleway',Helvetica]">
                    Город
                  </h3>
                  <p className="font-normal text-white text-sm leading-5 [font-family:'Raleway',Helvetica]">
                    {clientInfo.city}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-white text-base leading-6 [font-family:'Raleway',Helvetica]">
                  Задача
                </h3>
                <p className="font-normal text-white text-sm leading-5 [font-family:'Raleway',Helvetica] max-w-[557px]">
                  {clientInfo.task}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column with preview images, main photo, and service cards */}
        <div className="flex flex-col">

          {/* Main image section with navigation */}
          <div className="relative w-full left-[100px] top-[60px]  ">
          <div className="relative w-[732px] h-[458px] -top-6.5 left-[-38px] bg-[url(/Fc3740fa54440e5eaefe94690ddc2643-4.png)] bg-cover bg-[50%_50%] rounded-[30px] overflow-hidden">
  {/* Navigation buttons */}
  <Button
    variant="outline"
    size="icon"
    className="absolute top-[199px] left-[36px] p-3 bg-white rounded-[50px]"
  >
    <ChevronLeftIcon className="h-4 w-4" />
  </Button>

  <Button
    variant="outline"
    size="icon"
    className="absolute top-[199px] left-[683px] p-3 bg-white rounded-[50px]"
  >
    <ChevronRightIcon className="h-4 w-4" />
  </Button>

</div>
</div>

        </div>
      </div>
    </section>
  );
};
