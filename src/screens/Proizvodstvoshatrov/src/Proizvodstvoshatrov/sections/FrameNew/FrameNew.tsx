import { Card, CardContent } from "../../../../../../components/ui/card";

export const FrameNew = (): JSX.Element => {
  // Data for the feature points
  const featurePoints = [
    {
      id: 1,
      icon: "/group-1.png",
      title: "Посмотрите и потрогаете ткань вживую",
      description:
        "Оцените состояние металла каркаса на реальных объектах после нескольких лет воздействия осадков",
    },
    {
      id: 2,
      icon: "/group-2.png",
      title: "Покажем последние тренды в дизайне и мировые наработки",
      description: "и технологии производства",
    },
    {
      id: 3,
      icon: "/group-3.png",
      title: "Расскажем, как можно применить",
      description: "все самое современное для долгого срока службы",
    },
  ];

  return (
    <section className="w-full max-w-[1344px] mx-auto py-12 flex flex-col md:flex-row gap-12">
      {/* Left content */}
      <div className="flex-1">
        <h2 className="text-4xl font-[Raleway,Helvetica] tracking-[0]">
          <span className="font-semibold text-[#232c42]">
            Весь комплекс работ делаем
            <br />
            на своем производстве{" "}
          </span>
          <span className="font-bold text-[#527dc5]">в г. Калуга</span>
        </h2>

        <div className="flex flex-col gap-9 mt-[117px]">
          <div className="flex items-center gap-4 p-3 bg-white rounded-[10px]">
            <div className="relative w-[35px] h-[35px]">
              <img
                className="absolute w-[30px] h-[29px] top-[3px] left-[3px]"
                alt="Group"
                src="/group.png"
              />
            </div>

            <div className="flex items-start gap-3">
              <p className="font-medium text-[#4f5d80] text-lg leading-6 font-[Raleway,Helvetica] tracking-[0]">
                Приезжайте на знакомство-экскурсию
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-normal text-[#394355] text-lg leading-6 font-[Raleway,Helvetica] tracking-[0] max-w-[557px]">
              Увидите разницу китайской и французской ткани
              <br />
              на примере 2 конструкций стоящих уже несколько лет на улице
            </p>
          </div>

          <Card className="w-full max-w-[556px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] rounded-2xl">
            <CardContent className="p-6">
              <div className="flex flex-col gap-6 max-w-[411px]">
                {featurePoints.map((point) => (
                  <div key={point.id} className="flex items-start gap-3">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-6 h-[17px] top-[3px] left-0"
                        alt="Group"
                        src={point.icon}
                      />
                    </div>

                    <div className="flex flex-col items-start justify-center gap-2">
                      <p className="font-semibold text-[#4f5d80] text-sm leading-5 font-[Raleway,Helvetica] tracking-[0]">
                        {point.title}
                      </p>
                      <p className="font-normal text-[#4f5d80] text-sm leading-5 font-[Raleway,Helvetica] tracking-[0]">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right content - Video player */}
      <div className="flex-1 flex items-end">
        <Card className="w-full max-w-[656px] h-[473px] bg-white rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] relative">
          <CardContent className="p-0 h-full flex items-center justify-center">
            <div className="relative w-[75px] h-[75px] bg-[#f5f6ff] rounded-[37.5px] flex items-center justify-center">
              <img
                className="w-[25px] h-[29px]"
                alt="Play button"
                src="/polygon-2.svg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
