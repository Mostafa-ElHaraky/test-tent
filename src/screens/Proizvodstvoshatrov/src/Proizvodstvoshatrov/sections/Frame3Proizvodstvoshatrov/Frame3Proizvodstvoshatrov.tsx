import { Card, CardContent } from "../../../../../../components/ui/card";

export const Frame3Proizvodstvoshatrov = (): JSX.Element => {
  // Data for product quality cards
  const qualityCards = [
    {
      id: 1,
      icon: "/group-17.png",
      title: "Тент не сгниет и не будет попадать вода через швы",
      description: "благодаря запатентованному покрытию Low wick",
      width: "544px",
    },
    {
      id: 2,
      icon: "/clip-path-group.png",
      title: "Выдерживают самые суровые условия эксплуатации",
      description:
        "Ветер до 35м/c, снег от 60 до 380 кг/м2. Ваша компания не терпит убытки и упущенную прибыль из-за непогоды",
      width: "772px",
    },
    {
      id: 3,
      icon: "/group-18.png",
      title: "Легкий монтаж",
      description:
        "Самостоятельно с пошаговой подробной инструкции или нашими силами за 1-3 часа",
      width: "544px",
      iconClass: "w-[38px] h-[46px] top-0 left-1",
    },
    {
      id: 4,
      icon: "/group-19.png",
      title: "Быстрая окупаемость",
      description:
        "Не нужно тратиться на дорогой фундамент, можно использовать круглый год в любую погоду",
      width: "768px",
      iconClass: "w-[52px] h-10 top-1.5 left-0",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-[45px] w-full py-8">
      <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0]">
        <span className="text-[#527dc5]">Самые важные </span>
        <span className="text-[#232c42]">качества нашей продукции</span>
      </h2>

      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-wrap gap-6 w-full">
          {qualityCards.slice(0, 2).map((card) => (
            <Card
              key={card.id}
              className="rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%] flex-1"
              style={{ maxWidth: card.width }}
            >
              <CardContent className="p-0">
                <div className="flex gap-[23px] p-[30px] items-center">
                  <div className="relative w-[90px] h-[90px] flex-shrink-0">
                    <div className="h-[90px] rounded-[45px] flex items-center justify-center">
                      {card.id === 1 ? (
                        <div className="relative w-[46px] h-[46px] bg-[url(/group-17.png)] bg-[100%_100%]" />
                      ) : (
                        <div className="relative w-12 h-12 bg-[url(/clip-path-group.png)] bg-[100%_100%]" />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-4">
                    <h3 className="font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                      {card.title}
                    </h3>
                    <p className="font-normal text-black text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 w-full">
          {qualityCards.slice(2, 4).map((card) => (
            <Card
              key={card.id}
              className="rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%] flex-1"
              style={{ maxWidth: card.width }}
            >
              <CardContent className="p-0">
                <div className="flex gap-[23px] p-[30px] items-center">
                  <div className="relative w-[90px] h-[90px] flex-shrink-0">
                    <div className="h-[90px] rounded-[45px] flex items-center justify-center">
                      {card.id === 3 ? (
                        <div className="relative w-[46px] h-[46px]">
                          <img
                            className={card.iconClass}
                            alt="Group"
                            src={card.icon}
                          />
                        </div>
                      ) : (
                        <div className="relative w-[52px] h-[52px]">
                          <img
                            className={card.iconClass}
                            alt="Group"
                            src={card.icon}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-4">
                    <h3 className="font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                      {card.title}
                    </h3>
                    <p className="font-normal text-black text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
