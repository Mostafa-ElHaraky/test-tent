import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const Screen32 = (): JSX.Element => {
  // Benefits data for mapping
  const benefits = [
    {
      id: 1,
      imageSrc: "/group.png",
      text: (
        <>
          <span className="font-semibold leading-4">
            Расскажет, как не попасть на уловки нечестных компаний,
          </span>
          <span className="leading-4">
            {" "}
            которые могут привести к печальным последствиям. Они не только в
            стоимости
          </span>
        </>
      ),
      width: "282px",
    },
    {
      id: 2,
      imageSrc: "/group-1.png",
      text: (
        <>
          <span className="leading-4">На примерах </span>
          <span className="font-semibold leading-4">
            покажет отличия качественного и некачественного шатра
          </span>
        </>
      ),
      width: "252px",
    },
    {
      id: 3,
      imageSrc: "/group-2.png",
      text: (
        <>
          <span className="font-semibold leading-4">
            Ответит на вопросы и подберет лучшие материалы
          </span>
          <span className="leading-4"> для ваших условий эксплуатации</span>
        </>
      ),
      width: "264px",
    },
  ];

  return (
    <div className="relative w-full max-w-[375px] h-[1053px] bg-white mx-auto">
      <div className="relative h-[1002px] top-[30px] rounded-[30px]">
        <div className="flex flex-col items-start gap-6 absolute top-[35px] left-6">
          <div className="flex flex-col w-[325px] items-start gap-6">
            <div className="flex flex-col items-start gap-6">
              <h1 className="w-[325px] mt-[-1.00px] font-semibold text-2xl leading-normal font-['Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">
                  Получите экспертную консультацию{" "}
                </span>
                <span className="text-[#232c42]">
                  по покупке шатра с оценкой стоимости и сроков
                </span>
              </h1>
            </div>

            <div className="flex flex-col items-start gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex flex-col w-full items-start"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-6 h-[17px] top-[3px] left-0"
                        alt="Group"
                        src={benefit.imageSrc}
                      />
                    </div>
                    <div
                      className="mt-[-1.00px] font-normal text-[#394355] text-[11px] leading-[11px] font-['Raleway',Helvetica] tracking-[0]"
                      style={{ width: benefit.width }}
                    >
                      {benefit.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-end gap-4 w-full">
            <Card className="w-[327px] h-[67px] rounded-2xl border border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] overflow-hidden p-0">
              <CardContent className="p-0">
                <div className="flex w-full h-[67px] items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-2xl overflow-hidden">
                  <Input
                    className="w-full font-['Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px] border-none shadow-none"
                    placeholder="Ваш телефон"
                  />
                </div>
              </CardContent>
            </Card>

            <Button className="w-[327px] h-[68px] rounded-2xl border-none shadow-2 bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)] font-semibold text-white text-base text-center">
              Получить консультацию
            </Button>
          </div>
        </div>

        <div className="absolute w-[375px] h-[468px] top-[521px] left-0">
          <div className="relative h-[468px]">
            <img
              className="absolute w-[310px] h-[449px] top-[19px] left-[65px]"
              alt="Event tent"
              src="/event-tent-i02-1.png"
            />

            <img
              className="absolute w-[375px] h-[468px] top-0 left-0"
              alt="Confident young businessman"
              src="/confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
            />

            <Card className="flex w-[261px] h-[62px] items-center justify-center gap-2.5 px-6 py-3 absolute top-[393px] left-[57px] rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(36,48,87,1)] to-[rgba(55,66,85,1)] border-none">
              <CardContent className="p-0">
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <h3 className="w-fit mt-[-1.00px] font-semibold text-white text-sm text-center leading-4 whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                    Евгений Петров
                  </h3>
                  <p className="w-fit font-medium text-white text-sm text-center leading-4 whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                    Эксперт по тентовым конструкциям
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
