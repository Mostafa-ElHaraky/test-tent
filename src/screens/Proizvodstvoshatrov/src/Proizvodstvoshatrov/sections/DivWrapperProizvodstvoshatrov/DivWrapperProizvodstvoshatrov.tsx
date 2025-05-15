import { Card, CardContent } from "../../../../../../components/ui/card";

export const DivWrapperProizvodstvoshatrov = (): JSX.Element => {
  // Data for the quality control cards
  const qualityControlSteps = [
    {
      id: "01",
      title: "При поступлении",
      description: "Проверяется толщина металла, качество ткани и фурнитуры",
    },
    {
      id: "02",
      title: "В процессе",
      description: [
        "Соответствие требованиям пожарной безопасности",
        "Проверка заложенных требований в проекте на условиях эксплуатации",
      ],
    },
    {
      id: "03",
      title: "Перед отгрузкой",
      description: "Проверка маркировки всех деталей и комплектации",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-6 w-full py-8 px-4">
      {qualityControlSteps.map((step) => (
        <Card
          key={step.id}
          className="relative w-full md:w-[431px] h-[482px] rounded-[20px] border border-solid border-[#dddddd] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%] bg-white overflow-hidden"
        >
          <div className="relative w-full h-[277px] rounded-t-[20px] [background:linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)]" />

          <div className="absolute w-20 h-20 top-5 left-5 bg-[#dee4f0] rounded-[40px] flex items-center justify-center">
            <div className="[text-shadow:0px_4px_20px_#0000001a] [background:linear-gradient(173deg,rgba(35,44,66,1)_0%,rgba(91,100,122,1)_35%,rgba(35,44,66,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-bold text-transparent text-[35px] leading-6">
              {step.id}
            </div>
          </div>

          <CardContent className="flex flex-col items-start gap-4 pt-8 px-8">
            <h3 className="font-semibold text-[#394355] text-2xl [font-family:'Raleway',Helvetica] tracking-[0] leading-normal">
              {step.title}
            </h3>

            {Array.isArray(step.description) ? (
              <div className="flex flex-col items-start gap-2.5">
                {step.description.map((desc, index) => (
                  <p
                    key={index}
                    className="font-normal text-[#394355] text-lg [font-family:'Raleway',Helvetica] tracking-[0] leading-normal"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            ) : (
              <p className="font-normal text-[#394355] text-lg [font-family:'Raleway',Helvetica] tracking-[0] leading-normal w-[365px]">
                {step.description}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
