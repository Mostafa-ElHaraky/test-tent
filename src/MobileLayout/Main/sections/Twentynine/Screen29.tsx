import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen29 = (): JSX.Element => {
  return (
    <div className="relative w-[375px] h-[876px] bg-white overflow-hidden">
      <div className="relative h-[816px] top-[30px] rounded-[20px] overflow-hidden bg-[url(/metal-structure-against-the-blue-sky-with-white-clouds-1.png)] bg-cover bg-[50%_50%]">
        <div className="inline-flex flex-col items-start gap-6 absolute top-[30px] left-6">
          <div className="flex flex-col w-[325px] items-start justify-center gap-5 relative">
            <div className="flex flex-col w-full items-start gap-6 relative">
              <h1 className="relative w-[316px] mt-[-1.00px] font-semibold text-2xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#639dff]">
                  Работаем с тендерами
                  <br />
                </span>
                <span className="text-white">
                  с бюджетами по 10 000 000 рублей
                </span>
              </h1>
            </div>

            <Card className="w-full bg-[#73a7ff59] rounded-[20px] border-none">
              <CardContent className="p-6 space-y-3">
                <div className="relative w-fit mt-[-1.00px] font-normal text-white text-sm leading-[14px] [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold leading-4">
                    Входим в реестр МИНПРОМТОРГА
                    <br />
                  </span>
                  <span className="leading-4">
                    в качестве официального производителя
                  </span>
                </div>

                <Card className="bg-white rounded-[20px] border-none">
                  <CardContent className="px-3 py-1.5 flex flex-col items-start gap-1.5">
                    <div className="inline-flex items-center gap-3">
                      <div className="relative w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-transparent text-[46px] leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                        30+
                      </div>
                      <div className="relative w-[70px] font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                        Тендеров выиграли
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <div className="flex flex-col w-full items-start gap-[21px]">
              <div className="inline-flex items-center gap-[17px]">
                <Badge className="w-3 h-3 rounded-md p-0 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                <div className="relative w-[287px] mt-[-1.00px] font-normal text-white text-[11px] leading-[11px] [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-medium leading-4">С </span>
                  <span className="font-bold leading-4">
                    2023 года нужно обязательно входить в реестр
                  </span>
                  <span className="font-medium leading-4">
                    , чтобы учавствовать в торгах
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-[17px]">
                <Badge className="w-3 h-3 rounded-md p-0 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                <div className="relative w-fit mt-[-1.00px] font-normal text-white text-[11px] leading-[11px] [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-bold leading-4">Аккредитованы</span>
                  <span className="font-medium leading-4">
                    {" "}
                    на большинстве тендерных площадках
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start justify-center gap-3 w-full">
            <Button className="relative w-[323px] h-[68px] rounded-2xl border-none shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <span className="font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                Запросить контакты
              </span>
            </Button>

            <p className="relative w-[323px] h-[27px] font-normal text-white text-xs text-center leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
              Вы можете лично поговорить с клиентами и посетить их объекты,
              чтобы узнать все подробности о нашей работе
            </p>
          </div>
        </div>

        <div className="absolute w-[375px] h-[323px] top-[512px] left-0">
          <div className="relative h-[412px] top-[-89px]">
            <div className="absolute w-[329px] h-[249px] top-[163px] left-[25px] rounded-[164.5px/124.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(7,12,30,1)_0%,rgba(17,27,63,0)_100%)]" />

            <img
              className="w-[375px] h-[393px] top-0 left-0 absolute object-cover"
              alt="Element clouds"
              src="/08-clouds-1.png"
            />

            <div className="absolute w-[352px] h-[49px] top-[324px] left-[17px] bg-[#232c42] rounded-[176px/24.5px] blur-[25px]" />

            <img
              className="absolute w-[375px] h-[304px] top-[89px] left-0 object-cover"
              alt="Event tent"
              src="/event-tent-i02-2.png"
            />

            <img
              className="w-[254px] h-[154px] top-[239px] left-[121px] blur-[15px] absolute object-cover"
              alt="Element clouds"
              src="/08-clouds-1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
