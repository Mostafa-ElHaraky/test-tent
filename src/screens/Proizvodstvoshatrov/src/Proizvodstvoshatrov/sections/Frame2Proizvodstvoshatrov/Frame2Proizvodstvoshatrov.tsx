import { Card, CardContent } from "../../../../../../components/ui/card";

export const Frame2Proizvodstvoshatrov = (): JSX.Element => {
  // Data for guarantee periods
  const guaranteePeriods = [
    { years: "5 лет", description: "на конструкцию" },
    { years: "10 лет", description: "на ткань" },
    { years: "50 лет", description: "а сварные швы" },
    { years: "25 лет", description: "на отсутствие корозии" },
  ];

  return (
    <section className="w-full py-14 rounded-[30px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-[1274px] mx-auto px-4">
        <div className="flex flex-col w-full md:w-[574px] items-start gap-[22px] mb-6 md:mb-0">
          <div className="flex flex-col items-start gap-3 relative">
            <h2 className="font-semibold text-4xl font-['Raleway',Helvetica] tracking-[0]">
              <span className="text-white">Даем</span>
              <span className="text-[#98beff]"> честные гарантии</span>
            </h2>
          </div>

          <p className="text-white text-base leading-6 font-['Raleway',Helvetica] tracking-[0] max-w-[510px]">
            <span className="font-bold">
              99% клиентов ей не пользуются
              <br />
            </span>
            <span className="font-medium">
              но предоставляем для вашего спокойствия
            </span>
          </p>
        </div>

        <Card className="border-[3px] border-solid border-white bg-[#fffffff2] rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-[27px] pt-[17px]">
            <div className="flex flex-wrap gap-7">
              {guaranteePeriods.map((period, index) => (
                <div key={index} className="flex flex-col items-start gap-1.5">
                  <div className="font-bold text-[#232c42] text-3xl font-['Raleway',Helvetica] tracking-[0] leading-normal whitespace-nowrap">
                    {period.years}
                  </div>
                  <div className="font-normal text-[#394355] text-sm leading-normal whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                    {period.description}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
