import { Card, CardContent } from "../../../../components/ui/card";

// Define data for business category cards
const businessCategories = [
  {
    id: 1,
    title: "Бизнесу по загородному отдыху:",
    description: "отели, яхт-клубы, базы отдыха, парк-отели и пр.",
    image: "/00120-------1.png",
    imageWidth: "350px",
    imageHeight: "271px",
    imageTop: "0",
    imageLeft: "0",
  },
  {
    id: 2,
    title: "Компаниям по организации выездных мероприятий",
    description: "",
    image: "/d588110f-6d7c-4f88-8567-90f3d9164e14-------1.png",
    imageWidth: "375px",
    imageHeight: "326px",
    imageTop: "0",
    imageLeft: "0",
  },
  {
    id: 3,
    title: "Кафе, ресторанам",
    description: " и другим бизнесам по организации точек питания",
    image: "/tent-i01-1.png",
    imageWidth: "362px",
    imageHeight: "222px",
    imageTop: "15px",
    imageLeft: "0",
  },
  {
    id: 4,
    title: "Бизнесу для уличной торговли",
    description: "и демонстрации товаров и услуг",
    image: "/503774b4-f2ac-4d80-a16e-e0e416349220-------1.png",
    imageWidth: "236px",
    imageHeight: "236px",
    imageTop: "1px",
    imageLeft: "41px",
  },
];

export const Screen7 = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[375px] h-[1713px] bg-white mx-auto">
      {/* Header section */}
      <div className="inline-flex flex-col items-start gap-3 absolute top-[30px] left-6">
        <div className="relative w-[313px] mt-[-1.00px] font-normal text-2xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
          <span className="font-medium text-[#232c42]">Делаем все, чтобы </span>
          <span className="font-bold text-[#527dc5]">
            ваша компания больше зарабатывала на аренде и приеме гостей
          </span>
        </div>

        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <div className="relative w-6 h-6">
            <img
              className="absolute w-[21px] h-[17px] top-[3px] left-0.5"
              alt="Group"
              src="/group.png"
            />
          </div>

          <div className="relative w-fit font-medium text-[#4f5d80] text-[11px] leading-4 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
            Выгодные условия сотрудничества
          </div>
        </div>
      </div>

      {/* Clients card */}
      <Card className="absolute w-[327px] h-[101px] top-[202px] left-6 rounded-[20px] shadow-2 border-none">
        <CardContent className="flex flex-col w-[274px] items-start gap-3 relative top-[23px] left-[26px] p-0">
          <div className="relative w-fit mt-[-1.00px] font-bold text-white text-2xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
            800+ клиентов
          </div>

          <div className="relative w-fit font-medium text-white text-sm leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
            с 2012 года по России и странам СНГ
          </div>
        </CardContent>
      </Card>

      {/* Business categories section */}
      <div className="inline-flex flex-col items-start gap-3 absolute top-[327px] left-7">
        {businessCategories.map((category) => (
          <Card
            key={category.id}
            className="relative w-[318px] h-[330px] bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
          >
            <CardContent className="p-0 h-full">
              <div className="absolute w-[318px] h-[204px] top-0 left-0 rounded-[20px] [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)]" />

              <div className="absolute w-[255px] top-[239px] left-[31px] font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-semibold">{category.title} </span>
                <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-6">
                  {category.description}
                </span>
              </div>

              <img
                className={`absolute w-[${category.imageWidth}] h-[${category.imageHeight}] top-[${category.imageTop}] left-[${category.imageLeft}] ${category.id === 4 ? "backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] object-cover" : ""}`}
                alt={category.title}
                src={category.image}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
