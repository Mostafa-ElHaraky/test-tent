import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection1 = (): JSX.Element => {
  return (
<section 
        className="relative w-[1440px] h-[604px] top-[21px] rounded-[30px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px] bg-[url(/metal-structure-against-the-blue-sky-with-white-clouds-1.png)] bg-cover bg-center overflow-hidden">
        <div className="relative w-full h-full">
        {/* Blue gradient circle */}
        <div 
            className="absolute w-[1440px] h-[604px] rounded-[30px] [background:linear-gradient(108.32deg,_#243057_19.48%,_rgba(34,_67,_124,_0.51)_107.93%)]"/>    
        <div className="flex flex-col items-start gap-9 absolute top-[54px] left-[50px]">
          <div className="flex flex-col items-end gap-10">
            {/* Headline */}
            <div className="flex flex-col w-[658px] items-start gap-6">
              <h1 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
                <span className="text-[#639dff]">Работаем с тендерами</span>
                <span className="text-white">
                  {" "}
                  с бюджетами по 10 000 000 рублей
                </span>
              </h1>
            </div>

            {/* Registry info card */}
            <Card className="bg-[#73a7ff59] border-none rounded-[20px]">
              <CardContent className="flex items-center gap-[30px] p-6">
                <div className="w-fit [font-family:'Raleway',Helvetica] text-white text-xl">
                  <span className="font-semibold leading-6">
                    Входим в реестр МИНПРОМТОРГА
                    <br />
                  </span>
                  <span className="leading-6">
                    в качестве официального производителя
                  </span>
                </div>

                <Badge className="bg-white rounded-[20px] px-3 py-1.5 w-[185px] h-[66px] flex items-start">
  <div className="flex flex-col gap-[6px] w-full">
    <div className="flex items-center gap-3 w-full h-[54px]">
      <div className="w-[79px] h-[54px] font-bold text-[46px] leading-[54px] text-[#6FA7FF] [font-family:'Raleway',Helvetica]">
        30+
      </div>
      <div className="w-[70px] h-[40px] font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica]">
        Тендеров выиграли
      </div>
    </div>
  </div>
</Badge>

              </CardContent>
            </Card>

            {/* Bullet points */}
            <div className="flex flex-col w-[650px] items-start gap-[21px]">
              {[
                {
                  text: (
                    <>
                      <span className="font-medium">С </span>
                      <span className="font-bold">
                        2023 года нужно обязательно входить в реестр
                      </span>
                      <span className="font-medium">
                        , чтобы учавствовать в торгах
                      </span>
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <span className="font-bold">Аккредитованы</span>
                      <span className="font-medium">
                        {" "}
                        на большинстве тендерных площадках
                      </span>
                    </>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-[17px]">
                  <div className="w-3 h-3 rounded-md [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                  <div className="font-normal text-white text-base leading-6 [font-family:'Raleway',Helvetica]">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA section */}
          <div className="flex flex-col items-start justify-center gap-3">
            <Button className="w-[412px] h-[68px] rounded-2xl border-none shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <span className="font-semibold text-white text-base text-center whitespace-nowrap [font-family:'Raleway',Helvetica]">
                Запросить контакты
              </span>
            </Button>
            <p className="w-[412px] font-normal text-white text-xs text-center [font-family:'Raleway',Helvetica]">
              Вы можете лично поговорить с клиентами и посетить их объекты,
              чтобы узнать все подробности о нашей работе
            </p>
          </div>
        </div>

        {/* Background elements */}
        <img
          className="w-[601px] h-[430px] absolute top-0 right-[131px] object-cover"
          alt="Element clouds"
          src="/element8-08-clouds-1.png"
        />

        <div className="absolute w-[676px] h-[513px] bottom-[-243px] right-[-11px] rounded-[338px/256.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(7,12,30,1)_0%,rgba(17,27,63,0)_100%)]" />

        <div className="absolute w-[725px] h-[101px] bottom-[-163px] right-[-43px] bg-[#232c42] rounded-[362.5px/50.5px] blur-[25px]" />

        <img
          className="absolute w-[790px] h-[604px] top-0 right-0 object-cover"
          alt="Event tent"
          src="/element8-event-tent-i02-2.png"
        />

        <img
          className="absolute w-[299px] h-[190px] bottom-0 left-0"
          alt="Vecteezy overgrown"
          src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
        />

        <img
          className="w-[464px] h-[339px] absolute bottom-0 right-0 blur-[15px] object-cover"
          alt="Element clouds"
          src="/08-clouds-1.png"
        />
      </div>
    </section>
  );
};
