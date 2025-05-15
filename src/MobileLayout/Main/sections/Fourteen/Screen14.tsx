import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen14 = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[375px] h-[612px] bg-white">
      <div className="flex flex-col items-start gap-6 p-6 pt-[30px]">
        {/* Top text section */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col w-full max-w-[325px] items-start gap-3">
            <p className="text-[11px] leading-4 text-[#4f5d80] font-['Raleway',Helvetica]">
              <span className="font-medium">
                Еще до производства протестируем{" "}
              </span>
              <span className="font-bold">
                шатер для самых сложных условий эксплуатации
              </span>
            </p>

            <p className="text-2xl leading-normal w-full max-w-[325px] font-['Raleway',Helvetica]">
              <span className="font-medium text-[#232c42]">
                Шатры выдерживают колосальные{" "}
              </span>
              <span className="font-bold text-[#527dc5]">
                ветровые нагрузки до 35м/c
              </span>
            </p>
          </div>

          <Badge className="px-4 py-1.5 bg-[#e8edf7] text-[#394355] rounded-[10px] font-['Raleway',Helvetica] hover:bg-[#e8edf7]">
            <span className="text-sm leading-4 font-semibold w-[232px]">
              По запросу рассчитаем снеговую нагрузку от 60 до 380 кг/м2
            </span>
          </Badge>

          <p className="text-[11px] leading-4 text-[#394355] w-full max-w-[325px] font-['Raleway',Helvetica]">
            <span>При проектировании макет шатра </span>
            <span className="font-semibold">
              прогоняем через аэротрубу в специальной программе Dlubal rwind
            </span>
          </p>
        </div>

        {/* Video player section */}
        <Card className="w-full max-w-[326.99px] h-[196.39px] bg-[#e8edf7] rounded-[20px] border-none">
          <CardContent className="flex items-center justify-center h-full p-0">
            <Button
              variant="outline"
              className="w-[50px] h-[50px] rounded-full bg-white border-none shadow-none p-0 hover:bg-white"
            >
              <img
                className="w-4 h-[19px]"
                alt="Play button"
                src="/polygon-2.svg"
              />
            </Button>
          </CardContent>
        </Card>

        {/* Navigation buttons */}
        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none"
          >
            <div className="relative w-6 h-6 rotate-180">
              <img
                className="absolute w-3.5 h-6 top-0 left-[5px] -rotate-180"
                alt="Previous"
                src="/group.png"
              />
            </div>
          </Button>

          <Button
            variant="outline"
            className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none"
          >
            <div className="relative w-6 h-6">
              <img
                className="absolute w-3.5 h-6 top-0 left-[5px]"
                alt="Next"
                src="/group-1.png"
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
