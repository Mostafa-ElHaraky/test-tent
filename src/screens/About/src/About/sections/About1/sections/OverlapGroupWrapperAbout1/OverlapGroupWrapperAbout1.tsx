import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Badge } from "../../../../../../../../components/ui/badge";
import { Button } from "../../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../../components/ui/card";

export const OverlapGroupWrapperAbout1 = (): JSX.Element => {
  // Team member data for mapping
  const teamMembers = [
    {
      id: 1,
      name: "Евгений Петров",
      role: "Дизайнер",
      experience: "Опыт с 2013 года",
      image:
        "/About1-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at-3.png",
    },
    {
      id: 2,
      name: "Евгений Петров",
      role: "Дизайнер",
      experience: "Опыт с 2013 года",
      image:
        "/About1-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at-3.png",
    },
    {
      id: 3,
      name: "Евгений Петров",
      role: "Дизайнер",
      experience: "Опыт с 2013 года",
      image:
        "/About1-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at-3.png",
    },
  ];

  return (
    <section className="relative w-full py-10 top-[608px] ">
      <div className="relative max-w-[1401px] mx-auto">
        <div className="flex flex-wrap justify-center gap-7">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="w-[429px] h-[482px] bg-white rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%] relative"
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex justify-center pt-[31px]">
                  <img
                    className="w-[293px] h-[342px] object-cover"
                    alt="Team member portrait"
                    src={member.image}
                  />
                </div>

                <div className="flex flex-col items-start gap-4 px-10 mt-auto mb-[31px]">
                  <div className="flex items-center gap-4">
                    <h3 className="font-semibold text-[#394355] text-2xl leading-6 [font-family:'Raleway',Helvetica]">
                      {member.name}
                    </h3>

                    <Badge className="bg-[#f5f6ff] text-[#394355] px-4 py-2 rounded-lg font-medium text-sm leading-5 [font-family:'Raleway',Helvetica]">
                      {member.role}
                    </Badge>
                  </div>

                  <p className="font-normal text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                    {member.experience}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex w-full items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 px-4">
          <Button
            variant="outline"
            size="icon"
            className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_rgba(31,124,254,0.4)] bg-white"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_rgba(31,124,254,0.4)] bg-white"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
