import React from "react";
import { Button } from "../../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../../components/ui/card";

export const OverlapWrapperAbout1 = (): JSX.Element => {
  // Company information data
  const companyInfo = {
    years: "12 лет",
    description:
      "Прошел путь от просто продажи шатров из Китая до создания предприятия в РФ с полным циклом производства",
    mission:
      "Делаю все, чтобы вы, ваши сотрудники и клиенты чувствовали себя комфортно, а ваш бизнес развивался без издержек на постоянные ремонты",
    values: [
      {
        icon: "/About1-group-7.png",
        text: {
          bold: "Контролирую соблюдение единых стандартов работы",
          regular: " всех сотрудников",
        },
      },
      {
        icon: "/About1-group-8.png",
        text: {
          bold: "Лично веду",
          regular: " ключевых клиентов",
        },
      },
    ],
    owner: {
      name: "Бородин Андрей",
      title: "руководитель компании",
    },
  };

  return (
    <main className="relative top-[470px]">
    <section className="relative w-full h-[488px] rounded-[30px] overflow-hidden">
      <div className="relative h-[562px]">
        {/* Background gradient */}
        <div className="absolute w-full h-[513px] top-[49px] left-0 rounded-[30px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]" />

        {/* Decorative images */}
        <img
          className="absolute w-[302px] h-[196px] top-[292px] left-0"
          alt="Decorative grass"
          src="/About1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--3.png"
        />

        <img
          className="absolute w-[505px] h-[488px] top-0 right-0"
          alt="Event tent"
          src="/About1-event-tent-i02-1.png"
        />

        {/* Main content */}
        <div className="inline-flex flex-col items-start gap-[55px] absolute top-[93px] left-[73px]">
          {/* Company description */}
          <div className="inline-flex flex-col items-start gap-6 relative">
            <h2 className="relative w-[401px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-[#232c42]">Уже </span>
              <span className="text-[#4377cd]">{companyInfo.years}</span>
              <span className="text-[#232c42]">
                {" "}
                в сфере тентовых конструкций
              </span>
            </h2>

            <p className="relative w-fit font-medium text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
              {companyInfo.description.split("до").map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index === 0 ? "до" : ""}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>

            <Card className="bg-white rounded-[10px] p-0 border-none shadow-none">
              <CardContent className="px-5 py-3">
                <p className="relative w-[520px] mt-[-1.00px] font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                  {companyInfo.mission}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company values */}
          <div className="flex w-[560px] items-start justify-between relative">
            {companyInfo.values.map((value, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 relative"
              >
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-6 h-[17px] top-[3px] left-0"
                    alt={`Value icon ${index + 1}`}
                    src={value.icon}
                  />
                </div>

                <div className="relative w-fit mt-[-1.00px] font-normal text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold">{value.text.bold}</span>
                  <span className="font-medium">{value.text.regular}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Owner image */}
        <img
          className="w-[411px] h-[480px] top-2 left-[794px] absolute object-cover"
          alt="Company owner portrait"
          src="/About1-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at-3.png"
        />

        {/* Owner introduction */}
        <Button
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute top-[392px] left-[782px] rounded-[10px] overflow-hidden [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] h-auto"
          variant="default"
        >
          <div className="relative w-fit mt-[-1.00px] font-normal text-lg text-center leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="font-medium text-white">
              Здравствуйте, меня зовут{" "}
            </span>
            <span className="font-bold text-white">
              {companyInfo.owner.name}
              <br />
            </span>
            <span className="font-medium text-white">
              Я {companyInfo.owner.title}
            </span>
          </div>
        </Button>

        {/* Video button */}
        <Card className="inline-flex flex-col items-start gap-2.5 px-6 py-3 absolute top-[273px] left-[1120px] bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-0">
            <div className="gap-[15px] inline-flex items-center relative">
              <div className="relative w-[50px] h-[50px]">
                <div className="relative w-[47px] h-[33px] top-[9px] left-0.5">
                  <div className="relative h-[33px]">
                    <div className="absolute w-[23px] h-[23px] top-[5px] left-3 bg-white rounded-[11.5px]" />
                    <img
                      className="absolute w-[47px] h-[33px] top-0 left-0"
                      alt="Video icon"
                      src="/About1-vector.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-fit font-bold text-[#232c42] text-base leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                Видео
                <br />о компании
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom right decorative image */}
        <img
          className="absolute w-[418px] h-[259px] top-[229px] left-[1022px]"
          alt="Decorative grass"
          src="/About1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--4.png"
        />
      </div>
    </section>
    </main>
  );
};
