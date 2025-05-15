import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Client logos data
const clientLogos = [
  {
    id: 1,
    src: "/image-19.png",
    alt: "Sberbank logo",
    width: "150px",
    height: "25px",
  },
  {
    id: 2,
    src: "/image-20.png",
    alt: "Coca-Cola logo",
    width: "87px",
    height: "29px",
  },
  {
    id: 3,
    src: "/image-22.png",
    alt: "VTB logo",
    width: "100px",
    height: "43px",
  },
  {
    id: 4,
    src: "/image-21.png",
    alt: "Burger King logo",
    width: "46px",
    height: "46px",
  },
];

export const Screen28 = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[375px] h-[565px] bg-white mx-auto">
      <Card className="relative h-[505px] mt-[30px] rounded-[30px] border-none">
        <CardContent className="p-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-[22px] font-['Raleway',Helvetica] tracking-[0]">
              <span className="text-[#527dc5]">Наши клиенты крупные </span>
              <span className="text-[#232c42]">
                частные и государственные компании по всей России и СНГ
              </span>
            </h2>

            <p className="text-sm text-[#232c42] leading-4 font-['Raleway',Helvetica]">
              Работаем по 44-ФЗ и 223-ФЗ. Можем заключить контракт, как с
              единственным поставщиком в рамках этих законов
            </p>
          </div>

          {/* Gradient overlay */}
          <div className="absolute w-[183px] h-[375px] top-[92px] left-24 rotate-90 [background:linear-gradient(180deg,rgba(255,255,255,1)_57%,rgba(255,255,255,1)_100%)]" />

          {/* Client logos section */}
          <div className="mt-[120px] ml-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-6">
                <img
                  className="w-[150px] h-[25px]"
                  alt={clientLogos[0].alt}
                  src={clientLogos[0].src}
                />
                <img
                  className="w-[87px] h-[29px]"
                  alt={clientLogos[1].alt}
                  src={clientLogos[1].src}
                />
              </div>

              <div className="flex items-start gap-6">
                <img
                  className="w-[100px] h-[43px]"
                  alt={clientLogos[2].alt}
                  src={clientLogos[2].src}
                />
                <img
                  className="w-[46px] h-[46px]"
                  alt={clientLogos[3].alt}
                  src={clientLogos[3].src}
                />
              </div>
            </div>
          </div>

          {/* Additional text */}
          <p className="absolute top-[331px] left-[76px] text-sm text-[#4f5d80] font-['Raleway',Helvetica] tracking-[0]">
            <span className="font-medium leading-4">и </span>
            <span className="font-extrabold leading-4">еще 100+</span>
            <span className="font-medium leading-4"> известных компаний</span>
          </p>

          {/* Navigation buttons */}
          <div className="flex items-center gap-[45px] absolute bottom-[56px] left-[109px]">
            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] p-0"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] p-0"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
