import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";

export const DivSportPergoly4 = (): JSX.Element => {
  // Data for the service cards
  const serviceCards = [
    { title: "Компания", content: "Загородный отель" },
    { title: "Город", content: "Москва" },
    { title: "Срок", content: "1 месяц" },
    { title: "Площадь", content: "250 м2" },
  ];

  // Data for the "Сделали" section items
  const accomplishments = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus",
  ];

  // Data for the small preview images
  const previewImages = [
    "/Fc3740fa54440e5eaefe94690ddc2643-4.png",
    "/Fc3740fa54440e5eaefe94690ddc2643-4.png",
    "/Fc3740fa54440e5eaefe94690ddc2643-4.png",
    "/Fc3740fa54440e5eaefe94690ddc2643-4.png",
  ];

  return (
    <section className="w-full py-16 relative rounded-[30px] bg-[linear-gradient(108.32deg,_#243057_-27.58%,_#435575_107.93%)]">
      <div className="flex flex-col md:flex-row gap-12 ml-8">
        {/* Left column with text content */}
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div className="font-medium text-[#ffffff] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                  Более 60% становятся постоянными клиентами
                </div>
              </div>

              <div className="w-[528px] [font-family:'Raleway',Helvetica] text-4xl leading-normal">
                <span className="font-medium text-[#ffffff]">
                  Посмотрите, кто уже пользуется нашими{" "}
                </span>
                <span className="font-bold text-[#527dc5]">шатрами</span>
              </div>
            </div>

            <div className="w-[496px] font-semibold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
              До этого был шатер из китайской ткани. Через год уже испортился
              внешний вид. Ваш шатер заметно лучше выглядит
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                Задача
              </h3>
              <p className="w-[418px] font-normal text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-[#ffffff] text-base leading-6 [font-family:'Raleway',Helvetica]">
                Сделали
              </h3>
              <div className="flex flex-col gap-4">
                {accomplishments.map((text, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-6 h-[17px] top-[3px] left-0"
                        alt="Check icon"
                        src={`/GROP-${index + 4}.png`}
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="w-[358px] font-normal text-[#ffffff] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom section with review button and letter */}
          <div className="flex items-center gap-[33px] mt-12">
            <Button
              variant="outline"
              className="flex items-center gap-[15px] px-6 py-8 bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px]"
            >
              <div className="relative w-[50px] h-[50px]">
                <div className="relative w-[35px] h-[35px] top-2 left-2 bg-[url(/GROP-9.png)] bg-[100%_100%]" />
              </div>
              <span className="font-bold text-[#000000] text-base [font-family:'Raleway',Helvetica]">
                Смотреть отзыв
              </span>
            </Button>

            <div className="flex items-center gap-[18px]">
              <img
                className="relative w-[86px] h-[62px] mt-[-54.00px] mb-[-62.00px] ml-[-18.00px] backdrop-blur-[79px] object-cover"
                alt="Thank you letter"
                src="/Image-18.png"
              />
              <div className="w-[150px] font-semibold text-[#ffffff] text-base leading-5 [font-family:'Raleway',Helvetica]">
                Благодарственное письмо
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="flex flex-col gap-3 mt-6">
            <p className="w-[412px] font-normal text-[#ffffff] text-xs text-center [font-family:'Raleway',Helvetica]">
              Свяжитесь с любым из наших клиентов, чтобы спросить все, что
              захотите
            </p>
            <Button className="w-[412px] h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <span className="font-semibold text-white text-base text-center [font-family:'Raleway',Helvetica]">
                Запросить контакты
              </span>
            </Button>
          </div>
        </div>

        {/* Right column with preview images, main photo, and service cards */}
        <div className="flex flex-col">
          {/* Preview images row */}
          <div className="flex gap-4 mb-4 ml-[-20px]">
            {previewImages.map((image, index) => (
              <div 
                key={index}
                className="w-[182px] h-[120px] rounded-[10px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main image section with navigation */}
          <div className="relative w-full">
          <div className="relative w-[808px] h-[785px] -top-6.5 left-[-38px] bg-[url(/Fc3740fa54440e5eaefe94690ddc2643-4.png)] bg-cover bg-[50%_50%] rounded-[30px] overflow-hidden">
  {/* Navigation buttons */}
  <Button
    variant="outline"
    size="icon"
    className="absolute top-[349px] left-[66px] p-3 bg-white rounded-[50px]"
  >
    <ChevronLeftIcon className="h-4 w-4" />
  </Button>

  <Button
    variant="outline"
    size="icon"
    className="absolute top-[349px] left-[703px] p-3 bg-white rounded-[50px]"
  >
    <ChevronRightIcon className="h-4 w-4" />
  </Button>

  {/* Action buttons */}
  <Button
    variant="outline"
    className="h-[60px] absolute top-[633px] left-[66px] inline-flex items-center gap-2.5 pl-6 pr-3 py-3 bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px]"
  >
    <span className="font-bold text-[#000000] text-base [font-family:'Raleway',Helvetica]">
      Смотреть кейс полностью
    </span>
    <img alt="Arrow icon" src="/FRAME-4.svg" />
  </Button>

  <Button className="h-[60px] absolute top-[633px] left-[548px] inline-flex items-center gap-2.5 pl-6 pr-3 py-3 bg-[#ffffff] rounded-[50px] border-[3px] border-solid border-[#527dc5] shadow-[var(--)] backdrop-blur-[79px]">
    <span className="font-bold text-black text-base [font-family:'Raleway',Helvetica]">
      Показать еще
    </span>
    <img alt="Arrow icon" src="/FRAME-4.svg" />
  </Button>
</div>
          </div>

          {/* Service cards below the main image */}
          <div className="flex gap-4 mt-6 ml-[-38px]">
            {serviceCards.map((card, index) => (
              <Card
                key={index}
                className="w-[182px] rounded-[20px] border border-solid border-[#d3d3d3]"
              >
                <CardContent className="flex flex-col items-center justify-center h-[85px] gap-1.5 p-5">
                  <div className="font-semibold text-[#ffffff] text-base text-center leading-5 [font-family:'Raleway',Helvetica]">
                    {card.title}
                  </div>
                  <div className="font-normal text-[#ffffff] text-base text-center leading-5 [font-family:'Raleway',Helvetica]">
                    {card.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};