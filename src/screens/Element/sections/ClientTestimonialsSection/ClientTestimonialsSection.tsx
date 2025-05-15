import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Testimonial data
  const testimonial = {
    text: "Покупка не бюджетного шатра стоило того. Шатер выдерживает нагрузки ветра и не пахнет на солнце, как предыдущий",
    author: "Максимова Н.В. генеральный директор",
    images: ["/rectangle-57.png", "/rectangle-58.png"],
  };

  // Tab options
  const tabOptions = [
    { id: "text", label: "Текстовые" },
    { id: "letters", label: "Благодарственные письма" },
    { id: "reviews", label: "Отзовики" },
  ];

  return (
<section className="w-[1344px] h-[443px] absolute top-[2259px] left-[48px] flex flex-col items-end gap-[36px]">
<div className="w-[1344px] h-[81px] flex items-center gap-[62px]">
        <div className="flex flex-col items-start gap-3">
          <h2 className="font-semibold text-4xl font-['Raleway',Helvetica]">
            <span className="text-[#232c42]">Уже </span>
            <span className="text-[#527dc5]">800+ компаний купили</span>
            <span className="text-[#232c42]"> наши шатры</span>
          </h2>

          <div className="flex items-center gap-[5px]">
            <div className="relative w-[27px] h-[27px]">
              <img
                className="absolute w-[25px] h-[25px] top-px left-px"
                alt="Group"
                src="/group-14.png"
              />
            </div>
            <p className="font-medium text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
              Пишут реальные отзывы
            </p>
          </div>
        </div>

        <Tabs defaultValue="text" className="flex items-start gap-6">
          <TabsList className="bg-transparent p-0 gap-6">
            {tabOptions.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-6 py-3 bg-[#e1ecff] rounded-[50px] shadow-[var(--)] backdrop-blur-[79px] text-[#394355] text-base font-semibold font-['Raleway',Helvetica] data-[state=active]:bg-[#e1ecff]"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <Card 
  className="w-[1343px] h-[326px] bg-white rounded-[20px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] relative"
>
          <CardContent className="p-0">
          <div className="flex items-start gap-6 absolute top-[43px] left-10">
            <div className="relative w-[59px] h-[59px] -rotate-180">
              <img
                className="absolute w-11 h-[33px] top-[18px] left-[7px] rotate-180"
                alt="Group"
                src="/group-15.png"
              />
            </div>

            <div className="flex flex-col items-start gap-9">
              <p className="w-[570px] font-normal text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                {testimonial.text}
              </p>
              <p className="font-semibold text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                {testimonial.author}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-[26px] absolute top-10 left-[785px]">
            {testimonial.images.map((image, index) => (
              <img
                key={index}
                className="w-[246px] h-[246px] object-cover"
                alt={`Testimonial image ${index + 1}`}
                src={image}
              />
            ))}
          </div>

          <div className="flex items-start gap-[45px] absolute top-[233px] left-12">
            <Button
              variant="outline"
              className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
              >
              <div className="relative w-6 h-6 rotate-180">
                <img
                  className="absolute w-3.5 h-6 top-0 left-[5px] -rotate-180"
                  alt="Previous"
                  src="/group-16.png"
                />
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
              >
              <div className="relative w-6 h-6">
                <img
                  className="absolute w-3.5 h-6 top-0 left-[5px]"
                  alt="Next"
                  src="/group-17.png"
                />
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
