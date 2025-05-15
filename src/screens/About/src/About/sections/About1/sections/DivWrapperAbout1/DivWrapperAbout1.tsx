import { Badge } from "../../../../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../../../../components/ui/card";

export const DivWrapperAbout1 = (): JSX.Element => {
  // Company standards and achievements data
  const standardBadges = [
    "ГОСТ 31937-2011",
    "ГОСТ 12.1.012-2004",
    "ГОСТ 27751-2014",
  ];

  // Company statistics data
  const companyStats = [
    {
      value: "15",
      unit: "лет",
      description: "производим и проектируем тентовые конструкции",
      bgColor: "bg-[#527dc5]",
      textColor: "text-white",
    },
    {
      value: "5000+",
      description: "конструкций сделано",
      bgColor: "bg-white",
    },
    {
      value: "3000+",
      description: "цехов производства",
      bgColor: "bg-[#527dc5]",
      textColor: "text-white",
    },
    {
      value: "87",
      description: "человек в штате",
      bgColor: "bg-[#527dc5]",
      textColor: "text-white",
    },
    {
      value: "35",
      unit: "штук",
      description: "уникальных станков",
      bgColor: "bg-[#527dc5]",
      textColor: "text-white",
    },
  ];

  // Client categories data
  const clientCategories = [
    {
      title: "Бизнесу по загородному отдыху: ",
      description: "отели, яхт-клубы, базы отдыха, парк-отели и пр.",
      image: "/About1-00120-------1.png",
    },
    {
      title: "Компаниям по организации выездных мероприятий",
      description: "",  
      image: "/About1-d588110f-6d7c-4f88-8567-90f3d9164e14-------1.png",
    },
    {
      title: "Кафе, ресторанам",
      description: " и другим бизнесам по организации точек питания",
      image: "/About1-tent-i01-1.png",
    },
    {
      title: "Бизнесу для уличной торговли",
      description: "и демонстрации товаров и услуг",
      image: "/About1-503774b4-f2ac-4d80-a16e-e0e416349220-------1.png",
    },
  ];

  return (
    <div className="relative w-full max-w-[1344px] h-[1533px] mx-auto bg-white top-[200px]">
    <div className="flex flex-col items-start gap-[65px] w-full py-12">
      {/* Company introduction section */}
      <section className="flex flex-col items-start gap-9 w-full">
        <div className="flex flex-col w-full items-start gap-9">
          <h2 className="w-full font-semibold text-4xl leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="text-[#527dc5]">С 2012 года </span>
            <span className="text-[#232c42]">
              изготавливаем тентовые конструкции: шатры, ангары и пр.
            </span>
          </h2>
        </div>

        <div className="relative w-full h-[381px]">
          <div className="relative w-full h-[465px]">
            {/* First info card */}
            <Card className="absolute w-[660px] h-[206px] top-[22px] left-90 bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0">
                <div className="w-[449px] top-[30px] left-[70px] flex flex-col items-start gap-2.5 absolute h-[83px]">
                  <div className="relative self-stretch font-normal text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="font-semibold">
                      Соблюдаем все 50+ требований
                      <br />
                    </span>
                  </div>
                  <div className="relative self-stretch font-normal text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="text-lg">
                      ГОСТов и СНИПов к качеству материалов и сборке Это даже
                      больше, чем обычно нужно
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-start gap-6 absolute top-[150px] left-[50px]">
                  {standardBadges.map((standard, index) => (
                    <Badge
                      key={index}
                      className="justify-center gap-2.5 px-3 py-1.5 bg-[#527dc5] rounded-lg font-semibold text-white text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap"
                    >
                      {standard}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Background images */}
            <img
              className="absolute w-[748px] h-[294px] top-0 left-[678px]"
              alt="Rectangle"
              src="/About1-rectangle-61.svg"
            />

            <img
              className="absolute w-[508px] h-[231px] top-[234px] left-0"
              alt="Rectangle"
              src="/About1-rectangle-62.svg"
            />



            {/* Second info card */}
            <Card className="absolute w-[432px] h-[155px] top-[248px] left-[494px] bg-white rounded-[20px] border border-solid border-[#dadada] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0">
                <div className="inline-flex flex-col items-start gap-[17px] absolute top-[28px] left-[32px]">
                  <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
                    <Badge className="inline-flex h-[49px] items-center gap-2.5 px-4 py-[7px] relative flex-[0_0_auto] bg-[#527dc5] rounded-[10px]">
                      <div className="[text-shadow:0px_4px_4px_#00000040] text-white text-lg relative w-fit [font-family:'Raleway',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap">
                        8 городов России
                      </div>
                    </Badge>

                    <Badge className="inline-flex h-[49px] items-center gap-2.5 px-4 py-[7px] relative flex-[0_0_auto] bg-[#527dc5] rounded-[10px]">
                      <div className="[text-shadow:0px_4px_4px_#00000040] text-white text-lg relative w-fit [font-family:'Raleway',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap">
                        4 городах СНГ
                      </div>
                    </Badge>
                  </div>

                  <div className="relative w-fit font-semibold text-[#4f5d80] text-xl leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    представительства
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third info card */}
            <Card className="absolute w-[432px] h-[155px] top-[248px] left-[950px] bg-white rounded-[20px] border border-solid border-[#dadada] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0">
                <div className="w-[358px] top-[36px] left-[33px] flex flex-col items-start gap-2.5 absolute h-[83px]">
                  <div className="relative self-stretch font-normal text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="font-semibold">
                      Отдел технического контроля
                      <br />
                    </span>
                  </div>

                  <div className="relative self-stretch font-normal text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="text-lg">
                      (ОТК) для исключения брака проверяет каждый этап и сварные
                      швы
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects count */}
            <div className="inline-flex flex-col items-start gap-3 absolute top-[276px] left-[70px]">
              <div className="relative w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] font-bold text-white text-[46px] leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                8000+
              </div>

              <div className="relative w-fit font-semibold text-white text-xl leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                изготовленных конструкций
              </div>
            </div>




            {/* CPO membership */}
            <div className="absolute w-[449px] top-[52px] left-[758px] [font-family:'Raleway',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[normal]">
              Являемся членами CPO
            </div>

            {/* Permissions list */}
            <Card className="inline-flex flex-col items-start gap-2.5 px-6 py-3 absolute top-[119px] left-[758px] bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0">
                <div className="gap-[15px] inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-[50px] h-[50px]">
                    <div className="relative w-[35px] h-[35px] top-2 left-2 overflow-hidden">
                      <div className="relative h-[35px] top-px">
                        <img
                          className="absolute w-8 h-8 top-px left-px"
                          alt="Group"
                          src="/About1-group-16.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative w-fit font-bold text-[#232c42] text-base leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    Список допусков
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company statistics section */}
      <section className="flex flex-col items-center gap-11 w-full">
        <div className="flex flex-col items-center gap-9 w-full">
          <h2 className="relative w-fit mt-[-1.00px] font-semibold text-4xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="text-[#527dc5]">Цифры </span>
            <span className="text-[#232c42]">компании</span>
          </h2>
        </div>

        <div className="relative w-full h-[470px]">
          {companyStats.map((stat, index) => {
            // Position each card based on index
            let position = {};
            if (index === 0) position = { top: 0, left: 0 };
            else if (index === 1) position = { top: 0, left: "456px" };
            else if (index === 2) position = { top: 0, left: "912px" };
            else if (index === 3) position = { top: "247px", left: "228px" };
            else if (index === 4) position = { top: "247px", left: "680px" };

            return (
              <Card
                key={index}
                className={`absolute w-[428px] h-[223px] ${stat.bgColor} rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]`}
                style={position}
              >
                <CardContent className="p-0">
                  <div className="inline-flex flex-col items-start gap-2.5 relative top-[37px] left-[29px]">
                    <div
                      className={`relative w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] font-bold ${stat.textColor} text-[80px] leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]`}
                    >
                      {stat.value}
                      {stat.unit && (
                        <>
                          {index === 0 && (
                            <img
                              className="absolute w-[26px] h-[27px] top-5 left-[93px]"
                              alt="Img"
                              src="/About1--.svg"
                            />
                          )}
                          <div className="absolute top-[47px] left-[93px] [text-shadow:0px_4px_4px_#00000040] font-bold text-white text-3xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                            {stat.unit}
                          </div>
                        </>
                      )}
                    </div>

                    <div
                      className={`relative w-[370px] font-semibold ${index === 1 ? "text-[#4f5d80]" : "text-white"} text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]`}
                    >
                      {stat.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Clients section */}
      <section className="flex flex-col items-center gap-9 w-full">
        <div className="flex items-center justify-center gap-[216px] w-full">
          <h2 className="w-[777px] font-semibold text-4xl text-center leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
            <span className="text-[#232c42]">Наши </span>
            <span className="text-[#527dc5]">клиенты</span>
          </h2>
        </div>

        <div className="flex items-start gap-6 w-full">
          {clientCategories.map((client, index) => (
            <Card
              key={index}
              className="relative w-[318px] h-[330px] bg-white rounded-[20px] border border-solid border-[#dddddd] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
            >
              <CardContent className="p-0 h-full">
                <div className="absolute w-[318px] h-[204px] top-0 left-0 rounded-[20px] [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)]" />

                <div className="absolute w-[255px] top-56 left-[31px] font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="font-semibold">{client.title}</span>
                  <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-6">
                    {client.description}
                  </span>
                </div>

                <img
                  className="absolute w-auto h-auto max-w-full max-h-[236px] top-0 left-1/2 transform -translate-x-1/2 object-cover"
                  alt={`Client category ${index + 1}`}
                  src={client.image}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};
