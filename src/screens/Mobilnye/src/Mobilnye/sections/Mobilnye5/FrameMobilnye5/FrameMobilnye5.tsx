import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";

export const FrameMobilnye5 = (): JSX.Element => {
  // Data for the feature section
  const featureData = {
    subtitle:
      "Еще до производства протестируем шатер для самых сложных условий эксплуатации",
    title: {
      regular: "Шатры выдерживают колосальные ",
      highlighted: "ветровые нагрузки до 35м/c",
    },
    callout: "По запросу рассчитаем снеговую нагрузку от 60 до 380 кг/м2",
    description: {
      regular: "При проектировании макет шатра ",
      bold: "прогоняем через аэротрубу в специальной программе Dlubal rwind",
    },
  };

  return (
    <section className="flex flex-row items-center gap-10 w-full py-12 px-12">
      <div className="flex flex-col items-start justify-center gap-10">
        <div className="flex flex-col items-start gap-[30px]">
          <div className="flex flex-col w-full max-w-[621px] items-start gap-3">
            <div className="flex items-start gap-3">
              <p className="font-normal text-[#4f5d80] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-medium">
                  {featureData.subtitle.split("шатер")[0]}шатер
                </span>
                <span className="font-bold">
                  {featureData.subtitle.split("шатер")[1]}
                </span>
              </p>
            </div>

            <h2 className="text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="font-medium text-[#232c42]">
                {featureData.title.regular}
              </span>
              <span className="font-bold text-[#527dc5]">
                {featureData.title.highlighted}
              </span>
            </h2>
          </div>

          <Card className="bg-[#e8edf7] border-none rounded-[10px]">
            <CardContent className="px-4 py-1.5">
              <p className="font-semibold text-[#394355] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                {featureData.callout}
              </p>
            </CardContent>
          </Card>

          <p className="text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] max-w-[643px]">
            <span className="font-normal">
              {featureData.description.regular}
            </span>
            <span className="font-semibold">
              {featureData.description.bold}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-6">
  <Button
    variant="outline"
    size="icon"
    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
  >
    <div className="rotate-180">
      <img
        className="w-3.5 h-6 -rotate-180"
        alt="Previous slide"
        src="/GROP-10.png"
      />
    </div>
  </Button>

  <Button
    variant="outline"
    size="icon"
    className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
  >
    <img className="w-3.5 h-6" alt="Next slide" src="/GROP-11.png" />
  </Button>
</div>

      </div>

      <Card className="relative w-[656px] h-[394px] bg-[#e8edf7] rounded-[20px] border-none">
        <CardContent className="p-0 h-full flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="w-[75px] h-[75px] bg-white rounded-full border-none"
          >
            <img
              className="w-[25px] h-[29px]"
              alt="PlayIcon video"
              src="/Polygon-2.svg"
            />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
