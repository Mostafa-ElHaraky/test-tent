import React from "react";
import { Card, CardContent } from "../../../../../../../../components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../../../../components/ui/collapsible";

export const GroupAbout1 = (): JSX.Element => {
  // Certificate types data
  const certificateTypes = [
    {
      id: 1,
      items: ["Сертификаты соответствия", "Сертификаты качества"],
    },
    {
      id: 2,
      items: ["Сертификат пожарной безопасности", "Протоколы испытания"],
    },
  ];

  return (
    <main className="relative top-[600px] ">
    <div className="w-full py-8">
      <Card className="relative rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-1/2 flex flex-col gap-12">
              <div className="flex flex-col gap-[34px]">
                <div className="flex flex-col gap-9">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
                        <span className="text-[#232c42]">
                          Работаем полностью
                        </span>
                        <span className="text-[#527dc5]"> официально</span>
                      </h2>
                    </div>
                    <p className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                      с выдачей всех необходимых документов
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <h3 className="font-bold text-xl leading-6 [font-family:'Raleway',Helvetica]">
                      <span className="text-[#527dc5]">Сертификаты</span>
                      <span className="text-[#232c42]"> на комплектующие</span>
                    </h3>

                    <div className="flex flex-wrap gap-6">
                      {certificateTypes.map((column) => (
                        <div
                          key={column.id}
                          className="font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica]"
                        >
                          {column.items.map((item, index) => (
                            <React.Fragment key={index}>
                              {item}
                              {index < column.items.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Collapsible className="w-[294px]">
                  <CollapsibleTrigger className="flex justify-between items-center w-full p-3 rounded-lg border-2 border-solid border-[#dddddd]">
                    <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                      Реквизиты компании
                    </span>
                    <img
                      className="w-[15px] h-2"
                      alt="Arrow"
                      src="/About1-arrow-2.svg"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {/* Content for company details would go here */}
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-[10px] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
                <div className="relative w-[25px] h-[25px]">
                  <img
                    className="absolute w-[19px] h-4 top-1 left-[3px]"
                    alt="Group"
                    src="/About1-group-25.png"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-bold text-white text-xl leading-6 [font-family:'Raleway',Helvetica]">
                    Работаем с любыми видами бизнеса
                  </h3>
                  <p className="font-normal text-white text-lg leading-6 [font-family:'Raleway',Helvetica]">
                    и методами оплаты: ИП, ООО, НДС, счета, безнал, карты и пр.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex items-center justify-center">
              <img
                className="max-w-full h-auto"
                alt="Element"
                src="/About1-15-9bf6ff67-------1.png"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </main>
  );
};
