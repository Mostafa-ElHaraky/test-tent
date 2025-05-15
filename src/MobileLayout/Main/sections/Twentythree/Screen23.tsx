import { Card, CardContent } from "../../../../components/ui/card";

export const Screen23 = (): JSX.Element => {
  // Data for cards to enable mapping
  const cards = [
    {
      id: 1,
      image: "/paper-a4-10-ps-------1.png",
      imageAlt: "Technical manual",
      imageWidth: "205px",
      imageHeight: "230px",
      imageLeft: "60px",
      mainText: (
        <>
          <span className="font-semibold leading-4">
            Прикладываем технический паспорт{" "}
          </span>
          <span className="leading-4">
            с понятной инструкцией на 30-40 листов для самостоятельной сборк
          </span>
          <span className="font-semibold leading-4">и</span>
        </>
      ),
      noteText: (
        <>
          <span className="italic text-[#eb3c3c] leading-4">*</span>
          <span className="italic text-[#394355] leading-4">
            Описан каждый этап. Собирается легко, как детский конструктор
          </span>
        </>
      ),
      height: "297px",
    },
    {
      id: 2,
      image: "/paper-a4-10-ps-------1-1.png",
      imageAlt: "Assembly team",
      imageWidth: "311px",
      imageHeight: "244px",
      imageLeft: "7px",
      mainText: (
        <>
          <span className="font-semibold">Можем собрать сами </span>
          <span className="font-normal">
            или прислать бригаду для тех. надзора сборки под нашим контролем
          </span>
        </>
      ),
      noteText: (
        <>
          <span className="italic text-[#eb3c3c] leading-4">*</span>
          <span className="italic text-[#394355] leading-4">
            *Возникнут вопросы в ходе сборки?
            <br />
          </span>
          <span className="font-semibold text-[#527dc5] leading-[0.1px] underline">
            Звоните - ответим
          </span>
        </>
      ),
      height: "297px",
    },
    {
      id: 3,
      image: "/paper-a4-10-ps-------1-2.png",
      imageAlt: "Foundation",
      imageWidth: "185px",
      imageHeight: "162px",
      imageLeft: "71px",
      mainText: (
        <>
          <span className="font-semibold">
            Не требуется специального фундамента,{" "}
          </span>
          <span className="font-normal">
            установка на любой земляной поверхности или на сваи
          </span>
        </>
      ),
      noteText: null,
      height: "248px",
      extraElement: (
        <div className="absolute w-[57px] h-[57px] top-[52px] left-[104px] bg-[url(/group.png)] bg-[100%_100%]" />
      ),
    },
  ];

  return (
    <div className="relative w-[375px] h-[1015px] bg-white">
      {/* Header section */}
      <header className="inline-flex flex-col items-start gap-[60px] absolute top-[30px] left-6">
        <div className="inline-flex flex-col items-start gap-3 relative">
          <div className="inline-flex flex-col items-start gap-6 relative">
            <h1 className="w-fit mt-[-1.00px] font-medium text-2xl leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-[#527dc5]">Легкость</span>
              <span className="text-[#232c42]"> монтажа</span>
            </h1>
          </div>
          <p className="w-fit font-semibold text-[#394355] text-sm leading-4 whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
            не нужно спец. техники и особых навыков
          </p>
        </div>
      </header>

      {/* Cards section */}
      <section className="inline-flex flex-col items-start gap-3.5 absolute top-[115px] left-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="relative w-[327px] h-[${card.height}] bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
          >
            <CardContent className="p-0">
              <div className="relative h-[301px] top-[-33px]">
                <div className="absolute w-[327px] h-[204px] top-[33px] left-0 rounded-[20px] [background:linear-gradient(180deg,rgba(245,245,245,1)_0%,rgba(232,238,248,0)_100%)]" />

                <div
                  className={`${card.id === 3 ? "top-[172px]" : card.id === 2 ? "top-[205px]" : "top-[189px]"} inline-flex flex-col items-start gap-3 absolute left-6`}
                >
                  <div
                    className={`${card.id === 3 ? "w-[248px]" : "w-[275px]"} mt-[-1.00px] font-normal text-[#394355] text-[11px] leading-4 relative [font-family:'Raleway',Helvetica] tracking-[0]`}
                  >
                    {card.mainText}
                  </div>

                  {card.noteText && (
                    <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2.5 relative flex-[0_0_auto] bg-[#f9f9f9] rounded-[10px]">
                      <div className="w-[254px] mt-[-1.00px] font-normal text-[11px] leading-[11px] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                        {card.noteText}
                      </div>
                    </div>
                  )}
                </div>

                <img
                  className={`absolute w-[${card.imageWidth}] h-[${card.imageHeight}] top-0 left-[${card.imageLeft}]`}
                  alt={card.imageAlt}
                  src={card.image}
                />

                {card.extraElement}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};
