import { Badge } from "../../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../../components/ui/card";

export const Frame4Proizvodstvoshatrov = (): JSX.Element => {
  // Data for team roles
  const teamRoles = [
    { id: 1, name: "Дизайнеры", icon: "/group-20.png" },
    { id: 2, name: "Технологи, конструктора", icon: "/group-21.png" },
    { id: 3, name: "Проектировщики", icon: "/group-22.png" },
    { id: 4, name: "Геодезисты", icon: "/group-23.png" },
  ];

  // Data for departments
  const departments = [
    { id: 1, name: "Отдел проектирования", width: "222px" },
    { id: 2, name: "Отдел контроля качества", width: "222px" },
    { id: 3, name: "Отдел производства", width: "187px" },
    { id: 4, name: "Отдел логистики", width: "160px" },
    { id: 5, name: "Отдел закупок", width: "140px" },
    { id: 6, name: "Отдел монтажа", width: "143px" },
    { id: 7, name: "Отдел сертификации изделий", width: "272px" },
  ];

  return (
    <div className="flex items-start gap-[110px] w-full py-12">
      <div className="flex flex-col items-start gap-[30px]">
        <div className="flex flex-col w-[574px] items-start gap-[22px]">
          <div className="flex items-start gap-3 flex-col">
            <h2 className="w-full font-semibold text-4xl leading-normal font-['Raleway',Helvetica] tracking-[0]">
              <span className="text-[#527dc5]">80+ человек </span>
              <span className="text-[#232c42]">
                компании работает,
                <br />
                как единый организм
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="flex flex-col items-start gap-9">
              <div className="flex flex-col items-start gap-1.5">
                <div className="flex flex-col items-start gap-3">
                  <Badge className="inline-flex flex-col items-start gap-2.5 px-3 py-1.5 rounded-lg [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
                    <div className="inline-flex items-start gap-2">
                      <div className="w-fit font-normal text-white text-lg leading-6 font-['Raleway',Helvetica] tracking-[0]">
                        <span className="font-bold">
                          С высшим строительным
                          <br />
                        </span>
                        <span className="font-['Raleway',Helvetica] font-normal">
                          и инженерным образованием с опытом от 10 лет
                        </span>
                      </div>
                    </div>
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <div className="flex w-[560px] items-start justify-between">
            {teamRoles.slice(0, 3).map((role) => (
              <div key={role.id} className="flex items-center gap-3">
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-6 h-[17px] top-[3px] left-0"
                    alt={`${role.name} icon`}
                    src={role.icon}
                  />
                </div>
                <div className="font-['Raleway',Helvetica] font-semibold text-[#394355] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {role.name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-[413px] items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6">
                <img
                  className="absolute w-6 h-[17px] top-[3px] left-0"
                  alt="Геодезисты icon"
                  src="/group-23.png"
                />
              </div>
              <div className="font-['Raleway',Helvetica] font-semibold text-[#394355] text-sm tracking-[0] leading-5 whitespace-nowrap">
                Геодезисты
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="font-['Raleway',Helvetica] font-semibold text-[#527dc5] text-sm leading-5 underline whitespace-nowrap tracking-[0]">
                и еще 5+ должностей разного уровня
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="w-[660px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] rounded-[20px] overflow-hidden">
        <CardContent className="flex flex-wrap items-start justify-center gap-[24px_12px] p-[29px]">
          {departments.map((department) => (
            <div
              key={department.id}
              className="flex flex-col items-start gap-2.5 p-4 bg-[#f5f6ff] rounded-[50px] overflow-hidden"
            >
              <div
                className={`flex flex-col items-center justify-center gap-2`}
                style={{ width: department.width }}
              >
                <div className="font-['Raleway',Helvetica] font-bold text-[#527dc5] text-lg text-center tracking-[0] leading-6 whitespace-nowrap">
                  {department.name}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
