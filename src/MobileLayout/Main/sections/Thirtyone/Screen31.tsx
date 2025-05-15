import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for the feature points
const featurePoints = [
  {
    icon: "/group-1.png",
    title: "Посмотрите и потрогаете ткань вживую",
    description:
      "Оцените состояние металла каркаса на реальных объектах после нескольких лет воздействия осадков",
  },
  {
    icon: "/group-2.png",
    title: "Покажем последние тренды в дизайне и мировые наработки",
    description: "и технологии производства",
  },
  {
    icon: "/group-3.png",
    title: "Расскажем, как можно применить",
    description: "все самое современное для долгого срока службы",
  },
];

// Contact information data
const contactInfo = [
  {
    icon: <MapPinIcon className="w-3 h-3" />,
    title: "Московская область, г. Красногорск, ул. Молодежная. д. 4",
    subtitle: "Построить маршрут на Яндекс картах",
    subtitleClass: "text-[#527dc5] underline",
  },
  {
    icon: <ClockIcon className="w-3 h-3" />,
    title: (
      <>
        <span className="font-semibold">Пн-Пт</span> с 09:00 -19:00
      </>
    ),
    subtitle: "По предварительной записи",
    subtitleClass: "text-[#232c42]",
  },
  {
    icon: <PhoneIcon className="w-3 h-3" />,
    title: "+7 (499) 113-36-60",
  },
  {
    icon: <PhoneIcon className="w-3 h-3" />,
    title: "8 (800) 302-46-31",
  },
  {
    icon: <MailIcon className="w-3 h-3" />,
    title: "info@mobile-tent.ru",
    hasClipboard: true,
  },
];

export const Screen31 = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[375px] bg-white overflow-hidden">
      <div className="flex flex-col items-start gap-6 p-6">
        {/* Header text */}
        <div className="font-normal text-2xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
          <span className="font-semibold text-[#232c42]">
            Весь комплекс работ делаем на своем производстве{" "}
          </span>
          <span className="font-bold text-[#527dc5]">в г. Калуга</span>
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          {/* Visit badge */}
          <Badge className="flex items-center gap-4 p-3 bg-[#f2f4f7] text-[#4f5d80] rounded-[10px] font-medium hover:bg-[#f2f4f7]">
            <div className="relative w-[18px] h-[18px]">
              <img
                className="absolute w-[15px] h-[15px] top-0.5 left-px"
                alt="Group"
                src="/group.png"
              />
            </div>
            <span className="text-[11px] leading-4 [font-family:'Raleway',Helvetica]">
              Приезжайте на знакомство-экскурсию
            </span>
          </Badge>

          {/* Description text */}
          <div className="text-[#394355] text-[11px] leading-4 [font-family:'Raleway',Helvetica]">
            Увидите разницу китайской и французской ткани
            <br />
            на примере 2 конструкций стоящих уже несколько лет на улице
          </div>

          {/* Features card */}
          <Card className="w-full p-4 rounded-2xl shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]">
            <CardContent className="p-0">
              <div className="flex flex-col gap-6">
                {featurePoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-6 h-[17px] top-[3px] left-0"
                        alt="Feature icon"
                        src={point.icon}
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <div className="font-semibold text-[#4f5d80] text-[11px] leading-4 [font-family:'Raleway',Helvetica]">
                        {point.title}
                      </div>
                      <div className="font-normal text-[#4f5d80] text-[11px] leading-4 [font-family:'Raleway',Helvetica]">
                        {point.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Images section */}
      <div className="relative w-full h-56 px-6 mt-6">
        <div className="flex gap-4">
          <img
            className="w-[261px] h-56 object-cover rounded-lg"
            alt="Product showcase"
            src="/rectangle-65.png"
          />
          <img
            className="w-[75px] h-56 object-cover rounded-lg"
            alt="Product detail"
            src="/rectangle-66.png"
          />
        </div>
      </div>

      {/* Contact information card */}
      <Card className="mx-6 mt-6 p-[15px] rounded-[20px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px]">
        <CardContent className="p-0">
          <div className="flex flex-col gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-[17px]">
                <div className="flex w-[25px] h-[25px] items-center justify-center rounded-full [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <div className="font-normal text-[#394355] text-sm leading-normal [font-family:'Raleway',Helvetica]">
                    {item.title}
                    {item.hasClipboard && (
                      <img
                        className="inline-block w-4 h-4 ml-1"
                        alt="Copy"
                        src="/group-9.png"
                      />
                    )}
                  </div>
                  {item.subtitle && (
                    <div
                      className={`text-xs leading-normal [font-family:'Raleway',Helvetica] ${item.subtitleClass}`}
                    >
                      {item.subtitle}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Social media icons */}
            <div className="flex items-center gap-[18px]">
              <div className="relative w-7 h-7">
                <img
                  className="absolute w-6 h-5 top-1 left-0.5"
                  alt="Social media"
                  src="/group-10.png"
                />
              </div>
              <div className="relative w-7 h-7">
                <img
                  className="absolute w-[23px] h-[23px] top-[3px] left-[3px]"
                  alt="Social media"
                  src="/group-11.png"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
