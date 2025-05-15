import { Card, CardContent } from "../../../../components/ui/card";

export const Screen10 = (): JSX.Element => {
  // Data for guarantee items
  const guaranteeItems = [
    {
      years: "5 лет",
      description: "на конструкцию",
    },
    {
      years: "10 лет",
      description: "на ткань",
    },
    {
      years: "50 лет",
      description: "а сварные швы",
    },
    {
      years: "25 лет",
      description: "на отсутствие корозии",
    },
  ];

  // Data for feature items
  const featureItems = [
    {
      imageSrc: "/5647818-------1.png",
      imageAlt: "Element",
      title: "Выдаем документы:",
      description:
        " договор, акт доставки и выполненных работ, паспорт, инструкция, сертификаты и еще более 10 документов",
    },
    {
      imageSrc: "/m011t0367-d-gold-coin-06july22-------1.png",
      imageAlt: "D gold",
      title: "Работаем с любыми видами бизнеса и методами оплаты: ",
      description: "ИП, ООО, НДС, счета, безнал, карты и пр.",
    },
    {
      imageSrc: "/lock--1-------1.png",
      imageAlt: "Lock",
      title: "Не разглашаем",
      description: "конфиденциальные данные",
    },
  ];

  return (
    <main className="relative w-full max-w-[375px] h-[770px] bg-white mx-auto">
      <section className="flex flex-col items-start gap-[30px] pt-[30px] px-6">
        {/* Header section */}
        <header className="flex flex-col items-start gap-4">
          <h1 className="w-full font-semibold text-2xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="text-[#527dc5]">
              Заключаем договор
              <br />
            </span>
            <span className="text-[#232c42]">
              с гарантиями сроков, цены и качества
            </span>
          </h1>

          <p className="font-medium text-[#4f5d80] text-base leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
            Фиксируем их и не меняем
          </p>
        </header>

        {/* Features section */}
        <section className="flex flex-col items-start gap-3 w-full">
          {featureItems.map((item, index) => (
            <div key={index} className="flex items-center gap-[29px] w-full">
              <div className="relative w-[75px] h-[75px] flex-shrink-0">
                {index !== 2 ? (
                  <div className="relative w-full h-full">
                    <div className="absolute w-[75px] h-[75px] rounded-[52px] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                    <div className="relative w-[134px] h-[164px] -top-3.5 -left-6">
                      <img
                        className="absolute w-full h-full top-0 left-0"
                        alt={item.imageAlt}
                        src={item.imageSrc}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-[75px] rounded-[52px] shadow-2 relative w-[75px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <img
                      className="absolute w-[42px] h-[68px] top-0 left-[17px]"
                      alt={item.imageAlt}
                      src={item.imageSrc}
                    />
                  </div>
                )}
              </div>

              <div className="w-[220px] font-normal text-[#394355] text-[11px] leading-[11px] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-semibold leading-4">{item.title}</span>
                <span className="leading-4">{item.description}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Guarantees card */}
        <Card className="w-full max-w-[327px] h-auto bg-[#fffffff2] rounded-[20px] overflow-hidden border-[3px] border-solid border-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-3 p-[29px_25px]">
              <h2 className="font-bold text-base leading-normal whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">Честные</span>
                <span className="text-[#232c42]"> гарантии</span>
              </h2>

              <p className="w-[241px] font-normal text-[#394355] text-[11px] leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
                99% клиентов не воспользовались, но даем для вашего спокойствия
              </p>

              <div className="grid grid-cols-2 gap-x-[39px] gap-y-[30px] w-full mt-2">
                {guaranteeItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-1.5"
                  >
                    <span className="[text-shadow:0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-transparent text-3xl tracking-[0] leading-normal whitespace-nowrap">
                      {item.years}
                    </span>
                    <span className="font-normal text-[#394355] text-[11px] leading-normal whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};
