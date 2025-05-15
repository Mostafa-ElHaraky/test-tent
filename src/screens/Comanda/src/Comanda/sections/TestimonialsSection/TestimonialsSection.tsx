import { CheckIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "../../../../../../components/ui/breadcrumb";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../../components/ui/tabs";

export const TestimonialsSection = (): JSX.Element => {
  // Department tabs data
  const departments = [
    "Отдел проектирования",
    "Отдел контроля качества",
    "Отдел производства",
    "Отдел логистики",
    "Отдел закупок",
    "Отдел монтажа",
    "Отдел сертификации изделий",
  ];

  // Team roles data
  const teamRoles = [
    { title: "Дизайнеры", checked: true },
    { title: "Технологи, конструкторы", checked: true },
    { title: "Проектировщики", checked: true },
    { title: "Геодезисты", checked: true },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Евгений Петров",
      role: "Дизайнер",
      experience: "Опыт с 2013 года",
      image:
        "/comanda-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png",
    },
    {
      name: "Евгений Петров",
      role: "Дизайнер",
      experience: "Опыт с 2013 года",
      image:
        "/comanda-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png",
    },
    {
      name: "Евгений Петров",
      role: "Дизайнер",
      experience: "Опыт с 2013 года",
      image:
        "/comanda-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative">
        {/* Background elements */}
        <div className="w-full h-[1196px] [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />

        <img
          className="absolute w-[719px] h-[643px] top-[194px] left-0 object-cover"
          alt="Element clouds"
          src="/comanda-08-clouds-2.png"
        />

        <div className="absolute w-full h-[69px] top-[194px] left-0 bg-white rounded-[0px_0px_20px_20px]" />

        {/* Breadcrumb navigation */}
        <div className="absolute top-[372px] left-[46px]">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center p-1 bg-[#4f5d801a] rounded">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  className="font-normal text-xs text-[#394355] font-['Raleway',Helvetica]"
                >
                  Главная
                </BreadcrumbLink>
              </BreadcrumbItem>
              <span className="text-xs text-[#394355]">&gt;{"  "}</span>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  className="font-medium text-xs text-[#394355] underline font-['Raleway',Helvetica]"
                >
                  Команда компании
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Main content */}
        <div className="absolute top-[420px] left-[46px] right-[46px]">
          <div className="flex flex-col gap-8">
            {/* Header section */}
            <div>
              <h1 className="text-4xl font-bold text-[#394355]">
                <span className="text-blue-500">Команда</span> компании
              </h1>
              <div className="mt-4">
                <span className="inline-block px-4 py-2 bg-blue-900 text-white rounded-md text-sm">
                  Эксперты воплотят ваши мечты
                </span>
              </div>
              <p className="mt-4 text-[#394355]">
                об идеальной тентовой конструкции для вашего бизнеса
              </p>
              <p className="mt-2 text-[#394355]">
                <span className="font-bold">Работает как единый организм</span>{" "}
                из 80 человек с высшим строительным и инженерным образованием и
                опытом от 10 лет
              </p>
            </div>

            {/* Team roles */}
            <div className="flex flex-wrap gap-4">
              {teamRoles.map((role, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#394355]">{role.title}</span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <span className="text-blue-500 text-sm">
                  и еще 5+ должностей разного уровня
                </span>
              </div>
            </div>

            {/* Department tabs */}
            <Tabs defaultValue={departments[0]} className="w-full">
              <TabsList className="flex flex-wrap gap-2 bg-transparent">
                {departments.map((dept, index) => (
                  <TabsTrigger
                    key={index}
                    value={dept}
                    className="px-4 py-2 rounded-md data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    {dept}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tab content */}
              {departments.map((dept, index) => (
                <TabsContent key={index} value={dept} className="mt-6">
                  <div className="relative">
                    {/* Team members carousel */}
                    <div className="flex gap-6 overflow-hidden">
                      {teamMembers.map((member, idx) => (
                        <Card
                          key={idx}
                          className="w-[300px] bg-white rounded-lg overflow-hidden"
                        >
                          <CardContent className="p-0">
                            <div className="h-[250px] overflow-hidden">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-xl font-semibold">
                                {member.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {member.role}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {member.experience}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Carousel navigation */}
                    <Button
                      variant="outline"
                      className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-white shadow-md"
                      aria-label="Previous slide"
                    >
                      &lt;
                    </Button>
                    <Button
                      variant="outline"
                      className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-white shadow-md"
                      aria-label="Next slide"
                    >
                      &gt;
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* Bottom decoration */}
        <img
          className="absolute w-[318px] h-[306px] bottom-0 left-0"
          alt="Vecteezy overgrown"
          src="/comanda-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
        />
      </div>
    </section>
  );
};
