import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "../../../../../../../components/ui/card";

export const FrameWrapperArochnye6 = (): JSX.Element => {
  // Business category cards data
  const businessCategories = [
    {
      id: 1,
      title: "Бизнесу по загородному отдыху: ",
      description: "отели, яхт-клубы, базы отдыха, парк-отели и пр.",
      imageSrc: "/00120-------1.png",
      imageAlt: "Countryside vacation business",
      imageWidth: "350px",
      imageHeight: "271px",
      imagePosition: "top-0 left-0",
    },
    {
      id: 2,
      title: "Компаниям по организации выездных мероприятий",
      description: "",
      imageSrc: "/d588110f-6d7c-4f88-8567-90f3d9164e14-------1.png",
      imageAlt: "Event organization companies",
      imageWidth: "394px",
      imageHeight: "326px",
      imagePosition: "top-0 left-0",
    },
    {
      id: 3,
      title: "Кафе, ресторанам",
      description: " и другим бизнесам по организации точек питания",
      imageSrc: "/tent-i01-1.png",
      imageAlt: "Cafes and restaurants",
      imageWidth: "362px",
      imageHeight: "222px",
      imagePosition: "top-[15px] left-0",
    },
    {
      id: 4,
      title: "Бизнесу для уличной торговли\n",
      description: "и демонстрации товаров и услуг",
      imageSrc: "/503774b4-f2ac-4d80-a16e-e0e416349220-------1.png",
      imageAlt: "Outdoor trade business",
      imageWidth: "190px",
      imageHeight: "236px",
      imagePosition: "top-px left-[50px] top-[10px]",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-9 w-full py-12">
      <div className="flex items-center justify-between w-full gap-8 flex-wrap">
        <div className="flex flex-col items-start gap-6 max-w-[777px]">
          <h2 className="text-4xl font-normal [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="font-medium text-[#232c42]">
              Делаем все, чтобы{" "}
            </span>
            <span className="font-bold text-[#527dc5]">
              ваша компания больше зарабатывала на аренде и приеме гостей
            </span>
          </h2>

          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6 flex-shrink-0">
              <CheckIcon className="absolute w-[21px] h-[17px] top-[3px] left-0.5 text-[#527dc5]" />
            </div>
            <p className="font-medium text-[#4f5d80] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
              Выгодные условия сотрудничества
            </p>
          </div>
        </div>

        <Card className="w-[351px] h-[120px] rounded-[20px] shadow-2 bg-[#527dc5] border-none">
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-3 pt-[23px] pl-[25px]">
              <h3 className="font-bold text-white text-4xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                800+ клиентов
              </h3>
              <p className="font-medium text-white text-base leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                с 2012 года по России и странам СНГ
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-start gap-6 flex-wrap">
        {businessCategories.map((category) => (
          <Card
            key={category.id}
            className="w-[318px] h-[330px] bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-[] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] relative overflow-hidden"
          >
            <CardContent className="p-0 h-full">
              <div className="absolute w-[318px] h-[204px] top-0 left-0 rounded-[20px] [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)]" />

              <div className="relative w-full h-full">
                <img
                  className={`absolute ${category.imagePosition} w-[${category.imageWidth}] h-[${category.imageHeight}] object-contain`}
                  alt={category.imageAlt}
                  src={category.imageSrc}
                />

                <div className="absolute w-[255px] top-[239px] left-[31px] font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold">{category.title}</span>
                  <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-6">
                    {category.description}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
