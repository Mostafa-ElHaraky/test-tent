import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactInformationSection = (): JSX.Element => {
  // Client logos data
  const clientLogos = [
    {
      src: "/image-19.png",
      alt: "Sberbank logo",
      width: "300px",
      height: "42px",
      top: "30px",
      left: "-39px",
    },
    {
      src: "/image-20.png",
      alt: "VTB logo",
      width: "223px",
      height: "50px",
      top: "150px",
      left: "275px",
    },
    {
      src: "/image-22.png",
      alt: "Coca-Cola logo",
      width: "171px",
      height: "74px",
      top: "32px",
      left: "269px",
    },
    {
      src: "/image-21.png",
      alt: "Burger King logo",
      width: "178px",
      height: "100px",
      top: "115px",
      left: "55px",
    },
  ];

  return (
<Card 
  className="w-[1440px] h-[456px] absolute top-[2847px] left-0 rounded-[30px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] [-webkit-backdrop-filter:blur(158px)]"
>
        <CardContent className="p-0">
        <div className="flex flex-row h-full">
          {/* Left content */}
          <div className="flex flex-col items-start gap-9 pt-[123px] pl-12">
            <h2 className="w-[567px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-[#527dc5]">Наши клиенты крупные </span>
              <span className="text-[#232c42]">
                частные и государственные компании по всей России и СНГ
              </span>
            </h2>

            <div className="flex items-center gap-[5px]">
              <div className="flex items-start gap-3">
                <p className="w-fit mt-[-1.00px] font-normal text-[#232c42] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  Работаем по 44-ФЗ и 223-ФЗ. Можем заключить контракт,
                  <br />
                  как с единственным поставщиком в рамках этих законов
                </p>
              </div>
            </div>
          </div>

          {/* Right content with logos */}
          <div className="w-[684px] h-[391px] absolute left-[708px]">
          <div className="relative w-[684px] h-[391px]">
              <div className="relative h-[812px] top-[-421px] rounded-[342px]">
                <div className="absolute w-[481px] h-[234px] top-[456px] left-[88px]">
                  {clientLogos.map((logo, index) => (
                    <img
                      key={index}
                      className="absolute"
                      style={{
                        width: logo.width,
                        height: logo.height,
                        top: logo.top,
                        left: logo.left,
                      }}
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}
                </div>

                <div className="flex items-start gap-3 absolute top-[710px] left-[214px]">
                  <p className="w-fit mt-[-1.00px] font-normal text-[#4f5d80] text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="font-medium">и </span>
                    <span className="font-extrabold">еще 100+</span>
                    <span className="font-medium"> известных компаний</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-start gap-[45px] absolute top-[352px] left-[278px]">
              <Button
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                <div className="relative w-6 h-6 rotate-180">
                  <img
                    className="absolute w-3.5 h-6 top-0 left-[5px] -rotate-180"
                    alt="Previous"
                    src="/group-18.png"
                  />
                </div>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                >
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-3.5 h-6 top-0 left-[5px]"
                    alt="Next"
                    src="/group-19.png"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
