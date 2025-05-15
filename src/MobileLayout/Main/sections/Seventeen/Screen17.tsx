import { Card, CardContent } from "../../../../components/ui/card";

export const Screen17 = (): JSX.Element => {
  // Data for the consequences cards
  const consequenceItems = [
    {
      id: 1,
      icon: "/group.png",
      title: "Будет постоянно пахнуть пластмассой",
      description: "при нагреве на солнце",
    },
    {
      id: 2,
      icon: "/group-1.png",
      title: "Покроется плесенью",
      description: "и начнутся процессы гниения",
    },
    {
      id: 3,
      icon: "/group-2.png",
      title: "Тент выцветет",
      description: "и станет серым, беклым и не красивым",
    },
    {
      id: 4,
      icon: "/group-3.png",
      title: "Будет невозможно отмыть",
      description: "от въевшихся пятен грязи",
    },
    {
      id: 5,
      icon: "/group-4.png",
      title: "Потрескается",
      description: "и начнет протекать прямо на головы людям",
    },
  ];

  return (
    <div className="relative w-full max-w-[375px] h-[726px] bg-white">
      <div className="flex flex-col items-start gap-6 pt-[30px] px-6">
        <div className="flex flex-col items-start gap-3">
          <h1 className="w-full font-semibold text-2xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="text-[#527dc5]">Не экономьте на ткани, </span>
            <span className="text-[#232c42]">
              чтобы через 2-3 года не пришлось заказывать новый тент
            </span>
          </h1>

          <p className="font-medium text-[#4f5d80] text-sm leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
            А это на минуточку 50% от цены всего шатра
          </p>
        </div>

        <Card className="border-none rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]">
          <CardContent className="p-4">
            <div className="flex flex-col items-start gap-9">
              <h2 className="w-full font-semibold text-[#242f57] text-base leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
                Что вас ожидает через 1-3 года от плохой ткани
              </h2>

              <div className="flex flex-wrap w-full items-start gap-[12px_12px]">
                {consequenceItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col w-[134px] items-center gap-3"
                  >
                    <div className="relative w-full h-[66px] flex justify-center">
                      <div className="relative w-[66px] h-[66px] bg-[#f2f4f7] rounded-[87px] flex items-center justify-center">
                        {item.id === 3 || item.id === 5 ? (
                          <div className="w-[30px] h-[30px] bg-[url(${item.icon})] bg-[100%_100%]" />
                        ) : (
                          <img
                            className={`${
                              item.id === 1
                                ? "w-6 h-[30px]"
                                : item.id === 2
                                  ? "w-[39px] h-[38px]"
                                  : "w-[26px] h-6"
                            }`}
                            alt="Icon"
                            src={item.icon}
                          />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <p className="font-normal text-[#4f5d80] text-[11px] text-center leading-[11px] [font-family:'Raleway',Helvetica] tracking-[0]">
                        <span className="font-semibold leading-4">
                          {item.title}{" "}
                        </span>
                        <span
                          className={`${item.id === 4 ? "font-medium" : ""} leading-4`}
                        >
                          {item.description}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
