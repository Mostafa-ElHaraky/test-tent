import { Badge } from "../../../../../../components/ui/badge";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";
import { Separator } from "../../../../../../components/ui/separator";

export const About2 = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: "/element8-7.png",
      text: "Московская область, г. Красногорск, ул. Молодежная. д. 4",
      link: "Построить маршрут на Яндекс картах",
      hasLink: true,
    },
    {
      icon: "/element8-8.png",
      text: "Пн-Пт с 09:00 -19:00",
      subText: "По предварительной записи",
      hasLink: false,
    },
    {
      icon: "/element8-11.png",
      text: "+7 (499) 113-36-60",
      hasLink: false,
    },
    {
      icon: "/element8-12.png",
      text: "8 (800) 302-46-31",
      hasLink: false,
    },
    {
      icon: "/element8-13.png",
      text: "info@mobile-tent.ru",
      hasLink: false,
      hasClipboard: true,
    },
  ];

  // First benefits data for production section
  const productionBenefits = [
    {
      icon: "/element8-2.png",
      title: "Посмотрите и потрогаете ткань вживую",
      description:
        "Оцените состояние металла каркаса на реальных объектах после нескольких лет воздействия осадков",
    },
    {
      icon: "/element8-3.png",
      title: "Покажем последние тренды в дизайне и мировые наработки",
      description: "и технологии производства",
    },
    {
      icon: "/element8-4.png",
      title: "Расскажем, как можно применить",
      description: "все самое современное для долгого срока службы",
    },
  ];

  // Second benefits data for consultation section
  const consultationBenefits = [
    {
      id: 1,
      icon: "/element8-15.png",
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
      icon: "/element8-16.png",
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
      icon: "/element8-17.png",
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
    <main className="relative bottom-[110px] w-full max-w-[1440px] h-[1900px] mx-auto bg-white">
      <section className="w-full py-16 px-12 relative top-[55px] ">
        <div className="max-w-[1466px] mx-auto relative">
          {/* Heading */}
          <div className="font-normal text-4xl leading-normal font-['Raleway',Helvetica] tracking-[0] mb-10">
            <span className="font-semibold text-[#232c42]">
              Весь комплекс работ делаем
              <br />
              на своем производстве{" "}
            </span>
            <span className="font-bold text-[#527dc5]">в г. Калуга</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-9 w-full md:w-1/2">
              {/* Visit invitation */}
              <div className="flex items-center gap-4 p-3 bg-[#f2f4f7] rounded-[10px]">
                <div className="relative w-[35px] h-[35px]">
                  <img
                    className="absolute w-[30px] h-[29px] top-[3px] left-[3px]"
                    alt="Invitation icon"
                    src="/element8-1.png"
                  />
                </div>
                <div className="font-medium text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica] tracking-[0]">
                  Приезжайте на знакомство-экскурсию
                </div>
              </div>

              {/* Description */}
              <div className="font-normal text-[#394355] text-lg leading-6 font-['Raleway',Helvetica] tracking-[0]">
                Увидите разницу китайской и французской ткани
                <br />
                на примере 2 конструкций стоящих уже несколько лет на улице
              </div>

              {/* Benefits card */}
              <Card className="w-full max-w-[556px] rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6">
                    {productionBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="relative w-6 h-6">
                          <img
                            className="absolute w-6 h-[17px] top-[3px] left-0"
                            alt="Benefit icon"
                            src={benefit.icon}
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                          <div className="font-semibold text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica] tracking-[0]">
                            {benefit.title}
                          </div>
                          <div className="font-normal text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica] tracking-[0]">
                            {benefit.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="w-full md:w-1/2">
              {/* Image carousel */}
              <div className="relative flex mb-8">
                <div className="relative w-[360px] h-[310px]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Factory image"
                    src="/rectangle-65.png"
                  />
                  <Button
                    variant="outline"
                    className="absolute top-1/2 left-[-28px] transform -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 flex items-center justify-center border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  >
                    <div className="relative w-6 h-6 rotate-180">
                      <img
                        className="absolute w-3.5 h-6 top-0 left-[5px] -rotate-180"
                        alt="Previous"
                        src="/element8-6.png"
                      />
                    </div>
                  </Button>
                </div>
                <div className="relative w-[328px] h-[310px] bg-[url(/rectangle-66.png)] bg-cover bg-[50%_50%]">
                  <Button
                    variant="outline"
                    className="absolute top-1/2 left-[299px] transform -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 flex items-center justify-center border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  >
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-3.5 h-6 top-0 left-[5px]"
                        alt="Next"
                        src="/element8-5.png"
                      />
                    </div>
                  </Button>
                </div>
              </div>

              {/* Contact information card */}
              <Card className="w-full max-w-[660px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                          <div className="relative w-[21px] h-[21px]">
                            <img
                              className="absolute w-3 h-3 top-1 left-1"
                              alt="Contact icon"
                              src={info.icon}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="font-normal text-[#394355] text-sm leading-normal font-['Raleway',Helvetica] tracking-[0]">
                            {info.text}
                            {info.hasClipboard && (
                              <img
                                className="inline-block ml-2 w-4 h-4"
                                alt="Copy"
                                src="/element8-14.png"
                              />
                            )}
                          </div>
                          {info.link && (
                            <div className="font-semibold text-[#527dc5] text-xs leading-normal underline font-['Raleway',Helvetica] tracking-[0]">
                              {info.link}
                            </div>
                          )}
                          {info.subText && (
                            <div className="font-semibold text-[#232c42] text-xs leading-normal font-['Raleway',Helvetica] tracking-[0]">
                              {info.subText}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  {/* Social media icons */}
                  <div className="flex items-center gap-4 mt-2">
                    <img
                      className="w-6 h-5"
                      alt="Social media"
                      src="/element8-9.png"
                    />
                    <img
                      className="w-[23px] h-[23px]"
                      alt="Social media"
                      src="/element8-10.png"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


{/* Software section */}
<section className="relative top-[55px] w-[1440px] h-[456px] rounded-[30px] overflow-hidden bg-[#1a2a42]">
  <div className="absolute w-full h-full">
    {/* Blue gradient circle */}
    <div className="absolute w-[807px] h-[807px] top-[-279px] right-0 rounded-[403.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)]" />
    
    {/* Content container */}
    <div className="absolute top-[123px] left-[45px] space-y-6 z-10">
      <h2 className="text-4xl font-semibold leading-tight">
        <span className="text-[#7aacff]">Проектируем </span>
        <span className="text-white">
          все конструкции в самой крутой<br />программе в РФ и СНГ
        </span>
      </h2>

      {/* Software badge */}
      <Badge className="px-5 py-4 bg-[#73a7ff] text-white text-6xl font-semibold rounded-[10px] hover:bg-[#73a7ff]">
              Dlubal RFEM + MPanel
            </Badge>
          </div>

          <img
            className="absolute w-[538px] h-[404px] top-[26px] right-[48px]"
            alt="Звездообразный шатер"
            src="/About2-star-tent-h02-1.png"
          />

          <img
            className="absolute w-[846px] h-[456px] top-0 right-0 z-0"
            alt="Горный пейзаж"
            src="/About2-fields-at-mountain-valley-1.png"
          />
            </div>
</section>


      {/* Consultation section */}
      <section className="relative w-full h-[726px] top-[55px] rounded-[30px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
        <div className="relative h-[718px] mt-1">
          <div className="absolute w-full h-[629px] top-[89px] left-0 rounded-[30px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]" />

          <img
            className="absolute w-[302px] h-[322px] top-[284px] left-0"
            alt="Vecteezy overgrown"
            src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.png"
          />

          <img
            className="absolute w-[498px] h-[565px] top-[129px] right-0"
            alt="Event tent"
            src="/element8-event-tent-i02-1.png"
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
              <div className="flex flex-col w-[560px] gap-[51px] items-start">
                {consultationBenefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-center gap-3">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-6 h-[17px] top-[3px] left-0"
                        alt="Check icon"
                        src={benefit.icon}
                      />
                    </div>
                    <div className="w-[504px] font-normal text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                      {benefit.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img
            className="absolute w-[516px] h-[718px] top-0 right-[116px] object-cover"
            alt="Confident young businessman"
            src="/element8-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
          />

          <Card className="inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute top-[598px] right-[176px] rounded-2xl overflow-hidden [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] border-none">
            <CardContent className="p-0">
              <div className="flex flex-col items-center justify-center gap-1.5">
                <div className="w-fit mt-[-1.00px] font-semibold text-white text-lg text-center leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  Евгений Петров
                </div>
                <div className="w-fit font-medium text-white text-base text-center leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  Эксперт по тентовым конструкциям
                </div>
              </div>
            </CardContent>
          </Card>

          <img
            className="absolute w-[359px] h-[306px] top-[412px] right-[-150px]"
            alt="Vecteezy overgrown"
            src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.png"
          />

          <div className="flex items-end gap-4 absolute top-[600px] left-[63px]">
            <Card className="flex w-[349px] h-[67px] items-start gap-4 relative rounded-2xl overflow-hidden border border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] p-0">
              <CardContent className="p-0 w-full h-full">
                <div className="flex w-full h-full items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-2xl overflow-hidden">
                  <Input
                    className="border-none shadow-none w-full [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px]"
                    placeholder="Ваш телефон"
                  />
                </div>
              </CardContent>
            </Card>

            <Button className="w-[262px] h-[68px] rounded-2xl border-[none] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};