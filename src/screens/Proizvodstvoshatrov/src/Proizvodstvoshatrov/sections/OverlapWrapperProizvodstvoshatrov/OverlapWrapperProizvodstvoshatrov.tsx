import { Button } from "../../../../../../components/ui/button";
import { Card } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";

export const OverlapWrapperProizvodstvoshatrov  = (): JSX.Element => {
  // Benefits data for mapping
  const benefits = [
    {
      id: 1,
      icon: "/group.png",
      text: (
        <>
          <span className="font-semibold">
            Расскажет, как не попасть на уловки нечестных компаний,
          </span>{" "}
          которые могут привести к печальным последствиям. Они не только в
          стоимости
        </>
      ),
    },
    {
      id: 2,
      icon: "/group-1.png",
      text: (
        <>
          На примерах{" "}
          <span className="font-semibold">
            покажет отличия качественного и некачественного шатра
          </span>
        </>
      ),
    },
    {
      id: 3,
      icon: "/group-2.png",
      text: (
        <>
          <span className="font-semibold">
            Ответит на вопросы и подберет лучшие материалы
          </span>{" "}
          для ваших условий эксплуатации
        </>
      ),
    },
  ];

  return (
    <section className="relative w-full h-[726px] rounded-[30px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
      <div className="relative h-[718px] mt-2">
        <div className="absolute w-full h-[629px] top-[89px] left-0 rounded-[30px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]" />

        <img
          className="absolute w-[302px] h-[322px] top-[284px] left-0"
          alt="Декоративная трава"
          src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.png"
        />

        <img
          className="absolute w-[498px] h-[565px] top-[129px] left-[942px]"
          alt="Шатер"
          src="/event-tent-i02-1.png"
        />

        <div className="flex flex-col items-start gap-[55px] absolute top-[172px] left-[63px]">
          <div className="flex flex-col items-start gap-6">
            <h2 className="w-[707px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-[#527dc5]">
                Получите экспертную консультацию
                <br />
              </span>
              <span className="text-[#232c42]">
                по покупке шатра с оценкой стоимости и сроков
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex flex-col w-[560px] items-start"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-6 h-[17px] top-[3px] left-0"
                      alt="Галочка"
                      src={benefit.icon}
                    />
                  </div>
                  <p className="w-[504px] font-normal text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          className="absolute w-[516px] h-[718px] top-0 left-[808px] object-cover"
          alt="Консультант по шатрам"
          src="/confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
        />

        <Card className="inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute top-[598px] left-[902px] rounded-2xl overflow-hidden [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] border-none">
          <div className="flex flex-col items-center justify-center gap-1.5">
            <h3 className="w-fit mt-[-1.00px] font-semibold text-white text-lg text-center leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
              Евгений Петров
            </h3>
            <p className="w-fit font-medium text-white text-base text-center leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
              Эксперт по тентовым конструкциям
            </p>
          </div>
        </Card>

        <img
          className="absolute w-[359px] h-[306px] top-[412px] left-[1081px]"
          alt="Декоративная трава"
          src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.png"
        />

        <div className="flex items-end gap-4 absolute top-[552px] left-[63px]">
          <div className="relative w-[349px] h-[67px]">
            <Input
              className="h-[67px] rounded-2xl w-full px-3 py-2 text-[17px] [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary tracking-[-0.41px] leading-[22px]"
              placeholder="Ваш телефон"
            />
          </div>

          <Button className="w-[262px] h-[68px] rounded-2xl border-none shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};
