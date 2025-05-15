import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen30 = (): JSX.Element => {
  // Data for GOST badges
  const gostStandards = [
    "ГОСТ 31937-2011",
    "ГОСТ 12.1.012-2004",
    "ГОСТ 27751-2014",
  ];

  // Data for city representation
  const cityRepresentation = [
    { text: "8 городов России", id: 1 },
    { text: "4 городах СНГ", id: 2 },
  ];

  return (
    <div className="relative w-full max-w-[375px] h-[1023px] bg-white mx-auto">
      <header className="absolute w-[327px] top-[29px] left-6 font-semibold text-2xl leading-normal font-['Raleway',Helvetica] tracking-[0]">
        <span className="text-[#527dc5]">С 2012 года </span>
        <span className="text-[#232c42]">
          изготавливаем тентовые конструкции: шатры, ангары и пр.
        </span>
      </header>

      <div className="inline-flex flex-col items-start gap-4 absolute top-[166px] left-6">
        <Card className="relative w-[326px] h-[197px] rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-0">
            <div className="inline-flex flex-col items-start gap-4 relative top-[23px] left-[23px]">
              <div className="w-[281px] h-[74px] flex flex-col items-start gap-2.5">
                <div className="relative self-stretch font-normal text-[#232c42] text-sm leading-[14px] font-['Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold leading-4">
                    Соблюдаем все 50+ требований
                    <br />
                  </span>
                </div>

                <div className="relative self-stretch font-normal text-[#232c42] text-sm leading-[14px] font-['Raleway',Helvetica] tracking-[0]">
                  <span className="leading-4">
                    ГОСТов и СНИПов к качеству материалов и сборке Это даже
                    больше, чем обычно нужно
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap w-[248px] items-start gap-[4px_4px] relative flex-[0_0_auto]">
                {gostStandards.map((standard, index) => (
                  <Badge
                    key={index}
                    className="px-3 py-1.5 bg-[#527dc5] rounded-lg font-['Raleway',Helvetica] font-semibold text-white text-[11px] leading-4"
                  >
                    {standard}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="relative w-[326px] h-[206px]">
          <div className="h-[294px] top-[-22px] bg-[url(/rectangle-61.svg)] relative w-[375px] -left-6 bg-[100%_100%]">
            <div className="absolute w-[161px] top-10 left-[47px] font-['Raleway',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-normal">
              Являемся членами CPO
            </div>

            <Button
              variant="outline"
              className="inline-flex flex-col items-start gap-2.5 px-3 py-2 absolute top-[163px] left-[47px] bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
            >
              <div className="gap-[15px] inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-6 h-6">
                  <div className="relative w-[17px] h-[17px] top-1 left-1 overflow-hidden">
                    <div className="relative h-[17px]">
                      <img
                        className="absolute w-[15px] h-[15px] top-px left-px"
                        alt="Group"
                        src="/group.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative w-fit font-bold text-[#232c42] text-base leading-normal whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                  Список допусков
                </div>
              </div>
            </Button>
          </div>
        </div>

        <div className="relative w-[327px] h-[125px]">
          <div className="h-[201px] -top-3.5 bg-[url(/rectangle-62.svg)] relative w-[375px] -left-6 bg-[100%_100%]">
            <div className="inline-flex flex-col items-start gap-3 relative top-8 left-[47px]">
              <div className="relative w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] font-bold text-white text-[46px] leading-normal whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                8000+
              </div>

              <div className="relative w-fit font-semibold text-white text-base leading-4 whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                изготовленных конструкций
              </div>
            </div>
          </div>
        </div>

        <Card className="relative w-[327px] h-[125px] rounded-[20px] border border-solid border-[#dadada] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-0">
            <div className="inline-flex flex-col items-start gap-[17px] relative top-[23px] left-[22px]">
              <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
                {cityRepresentation.map((city) => (
                  <Badge
                    key={city.id}
                    className="h-9 px-4 py-[7px] bg-[#527dc5] rounded-[10px] font-['Raleway',Helvetica] font-bold text-white text-[11px] leading-normal whitespace-nowrap [text-shadow:0px_4px_4px_#00000040]"
                  >
                    {city.text}
                  </Badge>
                ))}
              </div>

              <div className="relative w-fit font-semibold text-[#4f5d80] text-base leading-6 whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                представительства
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative w-[327px] h-[110px] rounded-[20px] border border-solid border-[#dadada] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-0">
            <div className="relative w-[289px] h-[58px] top-6 left-[22px] flex flex-col items-start gap-2.5">
              <div className="relative self-stretch font-normal text-[#232c42] text-sm leading-[14px] font-['Raleway',Helvetica] tracking-[0]">
                <span className="font-semibold leading-4">
                  Отдел технического контроля
                  <br />
                </span>
              </div>

              <div className="relative self-stretch font-normal text-[#232c42] text-sm leading-[14px] font-['Raleway',Helvetica] tracking-[0]">
                <span className="leading-4">
                  (ОТК) для исключения брака проверяет каждый этап и сварные швы
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
