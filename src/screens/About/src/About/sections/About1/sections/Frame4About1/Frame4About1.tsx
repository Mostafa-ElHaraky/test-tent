import { TriangleIcon } from "lucide-react";
import { Card, CardContent } from "../../../../../../../../components/ui/card";

export const Frame4About1 = (): JSX.Element => {
  // Data for Russian cities
  const russianCities = [
    "Новосибирск",
    "Самара",
    "Казань",
    "Иркутск",
    "Екатеринбург",
    "Сочи",
    "Краснодар",
    "Чебоксары",
  ];

  // Data for CIS countries
  const cisCountries = [
    { name: "Казахстан", flagSrc: "/About1-ellipse-14.png" },
    { name: "Узбекистан", flagSrc: "/About1-ellipse-14-1.png" },
    { name: "Азербайджан", flagSrc: "/About1-ellipse-14-2.png" },
    { name: "Республика Беларусь", flagSrc: "/About1-ellipse-14-3.png" },
  ];

  return (
    <main className="relative top-[600px] ">
    <section className="flex flex-col items-center gap-[45px] w-full py-12">
      <div className="flex flex-col items-center gap-3 w-full max-w-[690px]">
        <h2 className="font-semibold text-[#232c42] text-4xl text-center [font-family:'Raleway',Helvetica]">
          Открыты представительства
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-7 w-full">
        {/* Russian Cities Card */}
        <Card className="w-full max-w-[660px] h-[323px] rounded-[20px] border-[#e2e2e2] shadow-2 bg-[#232C42]">
          <CardContent className="p-0">
            <div className="p-[41px_57px]">
              <h3 className="font-semibold text-white text-2xl leading-6 mb-9 [font-family:'Raleway',Helvetica]">
                В 8 городах России
              </h3>

              <div className="flex justify-between">
                {/* First column of cities */}
                <div className="flex flex-col gap-6">
                  {russianCities.slice(0, 4).map((city, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <TriangleIcon className="w-[10.5px] h-[9.53px] text-white fill-white" />
                      <span className="font-medium text-white text-lg leading-5 [font-family:'Raleway',Helvetica]">
                        {city}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Second column of cities */}
                <div className="flex flex-col gap-6">
                  {russianCities.slice(4).map((city, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <TriangleIcon className="w-[10.5px] h-[9.53px] text-white fill-white" />
                      <span className="font-medium text-white text-lg leading-5 [font-family:'Raleway',Helvetica]">
                        {city}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CIS Countries Card */}
        <Card className="w-full max-w-[660px] h-[323px] rounded-[20px] border-[#e2e2e2] shadow-2 bg-[#232C42]">
          <CardContent className="p-0">
            <div className="p-[41px_58px]">
              <h3 className="font-semibold text-white text-2xl leading-6 mb-6 [font-family:'Raleway',Helvetica]">
                в 4х странах СНГ
              </h3>
               
              <div className="flex flex-wrap gap-[32px] w-[542px] h-[194px] relative left-[20px] ">
                {cisCountries.map((country, index) => (
                  <Card
                    key={index}
                    className="w-[210px] h-[85px] rounded-[20px] border border-solid border-[#d3d3d31a] bg-[#a9beef1a] relative"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 absolute top-[18px] left-6">
                        <img
                          className="w-[50px] h-[50px] object-cover"
                          alt={`Flag of ${country.name}`}
                          src={country.flagSrc}
                        />
                        <span
                          className={`font-semibold text-white text-base leading-5 [font-family:'Raleway',Helvetica] ${country.name === "Республика Беларусь" ? "w-[156px]" : ""}`}
                        >
                          {country.name}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
    </main>
  );
};
