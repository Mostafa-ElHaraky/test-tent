import { PlayIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameByAnima1 = (): JSX.Element => {
  // Feature data for the checkmark item
  const featureData = [
    {
      text: "Не позволит влаге и грязи распространятся по полотну",
      icon: "/DOCgroup.png",
    },
  ];

  // Button card data
  const buttonCards = [
    {
      icon: (
        <div className="relative w-[35px] h-[35px] top-2 left-2 bg-[url(/DOCgroup-1.png)] bg-[100%_100%]" />
      ),
      text: "Как работает покрытие Low wick",
    },
    {
      icon: (
        <div className="relative w-[47px] h-[33px] top-[9px] left-0.5">
          <div className="relative h-[33px]">
            <div className="absolute w-[23px] h-[23px] top-[5px] left-3 bg-white rounded-[11.5px]" />
            <img
              className="absolute w-[47px] h-[33px] top-0 left-0"
              alt="Vector"
              src="/DOCvector.svg"
            />
          </div>
        </div>
      ),
      text: "Видео\nо технологии",
    },
  ];

  // Material images
  const materialImages = [
    { src: "/DOCrectangle-44.png", alt: "Rectangle" },
    { src: "/DOCrectangle-45.png", alt: "Rectangle" },
    { src: "/DOCrectangle-46.png", alt: "Rectangle" },
  ];

  return (
    <div className="w-full h-[659px] relative py-6">
      <div className="flex flex-col w-[654px] items-start gap-6">
        <h2 className="w-[530px] [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal]">
          <span className="text-[#232c42]">Запатентованное </span>
          <span className="text-[#527dc5]">покрытие тента Low wick</span>
        </h2>

        {featureData.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="relative w-6 h-6">
              <img
                className="absolute w-[17px] h-5 top-0.5 left-1"
                alt="Group"
                src={feature.icon}
              />
            </div>
            <p className="font-medium text-[#4f5d80] text-lg leading-6 w-fit [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-6 absolute top-1 left-[723px]">
        {buttonCards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col items-start gap-2.5 px-6 py-3 bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
          >
            <CardContent className="p-0">
              <div className="flex items-center gap-[15px]">
                <div className="relative w-[50px] h-[50px]">{card.icon}</div>
                <div className="w-fit [font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-base tracking-[0] leading-[normal] whitespace-pre-line">
                  {card.text}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="flex flex-col items-start gap-2.5 p-6 absolute top-[325px] left-0 rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]">
        <CardContent className="p-0">
          <div className="flex flex-col items-start gap-6">
            <h3 className="w-[609px] [font-family:'Raleway',Helvetica] font-semibold text-xl tracking-[0] leading-6">
              <span className="text-[#242f57]">Для каркаса используем </span>
              <span className="text-[#527dc5]">
                высокопрочный металл первого класса - анодированный алюминий
              </span>
            </h3>

            <p className="w-fit font-medium text-[#4f5d80] text-sm leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
              Обязательно с оцинковкой: холодной или горячей
            </p>

            <div className="flex flex-col w-[609px] items-center justify-center gap-2.5 px-3 py-1.5 bg-[#f5f6ff] rounded-[10px]">
              <div className="flex w-[577px] items-center gap-[22px]">
                <div className="w-fit text-[#6FA7FF]  [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-[46px] tracking-[0] leading-[normal] whitespace-nowrap">
                  25 лет
                </div>
                <div className="w-fit font-normal text-[#4f5d80] text-base leading-5 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-bold">Гарантия от коррозии </span>
                  <span className="[font-family:'Raleway',Helvetica] font-normal text-[#4f5d80] text-base tracking-[0] leading-5">
                    при заказе горячей оцинковки
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="absolute w-[618px] h-[394px] top-[165px] left-[723px] bg-[#e8edf7] rounded-[20px]">
        <Button
          variant="ghost"
          className="absolute w-[75px] h-[75px] top-40 left-[271px] bg-white rounded-[37.5px] p-0 flex items-center justify-center"
        >
          <PlayIcon className="w-[25px] h-[29px] text-[#527dc5]" />
        </Button>
      </div>

      <div className="absolute w-[226px] h-[125px] top-[180px] left-3">
        <div className="relative w-[266px] h-[169px] -left-5">
          {materialImages.map((image, index) => (
            <img
              key={index}
              className="absolute w-[131px] h-[169px] top-0 left-[${index * 68}px]"
              style={{ left: `${index * 68}px` }}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
