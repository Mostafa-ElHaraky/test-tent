import { Card, CardContent } from "../../../../../../../components/ui/card";

export const GroupWrapperMembrannye3 = (): JSX.Element => {
  // Data for tent types to enable mapping
  const tentTypes = [
    { id: 1, image: "/Shatry3-star-tent-h02-1.png", title: "Арочные шатры" },
    { id: 2, image: "/Shatry3-star-tent-h02-1.png", title: "Арочные шатры" },
    { id: 3, image: "/Shatry3-star-tent-h02-1.png", title: "Арочные шатры" },
    { id: 4, image: "/Shatry3-star-tent-h02-1.png", title: "Арочные шатры" },
    { id: 5, image: "/Shatry3-star-tent-h02-1.png", title: "Арочные шатры" },
    { id: 6, image: "/Shatry3-star-tent-h02-1.png", title: "Арочные шатры" },
    { id: 7, image: "/Shatry3-star-tent-h02-1.png", title: "Арочные шатры" },
    { id: 8, image: "/Shatry3-star-tent-h02-1.png", title: "Арочные шатры" },
  ];

  return (
<section className="w-full py-16 px-12">
<div className="flex flex-col items-start gap-9">
        <h2 className="font-semibold text-4xl text-[#232c42] font-['Raleway',Helvetica]">
          Посмотрите другие типы шатров
        </h2>

        <Card className="w-full shadow backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] rounded-[20px]">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tentTypes.map((tent) => (
                <div key={tent.id} className="flex flex-col gap-3">
                  <div className="bg-[#f5f6ff] rounded-[10px] p-2.5 px-4">
                    <div className="flex items-start gap-2">
                      <img
                        className="w-[43px] h-[33px]"
                        alt="Star tent"
                        src={tent.image}
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-[#527dc5] text-xl leading-6 font-['Raleway',Helvetica]">
                          {tent.title}
                        </h3>
                        <a
                          href="#"
                          className="font-normal text-[#394355] text-base leading-6 underline font-['Raleway',Helvetica]"
                        >
                          Смотреть
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
