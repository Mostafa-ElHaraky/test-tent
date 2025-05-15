import { Card, CardContent } from "../../../../../../../../components/ui/card";

export const Frame1About1 = (): JSX.Element => {
  // Team member categories with their icons
  const teamCategories = [
    { id: 1, name: "Дизайнеры", icon: "/About1-group-19.png" },
    { id: 2, name: "Технологи, конструктора", icon: "/About1-group-20.png" },
    { id: 3, name: "Проектировщики", icon: "/About1-group-21.png" },
    { id: 4, name: "Геодезисты", icon: "/About1-group-22.png" },
  ];

  // Department data for the right card
  const departments = [
    { id: 1, name: "Отдел проектирования", width: "222px" },
    { id: 2, name: "Отдел контроля качества", width: "222px" },
    { id: 3, name: "Отдел монтажа", width: "143px" },
    { id: 4, name: "Отдел сертификации изделий", width: "272px" },
  ];

  return (
    <main className="relative top-[550px] left-[60px] ">
    <div className="flex items-start gap-[134px] w-full">
      <div className="flex flex-col items-start gap-[45px]">
        <div className="flex flex-col items-start gap-[22px] w-[574px]">
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="font-semibold text-4xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0] w-[674px]">
              <span className="text-[#527dc5]">Экспертная команда </span>
              <span className="text-[#394355]">
                воплотит мечты
                <br />
                об идеальном шатре под ваши задачи
              </span>
            </div>
          </div>

          <div className="w-[510px] font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="font-bold">Работает, как единый организм</span>
            <span className="font-semibold">&nbsp;</span>
            <span className="font-medium">
              из 80 человек с высшим строительным и инженерным образованием и
              опытом от 10 лет
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <div className="flex items-start justify-between w-[560px]">
            {teamCategories.slice(0, 3).map((category) => (
              <div key={category.id} className="flex items-center gap-3">
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-6 h-[17px] top-[3px] left-0"
                    alt={`${category.name} icon`}
                    src={category.icon}
                  />
                </div>
                <div className="[font-family:'Raleway',Helvetica] font-semibold text-[#394355] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {category.name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between w-[413px]">
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6">
                <img
                  className="absolute w-6 h-[17px] top-[3px] left-0"
                  alt="Геодезисты icon"
                  src="/About1-group-22.png"
                />
              </div>
              <div className="[font-family:'Raleway',Helvetica] font-semibold text-[#394355] text-sm tracking-[0] leading-5 whitespace-nowrap">
                Геодезисты
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="font-semibold text-[#527dc5] text-sm leading-5 underline whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                и еще 5+ должностей разного уровня
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="w-[631px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
        <CardContent className="flex flex-col items-center justify-center gap-9 py-[29px] px-0">
          <div className="flex flex-wrap w-[619px] h-[143px] items-start justify-center gap-[24px_12px]">
            {departments.map((department) => (
              <div
                key={department.id}
                className="flex flex-col items-start gap-2.5 p-4 bg-[#f5f6ff] rounded-[10px]"
                style={{ width: department.width }}
              >
                <div className="flex flex-col items-center justify-center gap-2 w-full">
                  <div className="font-bold text-[#527dc5] text-lg text-center whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] leading-6">
                    {department.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[432px] font-bold text-[#394355] text-base text-center leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0]">
            + еще 3 производства
          </div>
        </CardContent>
      </Card>
    </div>
    </main>
  );
};
