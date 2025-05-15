import { Card, CardContent } from "../../../../../../../components/ui/card";

export const FrameWrapperHexagonalTent7 = (): JSX.Element => {
  // Data for process steps
  const processSteps = [
    {
      number: "01",
      title: "Сообщаете пожелания и задачи",
      description:
        "Эксперты помогут определиться с выбором модели и оснащения под ваши задачи. Проведут расчет стоимости, сроков изготовления и доставки",
      images: [
        {
          src: "/checklist-------1.png",
          alt: "Checklist",
          className: "w-[171px] h-[175px] absolute top-[18px] left-[229px]",
        },
        {
          src: "/felt-tip-pen--10-------1.png",
          alt: "Felt tip pen",
          className:
            "w-[105px] h-[105px] absolute top-[98px] left-[305px] object-cover",
        },
      ],
    },
    {
      number: "02",
      title: "Создание 3Д модели",
      description: (
        <>
          а 1-2 часа готовим 3D модель будущей конструкции с расчетом стоимости.
          <br />
          <br />
          <span className="italic text-[#527dc5]">
            *Отправляем КП со сметой
          </span>
        </>
      ),
      images: [
        {
          src: "/tent-i03-1.png",
          alt: "Tent",
          className: "w-[252px] h-[185px] absolute top-0 left-[168px]",
        },
      ],
    },
    {
      number: "03",
      title: "Геодезия и проектирование",
      description: (
        <>
          Специалист производит топографическую съемку на объекте для
          правильного расположения шатра. 1 день.
          <br />
          <span className="font-semibold text-[#527dc5]">еще....</span>
          <br />
          <br />
          Проектируем модель шатра{" "}
          <span className="font-semibold text-[#527dc5]">еще....</span>
          <br />
          нагрузок и грунта - 8 человек.
          <br />
          <br />
          Получаем чертежи, технический паспорт
          <br />и отгрузочную ведомость. 5-7 дней
        </>
      ),
      images: [
        {
          src: "/tent-i03-1-1.png",
          alt: "Tent",
          className: "w-[188px] h-[218px] absolute top-0 left-[209px]",
        },
      ],
    },
  ];

  return (
<section 
  className="flex flex-wrap justify-center w-[1339px] h-[434px] gap-[20px] py-8 mx-auto mt-[1000px]"
>
<section className="w-full px-12 mt-8">
        <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0]">
          <span className="text-[#232c42]">Этапы работы при создании </span>
          <span className="text-[#527dc5]">шатра под ключ</span>
        </h2>
      </section>
        {processSteps.map((step, index) => (
        <Card
          key={index}
          className="relative w-[433px] h-[434px] rounded-[20px] overflow-hidden shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]"
        >
          <CardContent className="p-0 h-full">
            <div className="relative w-full h-full bg-white rounded-[20px]">
              {/* Circular background for step number */}
              <div className="absolute w-[216px] h-[216px] top-[-63px] left-[-61px] bg-[#dee4f066] rounded-[108px]" />

              {/* Step number with gradient */}
              <div className="absolute top-[44px] left-[32px] [text-shadow:0px_4px_20px_#0000001a] [background:linear-gradient(173deg,rgba(35,44,66,1)_0%,rgba(91,100,122,1)_35%,rgba(35,44,66,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-transparent text-[50px] tracking-[0] leading-6 whitespace-nowrap">
                {step.number}
              </div>

              {/* Images */}
              {step.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  className={image.className}
                  alt={image.alt}
                  src={image.src}
                />
              ))}

              {/* Text content */}
              <div className="absolute bottom-[25px] left-[25px] flex flex-col items-start gap-[18px] max-w-[385px]">
                <h3 className="[font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-xl tracking-[0] leading-6">
                  {step.title}
                </h3>
                <div className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-lg tracking-[0] leading-6">
                  {step.description}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
