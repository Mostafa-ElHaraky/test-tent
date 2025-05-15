import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";

export const Reviews2 = (): JSX.Element => {
  // Data for the bullet points to enable mapping
  const benefitPoints = [
    {
      id: 1,
      icon: "/reviews2-group.png",
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
      icon: "/reviews2-group-1.png",
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
      icon: "/reviews2-group-2.png",
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
    <section className="relative w-full max-w-[1440px] h-[773px] bg-white mx-auto">
      <div className="relative h-[1356px] top-[-630px]">
        <Card className="relative w-full max-w-[1440px] h-[726px] top-[630px] rounded-[30px] overflow-hidden shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
          <CardContent className="relative h-[718px] p-0 pt-2">
            {/* Background gradient */}
            <div className="absolute w-full h-[629px] top-[89px] left-0 rounded-[30px] bg-gradient-to-b from-[rgba(245,246,255,1)] to-[rgba(245,246,255,0)]" />

            {/* Decorative images */}
            <img
              className="absolute w-[302px] h-[322px] top-[284px] left-0"
              alt="Decorative grass"
              src="/reviews2-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
            />

            <img
              className="absolute w-[498px] h-[565px] top-[129px] left-[942px]"
              alt="Event tent"
              src="/reviews2-event-tent-i02-1.png"
            />

            {/* Main content */}
            <div className="inline-flex flex-col items-start gap-[55px] absolute top-[172px] left-[63px]">
              {/* Heading */}
              <div className="inline-flex flex-col items-start gap-6">
                <h1 className="w-[707px] mt-[-1px] font-semibold text-4xl leading-normal font-['Raleway',Helvetica]">
                  <span className="text-[#527dc5]">
                    Получите экспертную консультацию
                    <br />
                  </span>
                  <span className="text-[#232c42]">
                    по покупке шатра с оценкой стоимости и сроков
                  </span>
                </h1>
              </div>

              {/* Benefit points */}
              <div className="inline-flex flex-col items-start gap-6">
                {benefitPoints.map((point) => (
                  <div
                    key={point.id}
                    className="flex flex-col w-[560px] items-start gap-[51px]"
                  >
                    <div className="inline-flex items-center gap-3">
                      <div className="relative w-6 h-6">
                        <img
                          className="absolute w-6 h-[17px] top-[3px] left-0"
                          alt="Check icon"
                          src={point.icon}
                        />
                      </div>
                      <p className="w-[504px] font-normal text-[#394355] text-sm leading-5 font-['Raleway',Helvetica]">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expert image */}
            <img
              className="absolute w-[516px] h-[718px] top-0 left-[808px] object-cover"
              alt="Expert consultant in blue shirt"
              src="/reviews2-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
            />

            {/* Expert badge */}
            <div className="inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute top-[598px] left-[902px] rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(36,48,87,1)] to-[rgba(55,66,85,1)] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
              <div className="inline-flex flex-col items-center justify-center gap-1.5">
                <h2 className="w-fit mt-[-1px] font-semibold text-white text-lg text-center leading-6 whitespace-nowrap font-['Raleway',Helvetica]">
                  Евгений Петров
                </h2>
                <p className="w-fit font-medium text-white text-base text-center leading-6 whitespace-nowrap font-['Raleway',Helvetica]">
                  Эксперт по тентовым конструкциям
                </p>
              </div>
            </div>

            {/* Decorative grass image */}
            <img
              className="absolute w-[359px] h-[306px] top-[412px] left-[1081px]"
              alt="Decorative grass"
              src="/reviews2-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.png"
            />

            {/* Contact form */}
            <div className="inline-flex items-end gap-4 absolute top-[552px] left-[63px]">
              <div className="flex flex-col w-[349px] h-[67px] items-start gap-4 relative rounded-2xl overflow-hidden border border-solid border-neutral-200 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
                <Input
                  className="w-[349px] h-[67px] pl-3 pr-2 py-2 bg-white rounded-2xl text-[17px] font-['Raleway',Helvetica] font-normal text-label-colorslc-l-secondary tracking-[-0.41px] leading-[22px]"
                  placeholder="Ваш телефон"
                />
              </div>
              <Button className="w-[262px] h-[68px] rounded-2xl border-none shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)] font-semibold text-white text-base text-center font-['Raleway',Helvetica]">
                Получить консультацию
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
