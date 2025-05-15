import { Card, CardContent } from "../../../../../../components/ui/card";

export const Frame1Proizvodstvoshatrov = (): JSX.Element => {
  // Data for the visualization images
  const visualizationImages = [
    { src: "/rectangle-96.svg", alt: "3D Visualization 1" },
    { src: "/rectangle-97.svg", alt: "3D Visualization 2" },
    { src: "/rectangle-98.svg", alt: "3D Visualization 3" },
  ];

  return (
    <section className="flex flex-col items-start gap-[45px] w-full py-8">
      <h2 className="w-full font-semibold text-4xl leading-normal font-['Raleway',Helvetica] tracking-[0]">
        <span className="text-[#527dc5]">Итоговой частью</span>
        <span className="text-[#232c42]"> становится 3D визуализация</span>
      </h2>

      <div className="flex flex-wrap items-start gap-[26px] w-full">
        {visualizationImages.map((image, index) => (
          <Card
            key={index}
            className="border-none shadow-none flex-1 min-w-[300px]"
          >
            <CardContent className="p-0">
              <img
                className="w-full h-[424px] object-cover"
                alt={image.alt}
                src={image.src}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
