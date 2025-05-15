import { Card, CardContent } from "../../../../../../../components/ui/card";

export const GroupTuristicheskie5 = (): JSX.Element => {
  // Data for testimonial cards
  const testimonialCards = [
    {
      id: 1,
      title: "Ветер",
      iconPath: "/Clip-path-group.png",
      isImage: false,
      width: "260px",
      height: "116px",
    },
    {
      id: 2,
      title: "Дождь, снег, град",
      iconPath: "/GROP.png",
      isImage: true,
      width: "391px",
      height: "116px",
    },
    {
      id: 3,
      title: "Огонь",
      iconPath: "/GROP-1.png",
      isImage: true,
      width: "260px",
      height: "116px",
    },
  ];

  return (
    <section className="relative w-full py-12 rounded-[30px] bg-[#394355]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
          <h2 className="text-4xl leading-normal font-normal">
  <span className="font-normal text-white">Нашим </span>
  <span className="font-bold text-[#86b4ff]">шатрам<br /></span>
  <span className="font-bold text-[#86b4ff]">не страшны</span>
</h2>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-[35px] justify-center">
  {testimonialCards.map((card) => (
    <Card
      key={card.id}
      className="w-[260px] h-[116px] bg-white rounded-[20px] shadow-none"
    >
      <CardContent className="p-0 flex items-center">
        <div
          className="w-[90px] h-[90px] rounded-[45px] flex items-center justify-center ml-[13px] my-[13px]"
          style={{
            background: "linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #3C6CEC 100%)",
          }}
        >
          {card.isImage ? (
            <img
              className={`w-${card.width} h-${card.height}`}
              alt={card.title}
              src={card.iconPath}
            />
          ) : (
            <div className="w-12 h-12 bg-[url(/Clip-path-group.png)] bg-[100%_100%]" />
          )}
        </div>
        <div className="font-bold text-2l text-[#394355] leading-5 ml-6 font-['Raleway',Helvetica]">
          {card.title}
        </div>
      </CardContent>
    </Card>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};
