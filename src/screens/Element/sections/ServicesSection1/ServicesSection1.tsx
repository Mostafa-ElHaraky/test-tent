import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card"; // Added CardContent import

export const ServicesSection1 = (): JSX.Element => {
  // Data for GOST standards
  const gostStandards = [
    "ГОСТ 31937-2011",
    "ГОСТ 12.1.012-2004",
    "ГОСТ 27751-2014",
  ];

  // Data for cities
  const cityData = [
    { count: "8 городов России", type: "представительства" },
    { count: "4 городах СНГ", type: "представительства" },
  ];

  return (
    <section className="inline-flex flex-col items-start gap-9 relative top-[50px]">
<header className="flex flex-col items-start gap-[36px] w-[663px] h-[84px] relative">
  <h1 className="w-[663px] mt-[-1.00px] font-semibold text-4xl leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
    <span className="text-[#527dc5]">С 2012 года </span>
    <span className="text-[#232c42]">
      изготавливаем тентовые конструкции: шатры, ангары и пр.
    </span>
  </h1>
</header>

      <div className="relative w-[1348px] h-[381px] mr-[-4.00px]">
        <div className="relative w-[1426px] h-[465px] top-[-22px] left-[-38px]">
          {/* Background SVG elements */}
          <img
            className="absolute w-[748px] h-[294px] top-0 left-[678px]"
            alt="Rectangle"
            src="/rectangle-61.svg"
          />
          <img
            className="absolute w-[508px] h-[231px] top-[234px] left-0"
            alt="Rectangle"
            src="/rectangle-62.svg"
          />

{/* Technical control card */}
<Card className="absolute w-[432px] h-[155px] top-[246px] left-[490px] rounded-[20px] border border-solid border-[#dbdbdb] bg-white shadow-[0px_24px_38px_0px_rgba(22,_29,_36,_0.08)] backdrop-blur-[158px] [-webkit-backdrop-filter:blur(158px)]">
  <CardContent className="!p-6"> {/* Added padding */}
    <div className="flex flex-col items-start gap-2.5"> {/* Removed absolute positioning */}
      <p className="[font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-xl tracking-[0] leading-6">
        <span className="font-semibold">
          Отдел технического контроля
        </span>
      </p>
      <p className="[font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-lg tracking-[0] leading-6">
        (ОТК) для исключения брака проверяет каждый этап и сварные швы
      </p>
    </div>
  </CardContent>
</Card>

{/* Cities representation card */}
<Card className="absolute w-[432px] h-[155px] top-[246px] left-[950px] rounded-[20px] border border-solid border-[#dbdbdb] bg-white shadow-[0px_24px_38px_0px_rgba(22,_29,_36,_0.08)] backdrop-blur-[158px] [-webkit-backdrop-filter:blur(158px)]">
  <CardContent className="!p-6 flex flex-col items-center justify-center h-full">
    <div className="flex flex-col items-center gap-[17px] w-full">
      <div className="flex flex-wrap justify-center gap-4">
        {cityData.map((city, index) => (
          <Badge
            key={index}
            className="flex h-[49px] items-center gap-2.5 px-4 py-[7px] bg-[#527dc5] rounded-[10px]"
          >
            <span className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Raleway',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
              {city.count}
            </span>
          </Badge>
        ))}
      </div>
      <p className="font-semibold text-[#4f5d80] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
        представительства
      </p>
    </div>
  </CardContent>
</Card>

          {/* 8000+ manufactured structures */}
          <div className="inline-flex flex-col items-start gap-3 absolute top-[276px] left-[70px]">
            <h2 className="w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] font-bold text-white text-[46px] leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
              8000+
            </h2>
            <p className="w-fit font-semibold text-white text-xl leading-6 whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
              изготовленных конструкций
            </p>
          </div>

          {/* CPO membership */}
          <h2 className="absolute w-[449px] top-[52px] left-[758px] [font-family:'Raleway',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[normal]">
            Являемся членами CPO
          </h2>

          {/* GOST requirements card */}
          <Card className="absolute w-[660px] h-[206px] top-[22px] left-10 rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="p-0">
              <div className="w-[449px] top-[29px] left-[30px] flex flex-col items-start gap-2.5 absolute h-[83px]">
                <p className="relative self-stretch [font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-xl tracking-[0] leading-6">
                  <span className="font-semibold">
                    Соблюдаем все 50+ требований
                    <br />
                  </span>
                </p>
                <p className="relative self-stretch [font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-lg tracking-[0] leading-6">
                  ГОСТов и СНИПов к качеству материалов и сборке Это даже
                  больше, чем обычно нужно
                </p>
              </div>

              <div className="inline-flex items-start gap-6 absolute top-[141px] left-[30px]">
                {gostStandards.map((standard, index) => (
                  <Badge
                    key={index}
                    className="justify-center gap-2.5 px-3 py-1.5 bg-[#527dc5] rounded-lg inline-flex items-center relative flex-[0_0_auto]"
                  >
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-semibold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                      {standard}
                    </span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Permissions list button */}
          <Button
            variant="outline"
            className="inline-flex flex-col items-start gap-2.5 px-6 py-3 absolute top-[119px] left-[758px] bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
          >
            <div className="gap-[15px] inline-flex items-center relative flex-[0_0_auto]">
              <div className="relative w-[50px] h-[50px]">
                <div className="relative w-[35px] h-[35px] top-2 left-2 overflow-hidden">
                  <div className="relative h-[35px] top-px">
                    <img
                      className="absolute w-8 h-8 top-px left-px"
                      alt="Group"
                      src="/element8.png"
                    />
                  </div>
                </div>
              </div>
              <span className="w-fit font-bold text-[#232c42] text-base leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                Список допусков
              </span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};