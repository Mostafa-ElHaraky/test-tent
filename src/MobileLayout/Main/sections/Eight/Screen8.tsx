import { Card, CardContent } from "../../../../components/ui/card";

// Data for the top benefit cards
const benefitItems = [
  {
    id: 1,
    icon: "/group.png",
    title: "Разработаем проект шатра ",
    description:
      "удобный для пользования всеми гостями и неприхотливого в обслуживании",
  },
  {
    id: 2,
    icon: "/group-1.png",
    title: "Уложимся в срок",
    description: "до мероприятия или сезона",
  },
  {
    id: 3,
    icon: "/group-2.png",
    title: "Поможем увеличить посадочные места ",
    description:
      "или создать новые места для проведения мероприятий и приема гостей",
  },
  {
    id: 4,
    icon: "/group-3.png",
    title: "Выдадим сертификаты о пожарной безопасности, ",
    description: "если нужно ввести в эксплуатацию",
  },
  {
    id: 5,
    icon: "/group-4.png",
    title: "Забрендируем шатер",
    description: "для повышения узнаваемости вашей компании",
  },
  {
    id: 6,
    icon: "/group-5.png",
    title: "Разработаем сайт",
    description: "для постоянного прихода клиентов в ваш бизнес",
  },
];

// Data for the bottom feature cards
const featureItems = [
  {
    id: 1,
    icon: { type: "bg", url: "/group-6.png" },
    title: "Размер",
    description:
      "Как подобрать правильный шатер под размер площадки, тип грунта и задач бизнеса",
  },
  {
    id: 2,
    icon: {
      type: "img",
      url: "/group-7.png",
      width: "44px",
      height: "45px",
      top: "0.5px",
      left: "3px",
    },
    title: "Планировка",
    description:
      "Как сделать планировку учитывая потоки людей для удобного пользования: расположение столов, арки, окна, входы-выходы и прочее",
  },
  {
    id: 3,
    icon: {
      type: "img",
      url: "/group-8.png",
      width: "33px",
      height: "38px",
      top: "0",
      left: "0.5px",
    },
    title: "Долговечность",
    description:
      "Как сделать шатер выдерживающие нагрузки ветра, снега и дождей для вашего региона использования",
  },
  {
    id: 4,
    icon: {
      type: "img",
      url: "/group-9.png",
      width: "25px",
      height: "38px",
      top: "0",
      left: "1.5px",
    },
    title: "Климат и уют",
    description:
      "Продумаем расположение систем кондиционирования воздуха или отопления, чтобы обеспечить комфорт клиентам в любых погодных условиях",
  },
  {
    id: 5,
    icon: {
      type: "img",
      url: "/group-10.png",
      width: "46px",
      height: "45px",
      top: "1px",
      left: "0",
    },
    title: "Брендирование",
    description:
      "Сделаем все, чтобы шатер был выделяющимся с учетом бренд-стратегии без аляпистости и безвкусицы. Правильно расположим элементы: логотип, световые конструкции, флаги, занавески и другие элементы брендирования",
  },
  {
    id: 6,
    icon: { type: "bg", url: "/building-contruction.png" },
    title: "Конструкция",
    description:
      "Как сделать такую конструкцию, которая даст удобство легкой сборки-разборки в случае перестановки или переезда",
  },
];

export const Screen8 = (): JSX.Element => {
  return (
    <main className="relative w-full max-w-[375px] mx-auto bg-white">
      <section className="pt-[30px] px-6 pb-6">
        <Card className="p-[15px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-0 flex flex-col gap-3">
            {benefitItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="relative w-[60px] h-[60px] flex-shrink-0 shadow-2">
                  <div className="relative w-9 h-[38px] top-[11px] left-3">
                    <div className="relative h-[38px]">
                      <div className="absolute w-[23px] h-[23px] top-[7px] left-[7px] bg-white rounded-[11.63px]" />
                      <img
                        className="absolute w-9 h-[38px] top-0 left-0"
                        alt="Benefit icon"
                        src={item.icon}
                      />
                    </div>
                  </div>
                </div>
                <div className="font-normal text-[11px] leading-4 text-[#394355] [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold">{item.title}</span>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="px-6 flex flex-col items-center gap-5">
        <img
          className="w-[316px] h-[246px]"
          alt="Tent with curtains"
          src="/tent-with-curtains-i08-1.png"
        />

        <div className="flex flex-col items-start gap-3 w-full">
          {featureItems.map((item) => (
            <Card
              key={item.id}
              className="w-full p-3.5 bg-[#ffffff99] rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-[92px] h-[93px] rounded-[52px] flex-shrink-0">
                    <div className="relative w-[46px] h-[46px] top-6 left-[23px]">
                      {item.icon.type === "bg" ? (
                        <div
                          className={`relative ${item.id === 6 ? "w-[34px] h-[43px] top-px left-1.5" : "w-[46px] h-[46px]"} bg-[url(${item.icon.url})] bg-[100%_100%]`}
                        />
                      ) : (
                        <img
                          className={`absolute ${item.icon.width} ${item.icon.height} ${item.icon.top} ${item.icon.left}`}
                          alt="Feature icon"
                          src={item.icon.url}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col w-[194px] items-start gap-0.5">
                    <h3 className="mt-[-1.00px] font-semibold text-sm leading-6 whitespace-nowrap text-[#394355] [font-family:'Raleway',Helvetica] tracking-[0]">
                      {item.title}
                    </h3>
                    <p className="font-normal text-[11px] leading-4 text-[#394355] [font-family:'Raleway',Helvetica] tracking-[0]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};
