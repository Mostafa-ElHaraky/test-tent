import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";
import { RadioGroup } from "../../../../components/ui/radio-group";

export const Screen15 = (): JSX.Element => {
  // Data for capacity options
  const capacityOptions = [
    { value: "50", label: "до 50 человек", displayText: "50" },
    { value: "50-200", label: "50-200 человек", displayText: "50-200" },
    { value: "200+", label: "от 200 человек", displayText: "от 200" },
    { value: "unknown", label: "затрудняюсь ответить", icon: true },
  ];

  return (
    <div className="relative w-[375px] h-[862px] bg-white">
      <div className="inline-flex flex-col items-end gap-6 relative top-[30px] left-[23px]">
        <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
          {/* Header Section */}
          <div className="flex flex-col w-[328px] items-start gap-4 relative flex-[0_0_auto]">
            <div className="relative w-[324px] mt-[-1.00px] font-semibold text-2xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-[#527dc5]">
                Нужен шатер под свои размеры,{" "}
              </span>
              <span className="text-[#232c42]">форму или дизайн?</span>
            </div>

            <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-medium text-[#4f5d80] text-[11px] leading-4 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                Спроектируем и изготовим с гарантией 50 лет
              </div>
            </div>
          </div>

          {/* Gift Card Section */}
          <Card className="relative w-[327px] h-[150px] rounded-[20px] border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-[339px] h-[187px] top-[-22px] left-[13px]">
                <img
                  className="absolute w-[162px] h-[187px] top-0 left-[177px]"
                  alt="Gifts"
                  src="/gifts3-------1.png"
                />

                <div className="absolute top-[38px] left-1 font-bold text-white text-base leading-4 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  Ваши подарки в конце
                </div>

                <div className="inline-flex flex-col items-start gap-2 absolute top-[70px] left-0">
                  <div className="relative w-[206px] h-9">
                    <div className="absolute w-[149px] top-1 left-[55px] [font-family:'Raleway',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-4">
                      3d проект вашего шатра под размеры и оснащение
                    </div>

                    <img
                      className="absolute w-[43px] h-8 top-0 left-0"
                      alt="Star tent"
                      src="/star-tent-h02-1.png"
                    />
                  </div>

                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <div className="relative w-11 h-[41px]">
                      <div className="relative w-8 h-[41px] left-1.5 bg-[url(/hanging-blank-calender-------1.png)] bg-[100%_100%]">
                        <img
                          className="absolute w-[18px] h-[18px] top-[15px] left-[7px] object-cover"
                          alt="Img"
                          src="/fc3740fa54440e5eaefe94690ddc2643-4.png"
                        />
                      </div>
                    </div>

                    <div className="relative w-[228px] font-normal text-white text-[11px] leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
                      Примеры уже готовых шатров схожими
                      <br />с вашими задачами
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Section */}
          <Card className="inline-flex flex-col items-start gap-3 p-3 relative flex-[0_0_auto] bg-[#f2f4f7] rounded-[10px] border-none">
            <CardContent className="p-0 space-y-3">
              <div className="relative w-[244px] mt-[-1.00px] font-semibold text-[#4f5d80] text-[11px] leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
                Получите расчет цены шатра в 3х вариантах ответив на 3 вопроса
              </div>

              <Progress
                value={33}
                className="relative w-[303px] h-2.5 bg-[#4f5d802b] rounded"
              />

              <div className="relative w-fit [font-family:'Raleway',Helvetica] font-medium text-[#4f5d80] text-[15px] tracking-[0] leading-4 whitespace-nowrap">
                1 из 3
              </div>
            </CardContent>
          </Card>

          {/* Capacity Selection Section */}
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-bold text-[#394355] text-base leading-4 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
              Какая вместимость?
            </div>

            <RadioGroup className="flex flex-wrap w-[324px] items-start gap-[12px_12px] relative flex-[0_0_auto]">
              {capacityOptions.map((option, index) => (
                <Card
                  key={index}
                  className="relative w-[156px] h-[98px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] border-none"
                >
                  <CardContent className="p-0">
                    {option.icon ? (
                      <div className="relative w-[30px] h-[30px] top-3 left-3 bg-[#f5f6ff] rounded-[15px]">
                        <div className="relative w-[18px] h-[18px] top-1.5 left-1.5">
                          <img
                            className="absolute w-4 h-[18px] top-0 left-px"
                            alt="Group"
                            src="/group.png"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute top-[11px] left-3 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                        {option.displayText}
                      </div>
                    )}

                    <div className="inline-flex items-center gap-3 absolute top-[61px] left-3">
                      <div className="relative w-[25px] h-[25px] rounded-[12.5px] border border-solid border-[#4f5d807d]" />
                      <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-normal text-[#394355] text-[11px] leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                          {option.label}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex flex-col w-[327px] items-start justify-center gap-3 relative flex-[0_0_auto]">
          <Button className="relative w-[327px] h-[68px] rounded-2xl border-[none] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
            <span className="font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
              Далее
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
