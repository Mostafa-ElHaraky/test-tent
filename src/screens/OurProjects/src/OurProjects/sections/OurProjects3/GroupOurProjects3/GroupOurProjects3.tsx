import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { Progress } from "../../../../../../../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../../../../../../../components/ui/radio-group";

export const GroupOurProjects3 = (): JSX.Element => {
  // Capacity options data
  const capacityOptions = [
    { value: "50", label: "до 50 человек", display: "50" },
    { value: "50-200", label: "50-200 человек", display: "50-200" },
    { value: "200+", label: "от 200 человек", display: "от 200" },
    { value: "not-sure", label: "затрудняюсь ответить", icon: true },
  ];


  return (
    <div className="w-full py-12 px-4">
      {/* First Section - Capacity Selection */}
      <section className="px-12 pt-[33px] pb-12">
        <div className="max-w-[1368px] mx-auto">
          <div className="flex flex-col w-full max-w-[627px] items-start gap-6 mb-12">
          <h1 className="font-['Raleway',Helvetica] font-semibold text-4xl">
  <span className="text-[#527dc5]">Хотите</span>
  <span className="text-[#232c42] ml-2">похожий?</span> {/* ml-2 adds margin-left */}
</h1>

            <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg leading-6">
              Спроектируем и изготовим с гарантией 50 лет
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 p-6 bg-[#f2f4f7] rounded-[10px] max-w-[627px] mb-12">
            <p className="font-['Raleway',Helvetica] font-semibold text-[#4f5d80] text-base leading-6">
              Получите расчет цены шатра в 3х вариантах ответив на 3 вопроса
            </p>

            <Progress
              value={33.3}
              className="h-2.5 bg-[#4f5d802b] rounded w-full"
            />

            <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg">
              1 из 3
            </p>
          </div>
          

          <div className="flex flex-col items-start gap-6 mb-12">
            <h2 className="font-['Raleway',Helvetica] font-bold text-[#394355] text-xl leading-6">
              1. Какая вместимость?
            </h2>

            <RadioGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {capacityOptions.map((option, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[318px] h-[200px] rounded-[20px] shadow-md relative"
                >
                  <CardContent className="p-0 h-full">
                    <div className="p-5 h-full flex flex-col justify-between">
                      {option.icon ? (
                        <div className="w-[90px] h-[90px] bg-[#f5f6ff] rounded-[45px] flex items-center justify-center mt-[22px] ml-[22px]">
                          <div className="w-[54px] h-[54px] relative">
                            <img
                              className="w-12 h-[54px]"
                              alt="Question mark"
                              src="/FORgroup.png"
                            />
                          </div>
                        </div>
                      ) : (
<div 
  className="mt-5 ml-[22px] font-['Raleway',Helvetica] font-bold text-6xl"
  style={{ color: "#6FA7FF" }} // White text
>
  {option.display}
</div>
                      )}

                      <div className="flex items-center gap-3 mt-auto mb-6 ml-[22px]">
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="w-[25px] h-[25px] rounded-[12.5px] border-[#4f5d807d]"
                        />
                        <label
                          htmlFor={option.value}
                          className="font-['Raleway',Helvetica] font-normal text-[#394355] text-lg"
                        >
                          {option.label}
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>
          </div>

          {/* Gift Card */}
          <div 
  className="absolute w-[546px] h-[288px] left-[846px] top-[600px] rounded-[20px] bg-gradient-to-br from-[#243057] to-[#374255]"
  style={{
    background: "linear-gradient(108.32deg, #243057 -27.58%, #374255 107.93%)",
    borderRadius: "20px"
  }}
>
  {/* Content */}
  <div className="absolute top-[30px] left-[30px] z-10">
    <h3 className="font-['Raleway',Helvetica] font-bold text-white text-2xl leading-6 mb-6">
      Ваши подарки в конце
    </h3>

    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <img
          className="w-[75px] h-14 object-contain"
          alt="Star tent"
          src="/FORstar-tent-h02-1.png"
        />
        <p className="font-['Raleway',Helvetica] text-white text-base leading-6">
          3d проект вашего шатра под размеры
          <br />и оснащение
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative w-[62px] h-20">
          <img
            className="w-full h-full object-cover"
            alt="Calendar background"
            src="/hanging-blank-calender-------1.png"
          />
          <img
            className="absolute w-9 h-9 top-[29px] left-[13px] object-cover"
            alt="Calendar icon"
            src="/FORfc3740fa54440e5eaefe94690ddc2643-4.png"
          />
        </div>
        <p className="font-['Raleway',Helvetica] text-white text-base leading-6">
          Примеры уже готовых шатров схожими
          <br />с вашими задачами
        </p>
      </div>
    </div>

    <img
  className="absolute w-[262px] h-[284px] top-[-111px] left-[360px]"
  alt="Gifts"
  src="/gifts3-------1.png"
/>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <Button className="w-[412px] h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-['Raleway',Helvetica] font-semibold text-white text-base">
              Далее
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
