import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen11 = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[375px] h-[757px] bg-white">
      <div className="relative h-[697px] top-[30px] rounded-[20px] overflow-hidden">
        <div className="relative w-full h-[700px] rounded-[30px]">
          <div className="inline-flex flex-col items-start gap-[30px] absolute top-[30px] left-6">
            {/* Header and description section */}
            <div className="inline-flex flex-col items-start gap-6 relative">
              <h1 className="w-[324px] mt-[-1.00px] font-semibold text-2xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#232c42]">Уже </span>
                <span className="text-[#4377cd]">12 лет</span>
                <span className="text-[#232c42]">
                  {" "}
                  в сфере тентовых конструкций
                </span>
              </h1>

              <p className="w-[324px] font-medium text-[#394355] text-sm leading-[18px] [font-family:'Raleway',Helvetica] tracking-[0]">
                Прошел путь от просто продажи шатров из Китая до создания
                предприятия в РФ с полным циклом производства
              </p>

              <Card className="bg-white rounded-[10px] p-0 border-none">
                <CardContent className="p-5">
                  <p className="w-[286px] font-medium text-[#394355] text-[11px] leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
                    Делаю все, чтобы вы, ваши сотрудники и клиенты чувствовали
                    себя комфортно, а ваш бизнес развивался без издержек на
                    постоянные ремонты
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Features section with checkmarks */}
            <div className="flex w-[325px] items-center gap-3 relative">
              <div className="inline-flex items-center gap-3 relative">
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-4 h-3 top-0.5 left-0"
                    alt="Checkmark icon"
                    src="/group.png"
                  />
                </div>

                <p className="w-[150px] mt-[-1.00px] text-[#394355] text-[11px] leading-[11px] [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold leading-4">
                    Контролирую соблюдение единых стандартов работы
                  </span>
                  <span className="font-medium leading-4">
                    {" "}
                    всех сотрудников
                  </span>
                </p>
              </div>

              <div className="inline-flex items-center gap-3 relative">
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-4 h-3 top-0.5 left-0"
                    alt="Checkmark icon"
                    src="/group-1.png"
                  />
                </div>

                <p className="w-[107px] mt-[-1.00px] text-[#394355] text-[11px] leading-[11px] [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold leading-4">Лично веду</span>
                  <span className="font-medium leading-4">
                    {" "}
                    ключевых клиентов
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Image section with person and tent */}
          <div className="absolute w-[364px] h-[347px] top-[350px] left-[11px]">
            <img
              className="absolute w-[351px] h-[347px] top-0 left-[13px]"
              alt="Event tent"
              src="/event-tent-i02-1.png"
            />

            <img
              className="absolute w-[292px] h-[338px] top-[9px] left-0 object-cover"
              alt="Confident young businessman"
              src="/confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
            />

            {/* Introduction button */}
            <Button className="flex w-[327px] items-center justify-center gap-2.5 px-6 py-3 absolute top-[272px] left-[13px] rounded-[10px] overflow-hidden [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] h-auto">
              <span className="w-fit mt-[-1.00px] ml-[-8.00px] mr-[-8.00px] font-normal text-sm text-center leading-[14px] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-medium text-white leading-4">
                  Здравствуйте, меня зовут{" "}
                </span>
                <span className="font-bold text-white leading-4">
                  Бородин Андрей
                  <br />
                </span>
                <span className="font-medium text-white leading-4">
                  Я руководитель компании
                </span>
              </span>
            </Button>

            {/* Video button */}
            <Card className="inline-flex flex-col items-start gap-2.5 px-3 py-2 absolute top-[159px] left-[214px] bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0">
                <div className="inline-flex items-center gap-[15px] relative">
                  <div className="relative w-6 h-6">
                    <div className="relative w-[22px] h-4 top-1 left-px">
                      <div className="relative h-4">
                        <div className="absolute w-[11px] h-[11px] top-[3px] left-1.5 bg-white rounded-[5.52px]" />
                        <img
                          className="absolute w-[22px] h-4 top-0 left-0"
                          alt="Play icon"
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-fit mt-[-1.00px] font-bold text-[#232c42] text-[11px] leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                    Видео
                    <br />о компании
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
