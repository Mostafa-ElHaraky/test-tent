import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const ServiceFeaturesSection = (): JSX.Element => {
  return (
<div className="w-[1314px] h-[352px] absolute top-[-298px] left-[48px]">
<div className="flex flex-col w-full items-start gap-6 mb-6">
        <h2 className="w-full font-['Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-normal">
          <span className="text-[#232c42]">Сложности сборки и разборки </span>
          <span className="text-[#527dc5]">- исключены</span>
        </h2>
      </div>

      <div className="flex flex-row gap-8 justify-between">
      <Card className="w-[542px] h-[156px] absolute top-[196px] rounded-[16px] overflow-hidden shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(158px)_brightness(100%)] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]">
  <CardContent className="p-[24px]">
    <div className="flex flex-col w-full items-start gap-[10px]">
      <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-xl tracking-[0] leading-6">
        Все пазы и отверстия точно подходят друг другу
      </h3>

      <p className="w-full font-['Raleway',Helvetica] text-sm tracking-[0] leading-5">
        <span className="font-bold text-[#527dc5]">
          Не надо сверлить новые, чтобы собрать.
        </span>
        <span className="font-medium text-[#4f5d80]">
          {" "}
          Используем лазерный труборез с ЧПУ. Если вы собирали мебель с
          неправильными отверстиями, поймете о чем речь
        </span>
      </p>
    </div>
  </CardContent>
</Card>

<div className="relative w-[517px] h-[366px] left-[713px] rounded-[20px] overflow-hidden">
<Carousel className="w-full h-full">
  <CarouselContent>
    <CarouselItem>
      <img
        className="w-full h-full object-cover rounded-[20px]"
        alt="Металлическая конструкция"
        src="/orig-------1.png"
      />
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_#207CFE66] p-0 border-none bg-[linear-gradient(180deg,#73A8FF_0%,#6FA7FF_36.5%,#3C6CEC_100%)] flex items-center justify-center" />
  <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_#207CFE66] p-0 border-none bg-[linear-gradient(180deg,#73A8FF_0%,#6FA7FF_36.5%,#3C6CEC_100%)] flex items-center justify-center" />
</Carousel>
</div>
      </div>
    </div>
  );
};
