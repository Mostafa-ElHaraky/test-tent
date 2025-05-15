import { Card, CardContent } from "../../../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../../components/ui/carousel";

export const ServicesSection = (): JSX.Element => {
  // Team members data for the carousel
  const teamMembers = [
    {
      id: 1,
      name: "Александр Иванов",
      position: "CEO",
      imageUrl: "/team-member-1.jpg",
    },
    {
      id: 2,
      name: "Александр Иванов",
      position: "CEO",
      imageUrl: "/team-member-1.jpg",
    },
    {
      id: 3,
      name: "Александр Иванов",
      position: "CEO",
      imageUrl: "/team-member-1.jpg",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-8">
      <h2 className="text-4xl font-semibold font-['Raleway',Helvetica] tracking-normal">
        <span className="text-[#527dc5]">Команда </span>
        <span className="text-[#232c42]">компании</span>
      </h2>

      <Carousel className="w-full">
        <CarouselContent>
          {teamMembers.map((member) => (
            <CarouselItem key={member.id} className="md:basis-1/3 lg:basis-1/3">
              <Card className="border-none shadow-none">
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="aspect-square w-full overflow-hidden rounded-md mb-4">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.position}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
};
