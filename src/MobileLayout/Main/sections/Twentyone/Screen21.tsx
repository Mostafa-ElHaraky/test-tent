import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Alert, AlertDescription } from "../../../../components/ui/alert";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen21 = (): JSX.Element => {
  // Warning data
  const warningData = {
    title: "Будьте осторожны",
    description: ", не нарвитесь на кустарное производство или посредников",
    alertText: "Обычно они выделяются низкой ценой и «сладкими обещаниями»",
  };

  // Company comparison data
  const comparisonData = {
    ourCompany: {
      title: "Наша компания",
      subtitle: "Вырезаем на плоттере с ЧПУ с точностью до 0.001мм.",
      description:
        "Это дает мощное натяжение при любой погоде и ветре. Тент не провисает. Стоимость плоттера",
      highlight: "5+ млн. руб.",
      image: "/rectangle-49.svg",
    },
    otherCompanies: {
      title: "Другие компании",
      subtitle:
        "Используют лекала. Вручную обводят ручкой и вырезают ножницами прямо на полу.",
      description:
        "Получаются элементы разные по размеру. Натяжение в одном месте хорошее, в другом тент провисает",
      image: "/rectangle-51.png",
    },
  };

  return (
    <div className="relative w-[375px] h-[1080px] bg-white">
      {/* Warning section */}
      <div className="inline-flex flex-col items-start gap-4 absolute top-[30px] left-6">
        <div className="flex flex-col w-[327px] items-start gap-3">
          <div className="w-[327px] text-2xl [font-family:'Raleway',Helvetica]">
            <span className="font-semibold text-[#527dc5]">
              {warningData.title}
            </span>
            <span className="font-medium text-[#232c42]">
              {warningData.description}
            </span>
          </div>
        </div>

        <Alert className="flex items-center gap-2.5 px-4 py-1.5 bg-[#f7e8e8] rounded-[10px] border-none">
          <div className="relative w-6 h-6">
            <div className="relative w-[17px] h-[15px] top-1 left-1 bg-[url(/vector.svg)] bg-[100%_100%]">
              <img
                className="absolute w-0.5 h-[9px] top-1 left-2"
                alt="Group"
                src="/group.png"
              />
            </div>
          </div>
          <AlertDescription className="w-[211px] font-semibold text-[#cf2a2a] text-[11px] leading-4 [font-family:'Raleway',Helvetica]">
            {warningData.alertText}
          </AlertDescription>
        </Alert>
      </div>

      {/* Comparison cards section */}
      <div className="inline-flex flex-col items-start gap-4 absolute top-[233px] left-6">
        {/* Our company card */}
        <Card className="relative w-[327px] h-[363px] rounded-[20px] shadow-2 bg-[#527dc5] border-none">
          <CardContent className="p-0">
            <div className="flex flex-col w-[293px] h-28 items-start gap-4 absolute top-5 left-5">
              <div className="w-fit font-bold text-white text-base leading-4 whitespace-nowrap [font-family:'Raleway',Helvetica]">
                {comparisonData.ourCompany.title}
              </div>
              <div className="w-fit font-semibold text-white text-[11px] leading-4 whitespace-nowrap [font-family:'Raleway',Helvetica]">
                {comparisonData.ourCompany.subtitle}
              </div>
              <div className="w-[293px] text-[11px] leading-[11px] [font-family:'Raleway',Helvetica]">
                <span className="font-medium text-white leading-4">
                  {comparisonData.ourCompany.description}
                </span>
                <span className="text-white leading-4"> </span>
                <span className="font-bold text-white leading-4">
                  {comparisonData.ourCompany.highlight}
                </span>
              </div>
            </div>
            <img
              className="top-[149px] left-5 absolute w-[287px] h-[193px]"
              alt="Our company tent"
              src={comparisonData.ourCompany.image}
            />
          </CardContent>
        </Card>

        {/* Other companies card */}
        <Card className="relative w-[327px] h-[358px] bg-white rounded-[20px] border border-solid border-[#cecece] shadow-[var(--)] backdrop-blur-[79px]">
          <CardContent className="p-0">
            <div className="flex flex-col w-[284px] h-[108px] items-start gap-4 absolute top-[19px] left-[19px]">
              <div className="w-fit font-bold text-[#394355] text-base leading-4 whitespace-nowrap [font-family:'Raleway',Helvetica]">
                {comparisonData.otherCompanies.title}
              </div>
              <div className="w-[252px] font-semibold text-[#394355] text-[11px] leading-4 [font-family:'Raleway',Helvetica]">
                {comparisonData.otherCompanies.subtitle}
              </div>
              <div className="w-[290px] mb-[-3.00px] mr-[-6.00px] font-normal text-[#394355] text-[11px] leading-4 [font-family:'Raleway',Helvetica]">
                {comparisonData.otherCompanies.description}
              </div>
            </div>
            <img
              className="top-36 left-[19px] object-cover absolute w-[287px] h-[193px]"
              alt="Other companies tent"
              src={comparisonData.otherCompanies.image}
            />
          </CardContent>
        </Card>
      </div>

      {/* Navigation buttons */}
      <div className="inline-flex items-start gap-6 absolute top-[994px] left-[119px]">
        <Button
          variant="outline"
          size="icon"
          className="relative w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-white"
        >
          <ChevronLeftIcon className="h-6 w-6 text-[#1f7cfe]" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="relative w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-white"
        >
          <ChevronRightIcon className="h-6 w-6 text-[#1f7cfe]" />
        </Button>
      </div>
    </div>
  );
};
