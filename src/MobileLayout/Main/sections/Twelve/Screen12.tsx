import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const Screen12 = (): JSX.Element => {
  // Data for the "Сделали" section
  const accomplishments = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
  ];

  // Data for the info cards
  const infoCards = [
    { title: "Компания", value: "Загородный отель" },
    { title: "Город", value: "Москва" },
    { title: "Срок", value: "1 месяц" },
    { title: "Площадь", value: "250 м2" },
  ];

  return (
    <div className="flex flex-col w-full max-w-[375px] bg-white mx-auto">
      <div className="flex flex-col gap-6 p-6">
        {/* Header section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-3">
              <span className="font-medium text-sm text-[#4f5d80] font-['Raleway',Helvetica]">
                Более 60% становятся постоянными клиентами
              </span>
            </div>

            <h1 className="text-2xl font-['Raleway',Helvetica]">
              <span className="font-medium text-[#232c42]">
                Посмотрите, кто уже пользуется нашими{" "}
              </span>
              <span className="font-bold text-[#527dc5]">шатрами</span>
            </h1>
          </div>

          <p className="text-sm font-semibold text-[#394355] font-['Raleway',Helvetica] leading-4">
            До этого был шатер из китайской ткани. Через год уже испортился
            внешний вид. Ваш шатер заметно лучше выглядит
          </p>
        </div>

        {/* Task and accomplishments section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-base font-bold text-[#394355] font-['Raleway',Helvetica] leading-6">
              Задача
            </h2>
            <p className="text-[11px] text-[#394355] font-['Raleway',Helvetica] leading-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-base font-bold text-[#394355] font-['Raleway',Helvetica] leading-6">
              Сделали
            </h2>

            <div className="flex flex-col gap-4">
              {accomplishments.map((text, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-6 h-6 relative">
                    <img
                      className="w-6 h-[17px] absolute top-[3px] left-0"
                      alt="Checkmark"
                      src={`/group${index === 0 ? "" : `-${index + 1}`}.png`}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[11px] text-[#394355] font-['Raleway',Helvetica] leading-4">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial and carousel section */}
      <div className="flex flex-col gap-6 px-6 mt-6">
        <div className="flex items-center gap-3">
          <div className="flex items-start gap-[11px]">
            <img
              className="relative w-[109px] h-[110px] mt-[-14px] mb-[-62px] ml-[-25px] backdrop-blur-[79px] object-cover"
              alt="Testimonial letter"
              src="/image-18.png"
            />
            <span className="text-[11px] font-semibold text-[#394355] font-['Raleway',Helvetica] leading-4">
              Благодарственное письмо
            </span>
          </div>

          <Button
            variant="outline"
            className="flex items-center gap-2.5 px-3 py-2 rounded-[50px] border-[3px] shadow-[var(--)] backdrop-blur-[79px]"
          >
            <div className="w-8 h-8 relative">
              <div className="w-[22px] h-[22px] absolute top-[5px] left-[5px] bg-[url(/group-3.png)] bg-[100%_100%]" />
            </div>
            <span className="text-[11px] font-bold text-[#232c42] font-['Raleway',Helvetica]">
              Смотреть отзыв
            </span>
          </Button>
        </div>

        <div className="relative w-full h-[316px]">
          <Carousel className="w-[375px] h-[392px] -ml-6 -mt-3.5">
            <CarouselContent>
              <CarouselItem>
                <div className="w-full h-[392px] bg-[url(/fc3740fa54440e5eaefe94690ddc2643-4.png)] bg-cover bg-center" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute top-[152px] left-[35px] p-3 bg-white rounded-[50px] -rotate-180">
              <div className="w-[15px] h-[15px] relative">
                <img
                  className="absolute w-2 h-[15px] top-0 left-[5px] rotate-180"
                  alt="Previous"
                  src="/group-4.png"
                />
              </div>
            </CarouselPrevious>
            <CarouselNext className="absolute top-[152px] right-[47px] p-3 bg-white rounded-[50px]">
              <div className="w-[15px] h-[15px] relative">
                <img
                  className="absolute w-2 h-[15px] top-0 left-[5px]"
                  alt="Next"
                  src="/group-5.png"
                />
              </div>
            </CarouselNext>
          </Carousel>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-2 gap-[19px]">
          {infoCards.map((card, index) => (
            <Card
              key={index}
              className="w-full h-[85px] rounded-[20px] border border-solid border-[#d3d3d3]"
            >
              <CardContent className="flex flex-col items-center justify-center h-full p-5 gap-1.5">
                <span className="font-semibold text-sm text-[#394355] text-center font-['Raleway',Helvetica] leading-4">
                  {card.title}
                </span>
                <span className="text-sm text-[#394355] text-center font-['Raleway',Helvetica] leading-4">
                  {card.value}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-between pl-6 pr-3 py-3 rounded-[50px] border-[3px] shadow-[var(--)] backdrop-blur-[79px]"
          >
            <span className="font-bold text-base text-[#232c42] font-['Raleway',Helvetica]">
              Смотреть кейс полностью
            </span>
            <img alt="Arrow right" src="/frame-44.svg" />
          </Button>

          <Button className="w-full flex items-center justify-between pl-6 pr-3 py-3 bg-[#232c42] rounded-[50px] border-[3px] border-[#527dc5] shadow-[var(--)] backdrop-blur-[79px]">
            <span className="font-bold text-base text-white font-['Raleway',Helvetica]">
              Показать еще
            </span>
            <img alt="Arrow right" src="/frame-44.svg" />
          </Button>
        </div>
      </div>

      {/* Footer section */}
      <div className="flex flex-col gap-3 px-6 mt-6">
        <p className="text-[11px] text-[#394355] text-center font-['Raleway',Helvetica]">
          Свяжитесь с любым из наших клиентов, чтобы спросить все, что захотите
        </p>

        <Button className="w-full h-[68px] rounded-2xl shadow-2 bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
          <span className="font-semibold text-base text-white text-center font-['Raleway',Helvetica]">
            Запросить контакты
          </span>
        </Button>
      </div>
    </div>
  );
};
