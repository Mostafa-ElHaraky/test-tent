import { Card, CardContent } from "../../../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../../../components/ui/tabs";

export const Services2 = (): JSX.Element => {
  // Data for option tabs
  const optionTabs = [
    {
      id: "internal-design",
      title: "Внутреннее оформление",
      highlight: "оформление",
    },
    { id: "external-design", title: "Внешнее оформление", isActive: true },
    {
      id: "internal-arrangement",
      title: "Внутреннее обустройство",
      highlight: "обустройство",
    },
    {
      id: "additional-option",
      title: "Дополнительная плашка",
      highlight: "плашка",
    },
  ];

  // Data for option list
  const optionsList = [
    "Напольные покрытия (настилы, ковролин и пр.)",
    "Название опции",
    "Название опции",
    "Название опции",
    "Название опции",
    "Название опции",
    "Название опции",
    "Название опции",
  ];

  return (
    <div className="relative bg-white ">
      <div className="flex flex-col items-center gap-[13px] pt-[60px] px-6">
        <div className="flex flex-col items-center gap-9">
          <h1 className="[font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0]">
            <span className="text-[#232c42]">Выбирайте </span>
            <span className="text-[#527dc5]">любые</span>
            <span className="text-[#232c42]"> опции</span>
          </h1>

          <Tabs defaultValue="external-design" className="w-full">
            <TabsList className="flex items-start justify-center gap-9 bg-transparent h-auto p-0">
              {optionTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`w-auto h-[94px] px-[31px] py-[35px] rounded-[30px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] ${
                    tab.isActive
                      ? "[background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]"
                      : "bg-white"
                  }`}
                >
                  <span
                    className={`[font-family:'Raleway',Helvetica] font-semibold text-xl tracking-[0] leading-6 ${
                      tab.isActive ? "text-white" : ""
                    }`}
                  >
                    {tab.highlight ? (
                      <>
                        <span className="text-[#232c42]">
                          {tab.title.split(tab.highlight)[0]}
                        </span>
                        <span className="text-[#527dc5]">{tab.highlight}</span>
                      </>
                    ) : (
                      tab.title
                    )}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center gap-[59px] mt-4">
          <img
            className="w-[673px] h-[553px] object-contain"
            alt="Tent with curtains"
            src="/tent-with-curtains-i08-1.png"
          />

          <Card className="bg-[#e8edf7] rounded-[20px] shadow-none border-none">
            <CardContent className="flex flex-col w-[582px] items-start gap-6 p-[37px]">
              {optionsList.map((option, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0 ? "w-[457px]" : "w-[169px]"
                  } font-normal text-[#394355] underline [font-family:'Raleway',Helvetica] text-xl tracking-[0] leading-6 cursor-pointer`}
                >
                  {option}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
