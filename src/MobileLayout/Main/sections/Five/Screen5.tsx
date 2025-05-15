import { Card, CardContent } from "../../../../components/ui/card";

export const Screen5 = (): JSX.Element => {
  // Tent types data for the first card
  const tentTypes = [
    ["Арочные шатры", "Мобильные шатры"],
    ["Глэмпинг", "Надувные шатры"],
    ["Деревянные шатры", "Натяжные шатры"],
    ["Каскадные шатры", "Пагода шатры"],
    ["Классические шатры", "Сферические шатры"],
    ["Купольные конструкции", "Шатер звезда"],
    ["Мембранные шатры", ""],
  ];

  // Other tent structures data for the second card
  const otherStructures = [
    ["Перголы", "Каркасные ангары"],
    ["Тентовые ангары", "Зонты"],
    ["Арочные ангары", ""],
  ];

  return (
    <div className="relative w-[375px] h-[937px] bg-[#eef1f8]">
      <h1 className="absolute top-[29px] left-6 font-['Raleway',Helvetica] font-semibold text-[#232c42] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
        Что предлагаем
      </h1>

      <div className="inline-flex flex-col items-start gap-4 absolute top-[88px] left-6">
        <Card className="relative w-[327px] h-[518px] rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%]">
          <CardContent className="p-0">
            <div className="inline-flex flex-col items-start gap-4 relative top-7 left-7">
              <h2 className="w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-bold text-[#527dc5] text-base leading-6 tracking-[0] whitespace-nowrap">
                Шатры
              </h2>

              <div className="inline-flex items-start gap-[17px] relative flex-[0_0_auto]">
                <div className="flex flex-col w-32 items-start gap-3 relative">
                  {tentTypes.map((row, rowIndex) => (
                    <a
                      key={`tent-left-${rowIndex}`}
                      href="#"
                      className={`w-fit font-['Raleway',Helvetica] font-normal text-[#394355] text-[11px] leading-4 underline ${rowIndex === 0 ? "mt-[-1.00px]" : ""} ${row[0].includes("Каскадные") ? "w-[169px] mr-[-41.00px]" : "whitespace-nowrap"}`}
                    >
                      {row[0]}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col w-[124px] items-start gap-3 relative">
                  {tentTypes.map(
                    (row, rowIndex) =>
                      row[1] && (
                        <a
                          key={`tent-right-${rowIndex}`}
                          href="#"
                          className={`font-['Raleway',Helvetica] font-normal text-[#394355] text-[11px] leading-4 underline ${rowIndex === 0 ? "mt-[-1.00px]" : ""} ${row[1].includes("Пагода") ? "w-[169px] mr-[-45.00px]" : "w-fit whitespace-nowrap"}`}
                        >
                          {row[1]}
                        </a>
                      ),
                  )}
                </div>
              </div>
            </div>

            <div className="absolute w-[271px] h-[218px] top-[272px] left-7 rounded-[20px]">
              <img
                className="absolute w-[249px] h-[218px] top-0 left-[22px]"
                alt="Event tent"
                src="/event-tent-i02-1.png"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="relative w-[327px] h-[285px] rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%]">
          <CardContent className="p-0">
            <div className="inline-flex flex-col items-start gap-[21px] absolute top-7 left-7">
              <h2 className="w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-bold text-[#232c42] text-base leading-6 tracking-[0] whitespace-nowrap">
                Другие тентовые конструкции
              </h2>

              <div className="inline-flex items-start gap-[61px] relative flex-[0_0_auto]">
                <div className="inline-flex items-start gap-[55px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                    {otherStructures.map((row, rowIndex) => (
                      <a
                        key={`structure-left-${rowIndex}`}
                        href="#"
                        className={`w-fit font-['Raleway',Helvetica] font-normal text-[#394355] text-[11px] leading-4 underline ${rowIndex === 0 ? "mt-[-1.00px]" : ""} whitespace-nowrap`}
                      >
                        {row[0]}
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-col w-[122px] items-start gap-3 relative">
                    {otherStructures.map(
                      (row, rowIndex) =>
                        row[1] && (
                          <a
                            key={`structure-right-${rowIndex}`}
                            href="#"
                            className={`font-['Raleway',Helvetica] font-normal text-[#394355] text-[11px] leading-4 underline ${rowIndex === 0 ? "w-[169px] mt-[-1.00px] mr-[-47.00px]" : "w-fit whitespace-nowrap"}`}
                          >
                            {row[1]}
                          </a>
                        ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-[271px] h-[92px] top-[165px] left-7 rounded-[20px]">
              <img
                className="absolute w-[223px] h-[78px] top-2 left-6"
                alt="Bessonneau hangar"
                src="/bessonneau-hangar-i01-1.png"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
