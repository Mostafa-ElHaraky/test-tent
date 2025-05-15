import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const Screen24 = (): JSX.Element => {
  // Product information data
  const productInfo = {
    title: {
      main: "Сложности сборки\nи разборки",
      highlight: "- исключены",
    },
    cardContent: {
      title: "Все пазы и отверстия точно подходят друг другу",
      highlightedText: "Не надо сверлить новые, чтобы собрать.",
      description:
        "Используем лазерный труборез с ЧПУ. Если вы собирали мебель с неправильными отверстиями, поймете о чем речь",
    },
    image: "/orig-------1.png",
  };

  return (
    <div className="relative w-[375px] h-[512px] bg-white">
      {/* Title section */}
      <div className="absolute w-[327px] top-[29px] left-6 font-semibold text-2xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
        <span className="text-[#232c42]">{productInfo.title.main} </span>
        <span className="text-[#527dc5]">{productInfo.title.highlight}</span>
      </div>

      {/* Image carousel section */}
      <div className="absolute w-[368px] h-[232px] top-[110px] left-px">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="flex items-center justify-center h-[232px]">
                <img
                  className="w-[327px] h-[232px] object-cover"
                  alt="Product image"
                  src={productInfo.image}
                />
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] flex items-center justify-center" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] flex items-center justify-center" />
        </Carousel>
      </div>

      {/* Information card */}
      <Card className="absolute top-[366px] left-6 w-[327px] rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-none">
        <CardContent className="p-3">
          <div className="flex flex-col w-full items-start gap-3">
            <h3 className="font-semibold text-[#242f57] text-base leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
              {productInfo.cardContent.title}
            </h3>
            <p className="text-[11px] leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="font-bold text-[#527dc5]">
                {productInfo.cardContent.highlightedText}
              </span>
              <span className="font-medium text-[#4f5d80]">
                {" "}
                {productInfo.cardContent.description}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
