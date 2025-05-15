import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for the process cards
const processCards = [
  {
    id: "01",
    title: "Сообщаете пожелания и задачи",
    description:
      "Эксперты помогут определиться с выбором модели и оснащения под ваши задачи. Проведут расчет стоимости, сроков изготовления и доставки",
    image: "/checklist-------1.png",
    additionalImage: "/felt-tip-pen--10-------1.png",
  },
  {
    id: "02",
    title: "Создание 3Д модели",
    description:
      "1-2 часа готовим 3D модель будущей конструкции с расчетом стоимости.",
    note: "*Отправляем КП со сметой",
    image: "/tent-i03-1.png",
  },
];

export const Screen4 = (): JSX.Element => {
  return (
    <div className="relative w-[375px] h-[652px] bg-white overflow-hidden">
      {/* Header section */}
      <header className="inline-flex flex-col items-start gap-3 absolute top-[30px] left-6">
        <h1 className="w-[327px] mt-[-1.00px] [font-family:'Raleway',Helvetica] text-[22px] leading-[normal] tracking-[0]">
          <span className="font-semibold text-[#232c42]">
            У нас вы можете получить
          </span>{" "}
          <span className="font-bold text-[#527dc5]">
            полный комплекс работ под ключ по созданию тентовых конструкций
          </span>
        </h1>

        <p className="w-fit font-medium text-[#394355] text-[11px] leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
          Объем работы настолько большой, что его можно
          <br />
          сравнить со строительством большого дома
        </p>
      </header>

      {/* Process cards */}
      <div className="inline-flex items-start gap-3 absolute top-52 left-6">
        {processCards.map((card, index) => (
          <Card
            key={index}
            className="relative w-[327px] h-[328px] rounded-[20px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px]"
          >
            <CardContent className="p-0">
              <div className="relative w-[411px] h-[418px] top-[-90px] left-[-84px]">
                <div className="absolute w-[328px] h-[328px] top-[90px] left-[83px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px]" />

                {/* Card content */}
                <div className="flex flex-col w-[266px] items-start gap-3 absolute top-[298px] left-[108px]">
                  <h2 className="w-[356px] mt-[-1.00px] mr-[-90.00px] font-bold text-[#232c42] text-base leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
                    {card.title}
                  </h2>

                  <div className="w-[257px] font-normal text-[#394355] text-[11px] leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
                    {card.description}
                    {card.note && (
                      <>
                        <br />
                        <br />
                        <span className="italic text-[#ff7373]">*</span>
                        <span className="italic text-[#527dc5]">
                          {card.note.substring(1)}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Number circle */}
                <div className="absolute w-[218px] h-[216px] top-0 left-0">
                  <div className="relative w-[216px] h-[216px] bg-[#dee4f066] rounded-[108px]">
                    <div className="absolute top-[124px] left-[108px] [text-shadow:0px_4px_20px_#0000001a] [background:linear-gradient(173deg,rgba(35,44,66,1)_0%,rgba(91,100,122,1)_35%,rgba(35,44,66,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-transparent text-[50px] tracking-[0] leading-6 whitespace-nowrap">
                      {card.id}
                    </div>
                  </div>
                </div>

                {/* Card images */}
                {card.id === "01" && (
                  <>
                    <img
                      className="absolute w-[171px] h-[175px] top-[108px] left-[230px]"
                      alt="Checklist"
                      src="/checklist-------1.png"
                    />
                    <img
                      className="absolute w-[105px] h-[105px] top-[188px] left-[306px] object-cover"
                      alt="Felt tip pen"
                      src="/felt-tip-pen--10-------1.png"
                    />
                  </>
                )}

                {card.id === "02" && card.image && (
                  <img
                    className="absolute w-[189px] h-[139px] top-[108px] left-[230px]"
                    alt="Tent"
                    src={card.image}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="inline-flex items-start gap-6 absolute top-[566px] left-[119px]">
        <Button
          variant="outline"
          size="icon"
          className="relative w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] p-0"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="relative w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] p-0"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
