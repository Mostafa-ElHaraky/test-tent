import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const Screen18 = (): JSX.Element => {
  // Feature data
  const features = [
    {
      icon: "/group.png",
      text: "Не позволит влаге и грязи распространятся по полотну",
    },
  ];

  // Document images for carousel
  const documents = [
    { src: "/rectangle-44.png", alt: "Document 1" },
    { src: "/rectangle-45.png", alt: "Document 2" },
    { src: "/rectangle-46.png", alt: "Document 3" },
  ];

  return (
    <div className="relative w-full max-w-[375px] h-[838px] bg-white mx-auto">
      <div className="flex flex-col w-[327px] items-start gap-4 absolute top-[29px] left-6">
        <h1 className="relative w-[324px] mt-[-1.00px] font-['Raleway',Helvetica] font-semibold text-2xl tracking-[0] leading-normal">
          <span className="text-[#232c42]">Запатентованное </span>
          <span className="text-[#527dc5]">покрытие тента Low wick</span>
        </h1>

        {features.map((feature, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 relative flex-[0_0_auto]"
          >
            <div className="relative w-6 h-6">
              <img
                className="absolute w-[17px] h-5 top-0.5 left-1"
                alt="Feature icon"
                src={feature.icon}
              />
            </div>
            <p className="w-fit font-medium text-[#4f5d80] text-[11px] leading-4 whitespace-nowrap relative font-['Raleway',Helvetica] tracking-[0]">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      <div className="inline-flex flex-col items-center gap-[21px] absolute top-[143px] left-[22px]">
        {/* Video player card */}
        <Card className="relative w-[327px] h-[208.48px] bg-[#e8edf7] rounded-[20px] border-none">
          <CardContent className="p-0 h-full flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="w-[50px] h-[50px] rounded-full bg-white border-none"
            >
              <img
                className="w-4 h-[19px]"
                alt="Play button"
                src="/polygon-2.svg"
              />
            </Button>
          </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="inline-flex items-start gap-[9px] relative flex-[0_0_auto]">
          <Button
            variant="outline"
            className="inline-flex flex-col items-start gap-2.5 px-3 py-2 relative flex-[0_0_auto] bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px]"
          >
            <div className="inline-flex items-center gap-[9px] relative flex-[0_0_auto]">
              <div className="relative w-6 h-6">
                <div className="relative w-[17px] h-[17px] top-1 left-1 bg-[url(/group-1.png)] bg-[100%_100%]" />
              </div>
              <span className="relative w-[107px] mt-[-1.00px] font-['Raleway',Helvetica] font-bold text-[#232c42] text-[11px] tracking-[0] leading-normal">
                Как работает покрытие Low wick
              </span>
            </div>
          </Button>

          <Button
            variant="outline"
            className="relative w-[154px] h-[42px] bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px] p-0"
          >
            <div className="inline-flex items-center gap-[15px] relative">
              <div className="relative w-6 h-6">
                <div className="relative w-[22px] h-4 top-1 left-px">
                  <div className="relative h-4">
                    <div className="absolute w-[11px] h-[11px] top-[3px] left-1.5 bg-white rounded-[5.52px]" />
                    <img
                      className="absolute w-[22px] h-4 top-0 left-0"
                      alt="Video icon"
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <span className="w-fit mt-[-1.00px] font-bold text-[#232c42] text-[11px] leading-normal relative font-['Raleway',Helvetica] tracking-[0]">
                Видео
                <br />о технологии
              </span>
            </div>
          </Button>
        </div>

        {/* Info card */}
        <Card className="inline-flex flex-col items-start gap-2.5 p-3 relative flex-[0_0_auto] rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] border-none [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]">
          <CardContent className="p-0">
            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              <h2 className="w-[307px] mt-[-1.00px] font-semibold text-base leading-4 relative font-['Raleway',Helvetica] tracking-[0]">
                <span className="text-[#242f57] leading-[18px]">
                  Для каркаса используем{" "}
                </span>
                <span className="text-[#527dc5] leading-[18px]">
                  высокопрочный металл первого класса - анодированный алюминий
                </span>
              </h2>

              <p className="w-fit font-medium text-[#4f5d80] text-[11px] leading-4 whitespace-nowrap relative font-['Raleway',Helvetica] tracking-[0]">
                Обязательно с оцинковкой: холодной или горячей
              </p>

              <div className="flex flex-col w-[307px] items-center justify-center gap-2.5 px-3 py-1.5 relative flex-[0_0_auto] bg-[#f5f6ff] rounded-[10px]">
                <div className="flex w-[304px] items-center gap-[22px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Raleway',Helvetica] font-bold text-transparent text-4xl tracking-[0] leading-normal whitespace-nowrap">
                    25 лет
                  </div>
                  <div className="w-[166px] font-normal text-[#4f5d80] text-[11px] leading-[11px] relative font-['Raleway',Helvetica] tracking-[0]">
                    <span className="font-bold leading-4">
                      Гарантия от коррозии
                      <br />
                    </span>
                    <span className="leading-4">
                      при заказе горячей оцинковки
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Document carousel */}
        <Carousel className="relative w-[325.6px]">
          <CarouselContent className="relative w-[366px] h-[210px] -left-5">
            {documents.map((doc, index) => (
              <CarouselItem
                key={index}
                className={`absolute w-[171px] h-[210px] top-0 left-[${index * 97}px]`}
              >
                <img className="w-full h-full" alt={doc.alt} src={doc.src} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
