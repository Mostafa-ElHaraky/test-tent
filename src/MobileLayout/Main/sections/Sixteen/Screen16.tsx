import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen16 = (): JSX.Element => {
  // Data for bullet points
  const bulletPoints = [
    {
      text: "Закупаем оптовые объемы и даем вам цену ниже, чем другие компании",
      isBold: false,
    },
    {
      text: "С нами вы купите официальную продукцию, а не получаете китайскую под видом европейской",
      isBold: true,
    },
  ];

  // Data for fabric quality points
  const qualityPoints = [
    {
      text: "Компания DICKSON основана в 1969 году",
      imageSrc: "/group.png",
    },
    {
      text: "Выпускает 25 000 000+ м2 ткани в год",
      imageSrc: "/group-1.png",
    },
  ];

  return (
    <div className="relative w-full max-w-[375px] h-[903px] bg-white mx-auto">
      <div className="relative h-[841px] pt-[30px]">
        <div className="relative w-full h-[841px]">
          {/* Background image */}
          <img
            className="absolute w-full h-[290px] top-[472px] left-0"
            alt="Fabric background"
            src="/rectangle-43.png"
          />

          {/* Main content container */}
          <div className="flex flex-col items-center gap-6 absolute top-0 left-[22px] right-[22px]">
            {/* Headline text */}
            <h1 className="w-full font-semibold text-2xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-[#232c42]">
                Ткань тента приспособлена для работы{" "}
              </span>
              <span className="text-[#527dc5]">
                в самых жестких условиях эксплуатации. Даже в суровом климате
                России
              </span>
            </h1>

            {/* Brand highlight card */}
            <Card className="w-full bg-[#f2f4f7] rounded-[10px] border-none">
              <CardContent className="flex flex-col items-start justify-center gap-2 p-3">
                <div className="flex items-start gap-3">
                  <p className="font-medium text-[#4f5d80] text-[11px] leading-4 [font-family:'Raleway',Helvetica]">
                    Используем профессиональный французский бренд
                  </p>
                </div>
                <div className="flex w-[130px] h-[39px] items-center gap-2.5 p-3 rounded-[10px] overflow-hidden [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                  <span className="w-fit font-extrabold text-white text-2xl [font-family:'Raleway',Helvetica] tracking-[0] leading-6 whitespace-nowrap">
                    DICKSON
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Bullet points */}
            <div className="flex flex-col items-start gap-3 w-full">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative w-[13px] h-[13px] rounded-[6.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                  <p
                    className={`w-[300px] text-[#394355] text-[11px] leading-4 [font-family:'Raleway',Helvetica] tracking-[0] ${point.isBold ? "font-semibold" : "font-normal"}`}
                  >
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Quality card */}
            <Card className="w-full rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] border-none">
              <CardContent className="flex flex-col items-start gap-2.5 p-3">
                <div className="flex flex-col items-start gap-6 w-full">
                  <h2 className="font-semibold text-[#242f57] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    Лучшая ткань в мире по цене-качеству
                  </h2>

                  <div className="flex w-full items-start gap-[15px]">
                    {qualityPoints.map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="relative w-4 h-4">
                          <img
                            className="absolute w-4 h-3 top-0.5 left-0"
                            alt="CheckIcon mark"
                            src={point.imageSrc}
                          />
                        </div>
                        <p className="font-semibold text-[#4f5d80] text-[11px] leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fabric samples */}
          <div className="absolute w-[158px] h-[95px] top-[510px] left-6">
            <div className="relative w-[198px] h-[135px] -top-2 -left-5">
              <img
                className="absolute w-[109px] h-[135px] top-0 left-0"
                alt="Fabric sample 1"
                src="/rectangle-44.png"
              />
              <img
                className="absolute w-[109px] h-[135px] top-0 left-[45px]"
                alt="Fabric sample 2"
                src="/rectangle-45.png"
              />
              <img
                className="absolute w-[109px] h-[135px] top-0 left-[90px]"
                alt="Fabric sample 3"
                src="/rectangle-46.png"
              />
            </div>
          </div>

          {/* Bottom buttons */}
          <div className="flex flex-col items-start gap-6 absolute top-[694px] left-6">
            {/* Partners badge */}
            <Badge className="flex items-center gap-2 px-6 py-3 bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <div className="relative w-[31px] h-[31px]">
                <div className="relative w-[27px] h-[27px] top-0.5 left-0.5">
                  <img
                    className="absolute w-[25px] h-[27px] top-0 left-px"
                    alt="Partners icon"
                    src="/group-2.png"
                  />
                </div>
              </div>
              <span className="font-bold text-[#232c42] text-sm leading-normal whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                Официальные партнеры компании
              </span>
            </Badge>

            {/* DownloadIcon button */}
            <Button className="w-[327px] h-[68px] rounded-2xl border-none shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] p-0">
              <div className="flex items-center gap-[15px] px-[17px]">
                <div className="relative w-[50px] h-[50px] flex items-center justify-center">
                  <div className="relative w-[35px] h-[35px] bg-[url(/group-3.png)] bg-[100%_100%]" />
                </div>
                <span className="font-bold text-white text-base leading-normal whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  Скачать документы на ткань
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
