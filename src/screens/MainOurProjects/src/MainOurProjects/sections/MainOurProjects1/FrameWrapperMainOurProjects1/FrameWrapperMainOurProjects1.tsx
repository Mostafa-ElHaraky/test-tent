import { Card, CardContent } from "../../../../../../../components/ui/card";

export const FrameWrapperMainOurProjects1 = (): JSX.Element => {
  // Hotel data array to map over
  const hotelData = [
    {
      id: 1,
      name: "SPA отель Мриан бей",
      city: "Москва",
      area: "250 м2",
      image: "/RectangleOurProjects.png",
    },
    {
      id: 2,
      name: "SPA отель Мриан бей",
      city: "Москва",
      area: "250 м2",
      image: "/RectangleOurProjects.png",
    },
    {
      id: 3,
      name: "SPA отель Мриан бей",
      city: "Москва",
      area: "250 м2",
      image: "/RectangleOurProjects.png",
    },
    {
      id: 4,
      name: "SPA отель Мриан бей",
      city: "Москва",
      area: "250 м2",
      image: "/RectangleOurProjects.png",
    },
    {
      id: 5,
      name: "SPA отель Мриан бей",
      city: "Москва",
      area: "250 м2",
      image: "/RectangleOurProjects.png",
    },
    {
      id: 6,
      name: "SPA отель Мриан бей",
      city: "Москва",
      area: "250 м2",
      image: "/RectangleOurProjects.png",
    },
  ];

  // Create rows of 3 cards each
  const rows = [];
  for (let i = 0; i < hotelData.length; i += 3) {
    rows.push(hotelData.slice(i, i + 3));
  }

  return (
    <div className="relative bottom-[600px] ">
    <section className="flex flex-col gap-6 w-full">
      {rows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex flex-wrap gap-6">
          {row.map((hotel) => (
            <Card
              key={hotel.id}
              className="w-[432px] h-[309px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${hotel.image})` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col h-[255px] justify-between p-[30px]">
                  <div className="flex flex-col gap-5">
                    <h3 className="font-semibold text-white text-lg [font-family:'Raleway',Helvetica]">
                      {hotel.name}
                    </h3>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex gap-2">
                        <span className="font-normal text-white text-base [font-family:'Raleway',Helvetica]">
                          Город:
                        </span>
                        <span className="font-semibold text-white text-base [font-family:'Raleway',Helvetica]">
                          {hotel.city}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <span className="font-normal text-white text-base [font-family:'Raleway',Helvetica]">
                          Площадь:
                        </span>
                        <span className="font-semibold text-white text-base [font-family:'Raleway',Helvetica]">
                          {hotel.area}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="font-semibold text-white text-lg [font-family:'Raleway',Helvetica]">
                    Подробнее
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </section>
    </div>
  );
};
