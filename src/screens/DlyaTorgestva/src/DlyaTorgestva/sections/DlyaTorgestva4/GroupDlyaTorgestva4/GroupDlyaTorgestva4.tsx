import { Card, CardContent } from "../../../../../../../components/ui/card";

interface FeatureCard {
  title: string;
  description: string;
  iconSrc?: string;
  iconBg?: string;
  position: string;
  width: string;
  height: string;
  isWhiteBg?: boolean;
}

export const GroupDlyaTorgestva4 = (): JSX.Element => {
  const featureCards: FeatureCard[] = [
    {
      title: "Размер",
      description: "Как подобрать правильный шатер под размер площадки, тип грунта и задач бизнеса",
      iconBg: "bg-[url(/group-9.png)] bg-[100%_100%]",
      position: "top-0 left-[181px]",
      width: "367px",
      height: "121px",
    },
    {
      title: "Долговечность",
      description: "Как сделать шатер выдерживающие нагрузки ветра, снега и дождей для вашего региона использования",
      iconSrc: "/group-10.png",
      position: "top-[297px] left-[977px]",
      width: "415px",
      height: "121px",
    },
    {
      title: "Конструкция",
      description: "Как сделать такую конструкцию, которая даст удобство легкой сборки-разборки в случае перестановки или переезда",
      iconBg: "bg-[url(/building-contruction.png)] bg-[100%_100%]",
      position: "top-[297px] left-[50px]",
      width: "415px",
      height: "121px",
    },
    {
      title: "Планировка",
      description: "Как сделать планировку учитывая потоки людей для удобного пользования: расположение столов, арки, окна, входы-выходы и прочее",
      iconSrc: "/group-11.png",
      position: "top-0 left-[847px]",
      width: "459px",
      height: "121px",
    },
    {
      title: "Климат и уют",
      description: "Продумаем расположение систем кондиционирования воздуха или отопления, чтобы обеспечить комфорт клиентам в любых погодных условиях",
      iconSrc: "/group-12.png",
      position: "top-[594px] left-[847px]",
      width: "513px",
      height: "121px",
    },
    {
      title: "Брендирование",
      description: "Сделаем все, чтобы шатер был выделяющимся с учетом бренд-стратегии без аляпистости и безвкусицы. Правильно расположим элементы: логотип, световые конструкции, флаги, занавески и другие элементы брендирования",
      iconSrc: "/group-13.png",
      position: "top-[594px] left-[71px]",
      width: "648px",
      height: "121px",
      isWhiteBg: true,
    },
  ];

  return (
    <section className="relative w-full py-[70px] px-[40px] left-[-50px]">
      <div className="relative h-[715px] w-[1342px] mx-auto">
        <img
          className="absolute w-[712px] h-[553px] top-[74px] left-[calc(50%-371px)]"
          alt="Tent with curtains"
          src="/tent-with-curtains-i08-1.png"
        />

        {featureCards.map((card, index) => (
          <Card
            key={index}
            className={`absolute ${card.position} ${card.isWhiteBg ? "bg-white" : "bg-[#ffffff99]"} rounded-[20px] overflow-hidden shadow-[0px_24px_38px_rgba(22,29,36,0.08)] backdrop-blur-[79px]`}
            style={{ width: card.width, height: card.height }}
          >
            <CardContent className="p-3.5 relative">
              <div className="inline-flex items-center gap-3">
                <div className="relative w-[92px] h-[93px] rounded-[52px] bg-[#3C6CEC]">
                  {card.iconSrc ? (
                    <div className="absolute w-[46px] h-[46px] top-[24px] left-[23px]">
                      <img className="w-full h-full" alt={card.title} src={card.iconSrc} />
                    </div>
                  ) : (
                    <div className={`absolute w-[46px] h-[46px] top-[24px] left-[23px] ${card.iconBg}`} />
                  )}
                </div>

                <div className="flex flex-col items-start gap-0.5">
                  <h3 className="font-semibold text-[#394355] text-base leading-6 [font-family:'Raleway']">
                    {card.title}
                  </h3>
                  <p 
                    className="font-normal text-[#394355] text-xs leading-5 [font-family:'Raleway']"
                    style={{ width: `calc(${card.width} - 120px)` }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};