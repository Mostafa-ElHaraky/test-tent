import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen22 = (): JSX.Element => {
  // Data for the checkpoints to enable mapping
  const checkpoints = [
    {
      id: 1,
      text: "Оценим правильность расчетов для выдерживания нагрузки",
      imgSrc: "/group.png",
    },
    {
      id: 2,
      text: "Оценим адекватность выставленной цены",
      imgSrc: "/group-1.png",
    },
    {
      id: 3,
      text: "Проверим качество используемых материалов",
      imgSrc: "/group-2.png",
    },
  ];

  return (
    <div className="relative w-full max-w-[375px] h-[576px] bg-white mx-auto">
      <Card className="relative h-[516px] top-[30px] rounded-[30px] border-none shadow-none">
        <CardContent className="p-6">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex flex-col items-start gap-6">
              <h1 className="w-full font-semibold text-2xl font-['Raleway',Helvetica]">
                <span className="text-[#232c42]">
                  Получили КП от других компаний, но{" "}
                </span>
                <span className="text-[#527dc5]">
                  что-то смущает или отталкивает?
                </span>
              </h1>

              <p className="w-full font-medium text-[#394355] text-sm leading-4 font-['Raleway',Helvetica]">
                Давайте проанализируем КП и расскажем про подводные камни или их
                отсутствие в предложении другой компании
              </p>
            </div>

            <div className="flex flex-wrap w-full items-start gap-[12px]">
              <div className="flex flex-col items-start justify-center gap-3">
                {checkpoints.slice(0, 2).map((checkpoint) => (
                  <div key={checkpoint.id} className="flex items-center gap-3">
                    <div className="relative w-4 h-4">
                      <img
                        className="absolute w-4 h-3 top-0.5 left-0"
                        alt="Checkmark"
                        src={checkpoint.imgSrc}
                      />
                    </div>
                    <div className="font-semibold text-[#394355] text-[11px] leading-4 font-['Raleway',Helvetica]">
                      {checkpoint.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-4 h-3 top-0.5 left-0"
                    alt="Checkmark"
                    src={checkpoints[2].imgSrc}
                  />
                </div>
                <div className="font-semibold text-[#394355] text-[11px] leading-4 font-['Raleway',Helvetica]">
                  Проверим качество
                  <br />
                  используемых материалов
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[232px] h-[218px] mt-[30px] ml-auto">
            <div className="relative w-[243px] h-[258px] -top-4 -left-5">
              <img
                className="absolute w-[218px] h-[258px] top-0 left-[25px]"
                alt="Checklist"
                src="/checklist-------1.png"
              />
              <img
                className="absolute w-[54px] h-2.5 top-[136px] left-[117px]"
                alt="Image"
                src="/-------------------.png"
              />
              <img
                className="absolute w-[75px] h-[29px] top-[105px] left-[111px]"
                alt="Image"
                src="/------------------------.png"
              />
              <img
                className="absolute w-[103px] h-[155px] top-[33px] left-[140px] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] object-cover"
                alt="Chat"
                src="/chat-46-------1.png"
              />
              <img
                className="absolute w-[185px] h-[185px] top-10 left-0 blur-[10px] object-cover"
                alt="Blue water splashing"
                src="/blue-water-splashing-alone--9-------1.png"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 mt-[219px]">
            <Button className="w-full h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)] font-semibold text-white text-base font-['Raleway',Helvetica]">
              Получить оценку КП
            </Button>
            <p className="font-normal text-[#394355] text-xs text-center font-['Raleway',Helvetica]">
              Заявка ни к чему не обязывает
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
