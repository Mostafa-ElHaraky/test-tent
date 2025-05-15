import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for filter options
const filterOptions = [
  { id: 1, label: "Текстовые" },
  { id: 2, label: "Отзовики" },
  { id: 3, label: "Благодарственные письма" },
];

// Testimonial data
const testimonial = {
  text: "Покупка не бюджетного шатра стоило того. Шатер выдерживает нагрузки ветра и не пахнет на солнце, как предыдущий",
  author: "Максимова Н.В. генеральный директор",
  images: [
    { src: "/rectangle-57.png", alt: "Tent image 1" },
    { src: "/rectangle-58.png", alt: "Tent image 2" },
  ],
};

export const Screen27 = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[375px] h-[656px] bg-white p-6">
      <header className="flex flex-col items-start gap-3">
        <h1 className="font-semibold text-2xl [font-family:'Raleway',Helvetica] tracking-[0]">
          <span className="text-[#232c42]">Уже </span>
          <span className="text-[#527dc5]">800+ компаний купили</span>
          <span className="text-[#232c42]"> наши шатры</span>
        </h1>

        <div className="flex items-center gap-2.5">
          <div className="relative w-[27px] h-[27px]">
            <img
              className="absolute w-[25px] h-[25px] top-px left-px"
              alt="Group"
              src="/group.png"
            />
          </div>
          <p className="font-medium text-[#4f5d80] text-base leading-4 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
            Пишут реальные отзывы
          </p>
        </div>
      </header>

      <div className="flex items-start gap-3 mt-[95px] overflow-x-auto">
        {filterOptions.map((option) => (
          <Badge
            key={option.id}
            variant="outline"
            className="px-6 py-3 bg-[#e1ecff] rounded-[50px] shadow-[var(--)] backdrop-blur-[79px] font-semibold text-[#394355] text-[11px] [font-family:'Raleway',Helvetica]"
          >
            {option.label}
          </Badge>
        ))}
      </div>

      <Card className="mt-[30px] w-[325px] h-[311px] rounded-[20px] shadow-[var(--)] backdrop-blur-[79px]">
        <CardContent className="p-5">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-start gap-2.5">
              {testimonial.images.map((image, index) => (
                <img
                  key={index}
                  className="w-[133px] h-[131px] object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="relative w-[23px] h-[23px] -rotate-180">
                <img
                  className="absolute w-[17px] h-[13px] top-[7px] left-[3px] rotate-180"
                  alt="Quote icon"
                  src="/group-1.png"
                />
              </div>

              <div className="flex flex-col items-start gap-3">
                <p className="w-[270px] font-normal text-[#4f5d80] text-[11px] leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
                  {testimonial.text}
                </p>

                <p className="font-semibold text-[#4f5d80] text-sm leading-4 [font-family:'Raleway',Helvetica] tracking-[0]">
                  {testimonial.author}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-center gap-[45px] mt-[24px]">
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] flex items-center justify-center"
        >
          <ChevronLeftIcon className="h-6 w-3.5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] flex items-center justify-center"
        >
          <ChevronRightIcon className="h-6 w-3.5" />
        </Button>
      </div>
    </div>
  );
};
