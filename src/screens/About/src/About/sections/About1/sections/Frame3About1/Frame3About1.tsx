import { Button } from "../../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../../components/ui/card";

export const Frame3About1 = (): JSX.Element => {
  // Data for the carousels
  const carousels = [
    {
      id: "diplomas",
      label: "Дипломы",
      buttonClass: "bg-[#527dc5] hover:bg-[#4269af]",
      images: [
        { src: "/About1-rectangle-44.png", alt: "Diploma 1" },
        { src: "/About1-rectangle-45.png", alt: "Diploma 2" },
        { src: "/About1-rectangle-46.png", alt: "Diploma 3" },
      ],
      leftOffset: "left-12",
    },
    {
      id: "certificates",
      label: "Сертификаты",
      buttonClass:
        "[background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] hover:opacity-90",
      images: [
        { src: "/About1-rectangle-44-1.png", alt: "Certificate 1" },
        { src: "/About1-rectangle-45-1.png", alt: "Certificate 2" },
        { src: "/About1-rectangle-46-1.png", alt: "Certificate 3" },
      ],
      leftOffset: "left-[62px]",
    },
  ];

  return (
    <main className="relative top-[650px] ">
    <section className="flex flex-col items-center gap-[45px] w-full py-12">
      <div className="flex flex-col w-full max-w-[690px] items-center gap-3">
        <h2 className="font-semibold text-4xl text-center leading-normal font-['Raleway',Helvetica] tracking-[0]">
          <span className="text-[#527dc5]">Участвуем</span>
          <span className="text-[#232c42]"> в конференциях и выставках</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-[45px]">
        {carousels.map((carousel) => (
          <Card
            key={carousel.id}
            className="w-full max-w-[110px] border-none shadow-none"
          >
            <CardContent className="p-0 relative h-[328px]">
              <div
                className={`relative w-[548px] h-[328px] ${carousel.leftOffset}`}
              >
                <div className="relative w-[624px] h-[404px] -top-3.5 left-[-38px]">
                  {carousel.images.map((image, index) => (
                    <img
                      key={index}
                      className={`absolute w-[314px] h-[404px] top-0 left-[${index * 155}px]`}
                      alt={image.alt}
                      src={image.src}
                    />
                  ))}
                </div>
              </div>

              <Button
                className={`h-[49px] absolute top-[264px] left-0 rounded-[10px] px-4 py-[7px] ${carousel.buttonClass}`}
              >
                <span className="[text-shadow:0px_4px_4px_#00000040] font-bold text-white text-lg leading-normal whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                  {carousel.label}
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </main>
  );
};
