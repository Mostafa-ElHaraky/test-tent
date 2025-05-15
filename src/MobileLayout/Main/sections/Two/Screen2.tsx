import { Card, CardContent } from "../../../../components/ui/card";

export const Screen2 = (): JSX.Element => {
  // Data for feature cards
  const featureCards = [
    {
      id: 1,
      image: "/blue-water-splashing-alone--9-------1.png",
      title: {
        regular: "Минимум ",
        highlighted: "15 лет",
      },
      description:
        "будут иметь презентабельный вид\nдля аренды и проведения мероприятий",
    },
    {
      id: 2,
      image: "/blue-water-splashing-alone--9-------1-1.png",
      title: {
        highlighted: "Выдержат самые суровые условия",
        regular: " эксплуатации",
      },
      description:
        "Ветер до 35м/c, снег от 60 до 380 кг/м2. Ваша компания не терпит убытки и упущенную прибыль из-за непогоды",
    },
    {
      id: 3,
      image: "/blue-water-splashing-alone--9-------1-2.png",
      title: {
        regular: "Достаточно ",
        highlighted: "мыть 1 раз в год",
      },
      description:
        "Для сохранения идеального внешнего вида. Не въедается грязь и пыль",
    },
    {
      id: 4,
      image: "/blue-water-splashing-alone--9-------1-3.png",
      title: {
        highlighted: "Быстрая",
        regular: " окупаемость",
      },
      description:
        "Не нужно тратиться на дорогой фундамент, можно использовать круглый год в любую погоду",
    },
    {
      id: 5,
      image: "/blue-water-splashing-alone--9-------1-4.png",
      title: {
        highlighted: "Быстрый",
        regular: " монтаж",
      },
      description:
        "Самостоятельно по подробной инструкции или нашими силами за 1-3 часа. И ваш бизнес уже укомплектован новым местом приема людей",
    },
  ];

  // Data for warranty card
  const warrantyItems = [
    {
      id: 1,
      years: "5 лет",
      description: "на конструкцию",
    },
    {
      id: 2,
      years: "10 лет",
      description: "на ткань",
    },
    {
      id: 3,
      years: "50 лет",
      description: "а сварные швы",
    },
    {
      id: 4,
      years: "25 лет",
      description: "на отсутствие корозии",
    },
  ];

  return (
    <div className="relative bg-white max-w-[375px] min-h-[980px]">
      <div className="flex flex-col items-start gap-2 p-6">
        {featureCards.map((card) => (
          <Card
            key={card.id}
            className="relative w-full h-[130px] rounded-[30px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%] overflow-hidden"
          >
            <CardContent className="p-0 h-full">
              <div className="flex h-full">
                <div className="w-[94px] h-full rounded-[30px_0px_0px_30px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Feature illustration"
                    src={card.image}
                  />
                </div>
                <div className="flex flex-col w-[211px] items-start gap-3 p-[19px_0_0_18px]">
                  <div className="font-bold text-sm leading-4 font-['Raleway',Helvetica]">
                    <span className="text-[#232c42]">{card.title.regular}</span>
                    <span className="text-[#527dc5]">
                      {card.title.highlighted}
                    </span>
                  </div>
                  <div className="font-normal text-[11px] leading-4 text-[#394355] font-['Raleway',Helvetica]">
                    {card.description}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="relative w-full h-[242px] bg-[#fffffff2] rounded-[20px] overflow-hidden border-[3px] border-solid border-white shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%]">
          <CardContent className="p-0 h-full relative">
            <div className="absolute top-[26px] left-[25px] font-bold text-base leading-normal whitespace-nowrap font-['Raleway',Helvetica]">
              <span className="text-[#527dc5]">Честные</span>
              <span className="text-[#232c42]"> гарантии</span>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-[68px] ml-[25px]">
              {warrantyItems.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-start gap-1.5"
                >
                  <div className="font-bold text-[#232c42] text-3xl leading-normal whitespace-nowrap font-['Raleway',Helvetica]">
                    {item.years}
                  </div>
                  <div className="font-normal text-[#394355] text-[11px] leading-normal whitespace-nowrap font-['Raleway',Helvetica]">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-4 mt-[159px] ml-[25px] absolute">
              {warrantyItems.slice(2, 4).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-start gap-1.5"
                >
                  <div className="font-bold text-[#232c42] text-3xl leading-normal whitespace-nowrap font-['Raleway',Helvetica]">
                    {item.years}
                  </div>
                  <div className="font-normal text-[#394355] text-[11px] leading-normal whitespace-nowrap font-['Raleway',Helvetica]">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
