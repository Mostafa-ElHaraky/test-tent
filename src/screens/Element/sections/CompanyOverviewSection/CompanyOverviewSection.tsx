import { Card, CardContent } from "../../../../components/ui/card";

export const CompanyOverviewSection = (): JSX.Element => {
  // Data for service features
  const serviceFeatures = [
    {
      icon: "/element7-10.png",
      title: "Произведет замеры участка",
      description: "и соберет данные для создания бесплатного 3D проекта",
    },
    {
      icon: "/element7-11.png",
      title: "Покажет разные ткани",
      description: "для сравнения качества",
    },
    {
      icon: "/element7-12.png",
      title: "Расскажет о циклах",
      description: "и методах производства",
    },
    {
      icon: "/element7-13.png",
      title: "Отвезет на реальные объекты",
      description: "смонтированные у клиентов",
    },
  ];

  // Data for Russian cities
  const russianCities = [
    ["Новосибирск", "Самара", "Казань", "Иркутск"],
    ["Екатеринбург", "Сочи", "Краснодар", "Чебоксары"],
  ];

  // Data for CIS countries
  const cisCountries = [
    {
      name: "Казахстан",
      flagSrc: "/ellipse-14.png",
    },
    {
      name: "Узбекистан",
      flagSrc: "/ellipse-14-1.png",
    },
    {
      name: "Азербайджан",
      flagSrc: "/ellipse-14-2.png",
    },
    {
      name: "Республика Беларусь",
      flagSrc: "/ellipse-14-3.png",
    },
  ];

  return (
<section className="w-[1342px] h-[931px] absolute top-[1200px] left-[48px] py-1 px-1">
<div className="relative top-[-30px] " >
<h2 className="font-semibold text-4xl font-['Raleway',Helvetica] mb-20 ">
        <span className="text-[#527dc5]">Организуем живую встречу </span>
        <span className="text-[#232c42]">
          с представителем компании в вашем городе
        </span>
      </h2>
      

      <div className="flex flex-col gap-6">
        {/* Service features card */}
        <Card 
  className="w-[1343px] h-[127px] absolute top-[94px] left-[-1px] rounded-[16px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] p-[24px]"
>         
 <CardContent className="p-6">
            <div className="flex flex-wrap items-start gap-[60px] h-full">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="relative w-[25px] h-[25px] left-[-35px] top-[-10px]">
                  <div className="w-[74px] h-[74px] bg-[#F3F4F7] rounded-[87px] flex items-center justify-center">
                          <img 
                            src={feature.icon} 
                            alt={feature.title}
                            className="w-30 h-30"
                          />                
                    </div>
                  </div>
                  <div className="flex flex-col w-[217px] items-start justify-center gap-1.5">
                    <div className="font-semibold text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica]">
                      {feature.title}
                    </div>
                    <div className="font-normal text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica]">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main content area with image and representatives */}
        <div className="w-[1390px] h-[752px] absolute top-[179px] left-[-48px] flex flex-wrap gap-8">
        {/* Left side with businessman image */}
          <div className="relative w-full md:w-[635px]">
            <img
              className="relative w-[507px] h-[628px]"
              alt="Rectangle"
              src="/rectangle-49.png"
            />
            <img
              className="absolute w-[527px] h-[610px] top-16 left-24"
              alt="Confident young businessman"
              src="/element7_confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
            />
            <div className="absolute w-[463px] h-[109px] top-[565px] left-[143px] -rotate-180 [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
            <div className="absolute w-[211px] h-[211px] top-[508px] left-[79px] rounded-[105.39px] rotate-[46.81deg] blur-[25px] backdrop-blur-[25px] [background:linear-gradient(180deg,rgba(90,145,238,0.55)_0%,rgba(82,125,197,0)_100%)]" />
            <div className="absolute w-[79px] h-[79px] top-[333px] left-[544px] rounded-[39.66px] rotate-[-158.76deg] blur-[15px] [background:linear-gradient(180deg,rgba(86,164,255,1)_0%,rgba(82,125,197,0)_100%)]" />
            <div className="absolute w-[31px] h-[31px] top-[107px] left-[216px] rounded-[15.49px] rotate-[-158.76deg] blur-[15px] [background:linear-gradient(180deg,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)]" />
          </div>

          {/* Right side with representatives */}
          <Card 
  className="w-[658px] h-[572px] absolute top-[250px] left-[732px] rounded-[20px] border border-[#E3E3E3] shadow-[0px_22px_44px_#207CFE66] bg-[linear-gradient(108.32deg,#243057_-27.58%,#374255_107.93%)]"
>            <CardContent className="p-14 pt-[51px]">
              <div className="flex flex-col gap-[60px]">
                <h3 className="font-semibold text-white text-2xl leading-6 font-['Raleway',Helvetica]">
                  Представительства в городах и странах СНГ
                </h3>

                {/* Cities list */}
                <div className="flex gap-[156px]">
                  {russianCities.map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-4">
                      {column.map((city, cityIndex) => (
                        <div
                          key={cityIndex}
                          className="flex items-center gap-2.5"
                        >
                          <img
                            className="w-[10.5px] h-[9.53px]"
                            alt="Polygon"
                            src="/polygon-3.svg"
                          />
                          <div className="font-medium text-white text-base leading-5 font-['Raleway',Helvetica]">
                            {city}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Countries grid */}
                <div className="flex flex-wrap gap-6">
                  {cisCountries.map((country, index) => (
                    <Card
                      key={index}
                      className="w-[259px] h-[85px] bg-[#a9beef1a] rounded-[20px] border border-solid border-[#d3d3d31a]"
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 p-6">
                          <img
                            className="w-[50px] h-[50px] object-cover"
                            alt={`Flag of ${country.name}`}
                            src={country.flagSrc}
                          />
                          <div className="font-semibold text-white text-base leading-5 font-['Raleway',Helvetica]">
                            {country.name}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </section>
  );
};
