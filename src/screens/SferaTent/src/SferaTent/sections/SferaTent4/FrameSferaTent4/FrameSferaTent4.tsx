import React from "react";
import { Button } from "../../../../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../../../../../components/ui/tabs";

export const FrameSferaTent4 = (): JSX.Element => {
  // Data for tabs
  const tabOptions = [
    { id: "device", label: "Устройство" },
    { id: "events", label: "Для каких мероприятий" },
    { id: "types", label: "Виды и формы" },
  ];

  // Paragraph text with highlighted words
  const paragraphText =
    "Сообщите точные размеры, пришлите фото местности, где будет располагаться шатер. Мы бесплатно спроектируем и поставим его на фото. Увидете, как он будет смотреться в реальностиСообщите точные размеры, пришлите фото местности, где будет располагаться шатер. Мы бесплатно спроектируем и поставим его на фото. Увидете, как он будет смотреться в реальностиСообщите точные размеры, пришлите фото местности, где будет располагаться шатер. Мы бесплатно спроектируем и поставим его на фото. Увидете, как он будет смотреться в реальности";

  // Function to render paragraph with highlighted words
  const renderParagraph = (text: string) => {
    return text.split("шатер").map((part, index) => (
      <React.Fragment key={index}>
        <span className="text-[#394355]">{part}</span>
        {index < text.split("шатер").length - 1 && (
          <span className="text-[#527dc5] underline">шатер</span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col items-start gap-9">
      <h2 className="w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
        <span className="text-[#527dc5]">Как устроены</span>
        <span className="text-[#232c42]">
          , какие бывают и из чего состоят арочные шатры
        </span>
      </h2>

      <div className="w-full">
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="h-auto bg-transparent p-0 gap-6">
            {tabOptions.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`h-[46px] px-4 py-[13px] rounded-[50px] [font-family:'Raleway',Helvetica] font-semibold text-lg data-[state=active]:shadow-2 data-[state=active]:[background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-[#232c42]`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="w-full font-medium text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
        {renderParagraph(paragraphText)}
      </div>

      <Button
        variant="link"
        className="p-0 h-auto w-fit font-bold text-[#527dc5] text-2xl leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0]"
      >
        Открыть
      </Button>
    </div>
  );
};
