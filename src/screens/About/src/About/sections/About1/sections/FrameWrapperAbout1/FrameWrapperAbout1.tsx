import { Badge } from "../../../../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../../../../components/ui/card";

export const FrameWrapperAbout1 = (): JSX.Element => {
  return (
    <div className="relative top-[200px] left-[40px] ">
    <div className="flex flex-col md:flex-row items-start gap-[170px] w-full py-8">
      <div className="flex flex-col gap-7 w-full md:w-[532px]">
        <div className="flex flex-col items-start gap-[22px]">
          <div className="flex flex-col items-start gap-3">
            <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl tracking-[0]">
              <span className="text-[#394355]">Компания</span>
              <span className="text-[#527dc5]"> MobileTent</span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="flex flex-col items-start gap-9">
              <div className="flex flex-col items-start gap-1.5">
                <div className="flex flex-col items-start gap-6">
                  <Badge className="px-3 py-1.5 bg-[#73a7ff] rounded-lg">
                    <span className="font-['Raleway',Helvetica] font-medium text-white text-lg leading-6">
                      Производство и продажа тентовых конструкций и шатров по
                      всей России и СНГ
                    </span>
                  </Badge>

                  <p className="text-[#394355] text-sm font-['Raleway',Helvetica] font-medium tracking-[0] leading-6 max-w-[447px]">
                    Ваши мероприятия будут яркими и уютными, а бизнес будет
                    развиваться с красивыми и надежными шатрами от MobilTent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="rounded-[20px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
          <CardContent className="p-[26px] flex flex-col gap-4">
            <p className="font-normal text-white text-lg leading-6 font-['Raleway',Helvetica] tracking-[0]">
              Проектируем и создаем с душой удобные, практичные
              <br />и красивые тентовые продукты для вашего бизнеса
            </p>

            <img
              className="w-full h-px object-cover"
              alt="Line"
              src="/About1-line-2.svg"
            />

            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-white text-2xl leading-6 whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                  Мировой опыт
                </h3>

                <div className="flex flex-col gap-[17px]">
                  <p className="text-white text-lg font-['Raleway',Helvetica] font-medium tracking-[0] leading-6">
                    В тесном контакте с лидером и основателем рынка
                    <br />
                    этой сферы компанией Vector Foiltec
                  </p>

                  <div className="relative left-[350px]">
                  <span
  style={{
    width: "155px",
    height: "24px",
    fontFamily: "Raleway",
    fontWeight: 700,
    fontStyle: "italic",
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "0%",
    fontVariantNumeric: "lining-nums proportional-nums",
    background: "linear-gradient(156.3deg, #73A8FF 15.25%, #6FA7FF 85.06%, #3C6CEC 206.51%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    whiteSpace: "nowrap",
  }}
>
  Vector Foiltec
</span>      
</div>
</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full md:w-[656px] h-[473px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] flex items-center justify-center">
        <CardContent className="p-0 flex items-center justify-center w-full h-full">
          <div className="relative w-[75px] h-[75px] bg-[#f5f6ff] rounded-[37.5px] flex items-center justify-center">
            <img
              className="w-[25px] h-[29px]"
              alt="Play button"
              src="/About1-polygon-2.svg"
            />
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  );
};
