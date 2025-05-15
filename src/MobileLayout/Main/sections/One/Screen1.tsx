import { ChevronDownIcon, MailIcon, PhoneIcon, SearchIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const Screen1 = (): JSX.Element => {
  return (
    <main className="relative w-full max-w-[375px] h-[705px] bg-white mx-auto">
      <div className="relative h-full">
        {/* Background image */}
        <div className="w-full h-[705px] left-0 absolute top-0">
          <div className="relative h-[383px] top-[322px]">
            <img
              className="absolute w-full h-[241px] top-[35px] left-0"
              alt="Tent construction"
              src="/fc3740fa54440e5eaefe94690ddc2643-3.png"
            />
          </div>
        </div>

        {/* Header section */}
        <div className="inline-flex flex-col items-center gap-3 left-2.5 absolute top-0">
          <Card className="relative w-[355px] h-[98px] border-none shadow-none">
            <CardContent className="p-0">
              {/* City selector */}
              <div className="flex w-[327px] items-center justify-between absolute top-3 left-3.5">
                <div className="inline-flex items-center gap-1.5">
                  <div className="inline-flex items-center gap-1">
                    <span className="w-fit mt-[-1.00px] font-normal text-[#232c42] text-[11px] whitespace-nowrap [font-family:'Raleway',Helvetica]">
                      Ваш город:
                    </span>
                  </div>
                  <span className="w-fit mt-[-1.00px] font-semibold text-[#232c42] text-[11px] whitespace-nowrap [font-family:'Raleway',Helvetica]">
                    Москва
                  </span>
                  <ChevronDownIcon className="w-[8.66px] h-[4.5px] text-[#232c42]" />
                </div>

                <div className="inline-flex items-start gap-3">
                  <PhoneIcon className="w-4 h-[13px] text-[#232c42]" />
                  <MailIcon className="w-[15px] h-[15px] text-[#232c42]" />
                </div>
              </div>

              {/* Logo and menu */}
              <div className="flex w-[327px] items-center justify-between absolute top-[42px] left-3.5">
                <div className="inline-flex flex-col items-start gap-1.5">
                  <img
                    className="relative w-[152px] h-[16.42px]"
                    alt="Mobile tent ru"
                    src="/mobile-tent-ru.png"
                  />
                  <p className="w-[152px] font-normal text-[#394355] text-[7px] [font-family:'Raleway',Helvetica]">
                    Производство и продажа тентовых конструкций и шатров по всей
                    России и СНГ
                  </p>
                </div>

                <div className="relative w-11 h-11">
                  <div className="relative h-11">
                    <img
                      className="absolute w-[30px] h-[22px] top-[11px] left-[7px]"
                      alt="Menu"
                      src="/group.png"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SearchIcon bar */}
          <div className="flex w-[327px] items-start relative rounded-[50px] overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-4 py-3 bg-[#f2f4f7] rounded-[50px_0px_0px_50px]">
              <SearchIcon className="w-[22px] h-[22px] text-[#232c42]" />
            </div>
            <div className="flex w-[272px] h-[46px] items-center">
              <Input
                className="h-[46px] rounded-[0px_50px_50px_0px] border-none pl-3 pr-2 py-2 [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-base tracking-[-0.41px]"
                placeholder="Поиск по 1000+ товарам"
              />
              <Button
                size="icon"
                className="absolute right-0 w-8 h-8 rounded-[50px] bg-[#4f5d80]"
              >
                <div className="relative w-[15.99px] h-4 bg-[url(/group-4.png)] bg-[100%_100%]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Video button */}
        <Button
          variant="outline"
          className="inline-flex items-center gap-[15px] px-3 py-2 absolute top-[448px] left-6 bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px]"
        >
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
          <span className="w-fit font-bold text-[#232c42] text-[11px] [font-family:'Raleway',Helvetica]">
            Видео
            <br />о производстве
          </span>
        </Button>

        {/* Main content */}
        <div className="inline-flex flex-col items-start gap-4 absolute top-[186px] left-6">
          <div className="inline-flex flex-col items-start gap-4">
            <div className="inline-flex flex-col items-start gap-1.5">
              <p className="w-[327px] font-normal text-[#394355] text-[10px] [font-family:'Raleway',Helvetica]">
                <span className="font-normal">Реально </span>
                <span className="font-semibold">
                  договечные тентовые конструкции
                </span>
                <span className="font-normal"> стали реальностью</span>
              </p>

              <h1 className="w-[325px] font-medium text-2xl [font-family:'Raleway',Helvetica]">
                <span className="text-[#335dc2]">
                  Тентовые конструкции в Москве
                </span>
                <span className="text-[#232c42]">&nbsp;</span>
                <span className="text-[#232c42bf]">
                  напрямую от производителя
                </span>
              </h1>
            </div>

            <Badge className="inline-flex items-center justify-center gap-2.5 px-3 py-1.5 bg-[#4f5d80] rounded-lg backdrop-blur-[10px]">
              <span className="w-[303px] font-semibold text-white text-xs [font-family:'Raleway',Helvetica]">
                с гарантией сохранения внешнего вида в течении 15 лет при любой
                погоде
              </span>
            </Badge>
          </div>

          <div className="inline-flex items-start gap-1.5">
            <div className="relative w-6 h-6">
              <img
                className="absolute w-4 h-4 top-1 left-1"
                alt="Delivery icon"
                src="/group-5.png"
              />
            </div>
            <p className="w-[297px] font-medium text-[#232c42] text-[11px] leading-4 [font-family:'Raleway',Helvetica]">
              Отгрузим готовый со склада за 1 день или изготовим любую форму и
              размер конструкции за 10-60 дней с фиксацией сроков в договоре
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col w-[327px] items-center gap-3 absolute top-[571px] left-6">
          <p className="relative w-[341px] font-normal text-[#394355] text-[10px] [font-family:'Raleway',Helvetica] text-center">
            <span className="font-normal">Ваши </span>
            <span className="font-semibold">
              мероприятия будут яркими и уютными
            </span>
            <span className="font-normal">
              , а бизнес будет развиваться с красивыми и{" "}
            </span>
            <span className="font-bold">надежными решениями от MobilTent</span>
          </p>

          <Button className="relative w-[327px] h-[68px] rounded-2xl border-none shadow-2 text-white font-semibold text-sm [font-family:'Raleway',Helvetica] text-center [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
            Рассчитать стоимость под ваши размеры
            <br />и получить бесплатный 3d проект
          </Button>
        </div>
      </div>
    </main>
  );
};
