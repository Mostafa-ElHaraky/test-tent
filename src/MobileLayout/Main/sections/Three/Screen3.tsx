import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Promotion data for mapping
const promotions = [
  {
    id: 1,
    title: "ДЕРЕВЯННЫЕ ШАТРЫ",
    discount: "-10%",
    description: "Нанесение логотипа в подарок",
    validUntil: "23.03.24",
    images: {
      clouds: "/08-clouds-2.png",
      ball: "/ball-percent-3d-red-------2-1.png",
      grass:
        "/green-grass-texture-with-blang-copyspace-against-blue-sky-------.png",
      main: "/0-1-1.png",
      ornamental:
        "/vecteezy-ornamental-grass-template-generative-ai-generated-24190-1.png",
      calendar: "/group.png",
    },
    theme: "dark",
    badgeStyle: "bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]",
  },
  {
    id: 2,
    title: "ДОСТАВКА ШАТРА В ПОДАРК",
    badge: "ЛОГОТИП",
    description: "нанесение логотипа в подарок",
    validUntil: "23.03.24",
    images: {
      clouds: "/08-clouds-1.png",
      ball1: "/ball-percent-3d-red-------2-2.png",
      ball2: "/ball-percent-3d-red-------3.png",
      grass:
        "/green-grass-texture-with-blang-copyspace-against-blue-sky--------1.png",
      calendar: "/group-1.png",
    },
    theme: "light",
    badgeStyle: "bg-gradient-to-br from-[#243057] to-[#374255]",
  },
];

export const Screen3 = (): JSX.Element => {
  return (
    <main className="relative w-full max-w-[375px] h-[868px] bg-white mx-auto">
      <section className="flex flex-col items-center gap-6 pt-[30px] px-6">
        <h1 className="font-semibold text-[#232c42] text-2xl text-center [font-family:'Raleway',Helvetica]">
          Акции
        </h1>

        <div className="flex flex-col items-start gap-4">
          {/* First Promotion Card */}
          <Card className="w-[326px] h-[332px] rounded-[30px] shadow-[0px_24px_38px_#161d2414] overflow-hidden">
            <CardContent className="p-0 h-full relative">
              <div className="relative h-full rounded-[20px] overflow-hidden">
                {/* Background Images */}
                <img
                  className="absolute w-full h-[248px] top-[53px] left-0"
                  alt="Element clouds"
                  src={promotions[0].images.clouds}
                />
                <img
                  className="absolute w-[99px] h-[189px] top-[143px] left-0"
                  alt="Ball PERCENT RED"
                  src={promotions[0].images.ball}
                />
                <img
                  className="absolute w-full h-full top-0 left-0 object-cover"
                  alt="Green grass texture"
                  src={promotions[0].images.grass}
                />
                <img
                  className="absolute w-full h-[263px] top-[69px] left-0 object-cover"
                  alt="Element"
                  src={promotions[0].images.main}
                />
                <img
                  className="w-[197px] h-[154px] top-[178px] blur-[2px] absolute left-0 object-cover"
                  alt="Vecteezy ornamental"
                  src={promotions[0].images.ornamental}
                />

                {/* Content */}
                <div className="inline-flex flex-col items-start gap-3 absolute top-6 left-6">
                  <h2 className="font-bold text-white text-2xl whitespace-nowrap [font-family:'Raleway',Helvetica]">
                    {promotions[0].title}
                  </h2>

                  <div className="inline-flex items-center gap-4">
                    <Badge
                      className={`h-11 px-6 py-2 rounded-lg ${promotions[0].badgeStyle}`}
                    >
                      <span className="font-bold text-white text-2xl whitespace-nowrap [font-family:'Raleway',Helvetica]">
                        {promotions[0].discount}
                      </span>
                    </Badge>

                    <span className="font-medium text-white text-[11px] w-[109px] [font-family:'Raleway',Helvetica]">
                      {promotions[0].description}
                    </span>
                  </div>
                </div>

                {/* Valid Until Badge */}
                <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 absolute bottom-[30px] left-[30px] bg-[#00000030] rounded-[50px] backdrop-blur-[79px]">
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-4 h-4 top-1 left-1"
                      alt="Calendar"
                      src={promotions[0].images.calendar}
                    />
                  </div>
                  <span className="[font-family:'Raleway',Helvetica] font-medium text-white text-base">
                    Действительна до: {promotions[0].validUntil}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Second Promotion Card */}
          <Card className="w-[326px] h-[324px] rounded-[20px] overflow-hidden shadow-[0px_24px_38px_#161d2414]">
            <CardContent className="p-0 h-full relative">
              <div className="absolute w-full h-[379px] top-[-55px] left-0 rounded-[30px]">
                {/* Background Images */}
                <img
                  className="absolute w-[121px] h-[115px] top-[181px] left-[205px]"
                  alt="Ball PERCENT RED"
                  src={promotions[1].images.ball1}
                />
                <img
                  className="absolute w-[126px] h-32 top-[126px] left-[39px]"
                  alt="Ball PERCENT RED"
                  src={promotions[1].images.ball2}
                />
                <img
                  className="absolute w-[309px] h-[261px] top-[55px] left-[17px]"
                  alt="Element clouds"
                  src={promotions[1].images.clouds}
                />
                <img
                  className="absolute w-full h-[323px] top-14 left-0"
                  alt="Green grass texture"
                  src={promotions[1].images.grass}
                />

                {/* Content */}
                <div className="flex flex-col w-[254px] items-start gap-3 absolute top-20 left-6">
                  <h2 className="font-bold text-[#232c42] text-2xl [font-family:'Raleway',Helvetica] w-[234px]">
                    {promotions[1].title}
                  </h2>

                  <div className="inline-flex items-center gap-4">
                    <Badge
                      className={`h-11 px-6 py-2 rounded-lg ${promotions[1].badgeStyle}`}
                    >
                      <span className="font-bold text-white text-xl whitespace-nowrap [font-family:'Raleway',Helvetica]">
                        {promotions[1].badge}
                      </span>
                    </Badge>

                    <span className="font-medium text-[#394355] text-[11px] w-[107px] [font-family:'Raleway',Helvetica]">
                      {promotions[1].description}
                    </span>
                  </div>
                </div>

                {/* Valid Until Badge */}
                <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 absolute bottom-[30px] left-[30px] bg-[#00000030] rounded-[50px] backdrop-blur-[79px]">
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-4 h-4 top-1 left-1"
                      alt="Calendar"
                      src={promotions[1].images.calendar}
                    />
                  </div>
                  <span className="[font-family:'Raleway',Helvetica] font-medium text-white text-base">
                    Действительна до: {promotions[1].validUntil}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-6 absolute bottom-[70px] left-1/2 transform -translate-x-1/2">
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] flex items-center justify-center"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] flex items-center justify-center"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </div>
    </main>
  );
};
