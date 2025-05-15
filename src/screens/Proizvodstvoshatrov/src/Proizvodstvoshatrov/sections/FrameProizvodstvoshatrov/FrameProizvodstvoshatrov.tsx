import { Badge } from "../../../../../../components/ui/badge";

import { Card, CardContent } from "../../../../../../components/ui/card";

export const FrameProizvodstvoshatrov  = (): JSX.Element => {
  // Production process steps data
  const productionSteps = [
    { title: "Проектирование", active: true },
    { title: "Подготовка и резка сырья и материалов", active: false },
    { title: "Швейный процесс", active: false },
    { title: "Изготовление каркаса", active: false },
    { title: "Итоговая проверка ОТК", active: false },
    { title: "Упаковка и отгрузка", active: false },
    { title: "Монтаж на месте установки", active: false },
  ];

  // Production facilities data
  const productionFacilities = [
    { title: "Цех металлоконструкций" },
    { title: "Цех изготовления ПВХ тентов" },
    { title: "Цех горячего цинкования" },
  ];

  // Data for the product category cards
  const productCategories = [
    "Оборудования для сварки ткани токами высокой частоты - ТВЧ",
    "Металлорежущее оборудование\nдля плазменной резки",
    "Плоттерная резка ткани с ЧПУ",
    "Сварочное и гибочное оборудование для металла",
    "Покрасочное оборудование",
    "Сушильная камера",
  ];

  return (
    <div className="w-full relative">
      <img
        className="w-[318px] h-[306px] absolute top-[859px] left-0"
        alt="Vecteezy overgrown"
        src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
      />


      {/* Production Cycle Section */}
      <div className="mt-[60px] mx-[49px]">
        <div className="flex flex-col items-center gap-[39px]">
          <div className="flex flex-col items-center gap-4">
            <h2 className="[font-family:'Raleway',Helvetica] text-4xl">
              <span className="font-semibold text-[#527dc5]">
                Делаем все этапы
              </span>
              <span className="font-semibold text-[#232c42]">
                {" "}
                полного цикла
              </span>
            </h2>
            <p className="[font-family:'Raleway',Helvetica] text-[#232c42] text-lg leading-6">
              от идеи до монтажа
            </p>
          </div>

          <div className="flex items-start gap-[29px]">
            <div className="flex flex-col items-start gap-[13px]">
              {productionSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex w-[315px] h-${
                    step.title.includes("Подготовка") ? "[65px]" : "[49px]"
                  } items-center gap-2.5 px-4 py-[7px] rounded-[10px] shadow-${
                    step.active ? "2" : ""
                  } backdrop-blur-[79px] backdrop-brightness-[100%] ${
                    step.active ? "bg-[#527dc5]" : "bg-white"
                  }`}
                >
                  {step.title.includes("Подготовка") ? (
                    <div className="w-[203px] h-[34px] flex flex-col items-start gap-2.5">
                      <div className="self-stretch [text-shadow:0px_4px_4px_#00000040] font-medium text-black text-base leading-3 [font-family:'Raleway',Helvetica]">
                        Подготовка и резка сырья
                        <br />
                      </div>
                      <div className="self-stretch [text-shadow:0px_4px_4px_#00000040] font-medium text-black text-base leading-3 [font-family:'Raleway',Helvetica]">
                        и материалов
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`w-fit [text-shadow:0px_4px_4px_#00000040] font-${
                        step.active ? "bold" : "medium"
                      } ${
                        step.active
                          ? "text-white"
                          : "[background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                      } text-base leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica]`}
                    >
                      {step.title}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <img
              className="w-[995px] h-[437px] object-cover"
              alt="Rectangle"
              src="/rectangle-94.png"
            />
          </div>
        </div>
      </div>

{/* High-tech Equipment Section */}
<div className="flex w-full max-w-[1344px] items-center justify-between mt-[100px] mx-auto px-12">
  <div className="flex flex-col items-start gap-4">
    <h2 className="font-semibold text-4xl text-[#527dc5] [font-family:'Raleway',Helvetica]">
      Используется высокотехнологичное оборудование
    </h2>
    <p className="text-2xl text-[#232c42] [font-family:'Raleway',Helvetica]">
      от Leister, Vanad, Beka-mak и других мировых брендов
    </p>
  </div>
  <Badge className="rounded-[20px] bg-[#527dc5] shadow-lg text-white w-[351px] h-[120px] flex flex-col justify-center px-6">
    <div className="text-4xl font-bold">35+ <span className="text-3xl">инструментов</span></div>
    <div className="text-base font-medium">и уникальных станков</div>
  </Badge>
</div>

{/* Equipment Cards Section */}
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1344px]"
      data-model-id="1:28295"
    >
      {productCategories.map((category, index) => (
        <Card
          key={index}
          className="w-full h-[404px] rounded-[20px] border border-[#dddddd] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] overflow-hidden backdrop-blur-[79px] backdrop-brightness-[100%]"
        >
          <div className="w-full h-[277px] rounded-t-[20px] [background:linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(232,238,248,0)_100%)]" />

          <CardContent className="p-0">
            <div className="px-[41px] pt-[27px] w-full">
              <p className="[font-family:'Raleway',Helvetica] font-medium text-[#394355] text-xl leading-6 whitespace-pre-line">
                {category}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

{/* Production Facilities Section */}
<div className="w-full bg-[#232c42] py-[60px] mt-[100px]">
  <div className="max-w-[1344px] mx-auto px-12">
    <h2 className="text-center text-4xl font-semibold text-white mb-12">
      <span className="text-[#8eb8ff]">Самое оснащенное производство </span>
      в России площадью 1500 м²
    </h2>

    <div className="flex gap-6 justify-center">
      {productionFacilities.map((facility, index) => (
        <Card
          key={index}
          className="w-[431px] h-[404px] bg-white rounded-[20px] border border-[#dddddd] shadow-md"
        >
          <div className="w-full h-[277px] bg-gradient-to-b from-[#e8eef8] to-transparent rounded-t-[20px]" />
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-medium text-[#394355]">
              {facility.title}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
  </div>
  </div>
  );
};
