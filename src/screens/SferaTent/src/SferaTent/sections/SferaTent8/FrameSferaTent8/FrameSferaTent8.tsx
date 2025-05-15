import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { Separator } from "../../../../../../../components/ui/separator";

export const FrameSferaTent8 = (): JSX.Element => {
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

  // Benefits data
  const benefits = [
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

  return (
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
                  {benefits.map((benefit, index) => (
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
                  className="absolute top-1/2 left-[-28px] transform -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 flex items-center justify-center border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"                >
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
                  className="absolute top-1/2 left-[299px] transform -translate-y-1/2 w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 flex items-center justify-center border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"                >
                  
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
  );
};
