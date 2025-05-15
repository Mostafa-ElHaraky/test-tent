import { Card, CardContent } from "../../../../components/ui/card";

export const Screen13 = (): JSX.Element => {
  // Data for the weather resistance features
  const features = [
    {
      id: 1,
      name: "Ветер",
      icon: "/clip-path-group.png",
      active: true,
    },
    {
      id: 2,
      name: "Дождь, снег, град",
      icon: "/group.png",
      active: false,
    },
    {
      id: 3,
      name: "Огонь",
      icon: "/group-1.png",
      active: false,
    },
  ];

  return (
    <div className="relative w-full max-w-[375px] h-[284px] bg-white">
      <div className="relative h-56 top-[30px] rounded-[30px] bg-[#394355]">
        <h2 className="absolute w-[337px] top-[29px] left-[19px] text-2xl text-center leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
          <span className="font-medium text-white">Нашим </span>
          <span className="font-bold text-[#86b4ff]">шатрам не страшны</span>
        </h2>

        <div className="flex flex-col w-[327px] items-start absolute top-[78px] left-6">
          <Card className="w-full rounded-[20px] border-none">
            <CardContent className="p-0">
              <div className="flex items-start justify-between gap-5 p-[15px]">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex flex-col items-center gap-[9px]"
                  >
                    <div className="relative w-14 h-14 rounded-[28px] bg-[#f0f5ff] flex items-center justify-center">
                      {feature.id === 1 && (
                        <div className="relative w-[30px] h-[30px] bg-[url(/clip-path-group.png)] bg-[100%_100%]" />
                      )}
                      {feature.id === 2 && (
                        <img
                          className="w-[29px] h-[26px]"
                          alt={feature.name}
                          src={feature.icon}
                        />
                      )}
                      {feature.id === 3 && (
                        <img
                          className="w-6 h-8"
                          alt={feature.name}
                          src={feature.icon}
                        />
                      )}
                    </div>
                    <div
                      className={`font-semibold text-base leading-5 text-center [font-family:'Raleway',Helvetica] tracking-[0] ${
                        feature.active ? "text-[#527dc5]" : "text-[#394355]"
                      }`}
                    >
                      {feature.name}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
