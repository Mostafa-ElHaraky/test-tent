import { Card, CardContent } from "../../../../components/ui/card";

export const GroupByAnima = (): JSX.Element => {
  // Data for tent types
  const tentTypes = [
    [
      "Арочные шатры",
      "Глэмпинг",
      "Деревянные шатры",
      "Каскадные шатры",
      "Классические шатры",
      "Купольные конструкции",
      "Мембранные шатры",
    ],
    [
      "Мобильные шатры",
      "Надувные шатры",
      "Натяжные шатры",
      "Пагода шатры",
      "Сферические шатры",
      "Шатер звезда",
    ],
  ];

  // Data for other tent constructions
  const otherConstructions = [
    ["Перголы", "Тентовые ангары", "Арочные ангары"],
    ["Каркасные ангары", "Зонты"],
  ];

  return (
    <section className="w-full h-[540px] bg-[#eef1f8] rounded-[20px] p-12 pt-16">
      <div className="flex flex-col gap-9">
        <h2 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">
          Что предлагаем
        </h2>

        <div className="flex gap-6">
          <Card className="w-[888px] h-[362px] bg-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="p-7">
              <div className="flex flex-col gap-[21px]">
                <h3 className="font-bold text-[#527dc5] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                  Шатры
                </h3>

                <div className="flex gap-[61px]">
                  {tentTypes.map((column, columnIndex) => (
                    <div
                      key={`tent-column-${columnIndex}`}
                      className="flex flex-col gap-3"
                    >
                      {column.map((item, itemIndex) => (
                        <a
                          key={`tent-item-${columnIndex}-${itemIndex}`}
                          href="#"
                          className="font-normal text-[#394355] text-base leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] w-[169px]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div 
  className="absolute w-[366px] h-[296px] top-[23px] right-5 rounded-[20px]" 
  style={{ 
    background: 'linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #4778C7 95.5%)' 
  }}
>
                <img
                  className="w-[336px] h-[296px] ml-[30px]"
                  alt="Event tent"
                  src="/event-tent-i02-1.png"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="w-[432px] h-[362px] bg-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="p-7">
              <div className="flex flex-col gap-[21px]">
                <h3 className="font-bold text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                  Другие тентовые конструкции
                </h3>

                <div className="flex gap-[61px]">
                  {otherConstructions.map((column, columnIndex) => (
                    <div
                      key={`construction-column-${columnIndex}`}
                      className="flex flex-col gap-3"
                    >
                      {column.map((item, itemIndex) => (
                        <a
                          key={`construction-item-${columnIndex}-${itemIndex}`}
                          href="#"
                          className="font-normal text-[#394355] text-base leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] w-[169px]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div 
  className="absolute w-[386px] h-[132px] bottom-[23px] left-[23px] rounded-[20px]" 
  style={{ 
    background: 'linear-gradient(108.32deg, #243057 -27.58%, #374255 107.93%)' 
  }}
>
  <img
    className="w-80 h-28 mt-3 ml-[33px]"
    alt="Bessonneau hangar"
    src="/bessonneau-hangar-i01-1.png"
  />
</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
