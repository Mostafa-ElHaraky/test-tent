import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../../../components/ui/accordion";

export const Frame5Proizvodstvoshatrov = (): JSX.Element => {
  // FAQ data for easier management and mapping
  const faqItems = [
    {
      question:
        "Каковы материалы, используемые для производства тентовых шатров, и их характеристики?",
      answer: "",
    },
    {
      question:
        "Как долго занимает процесс производства тентового шатра от начала до конца?",
      answer: "",
    },
    {
      question:
        "Существует ли возможность заказа тентовых шатров с индивидуальными размерами и конфигурациями?",
      answer: "",
    },
    {
      question:
        "Какие технические характеристики обеспечивают ветроустойчивость тентовых шатров?",
      answer: "",
    },
    {
      question:
        "Какова гарантия на тентовые шатры, и как обеспечивается сервисная поддержка?",
      answer: "",
    },
    {
      question:
        "Какие дополнительные опции и аксессуары могут быть добавлены к тентовым шатрам?",
      answer: "",
    },
  ];

  // Split the FAQ items into two columns
  const leftColumnItems = faqItems.slice(0, 3);
  const rightColumnItems = faqItems.slice(3);

  return (
    <section className="flex flex-col items-start gap-11 w-full py-8">
      <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
        <span className="text-[#527dc5]">Часто </span>
        <span className="text-[#232c42]">спрашивают</span>
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-3 flex-1">
          {leftColumnItems.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`} className="border-0">
                <AccordionTrigger className="bg-[#f2f4f7] rounded-[10px] px-3 py-4 font-medium text-[#4f5d80] text-lg leading-6 [font-family:'Raleway',Helvetica] hover:no-underline">
                  <div className="text-left">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent className="px-3 py-2">
                  {item.answer || "Информация будет добавлена позже."}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3 flex-1">
          {rightColumnItems.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem
                value={`item-${index + leftColumnItems.length}`}
                className="border-0"
              >
                <AccordionTrigger className="bg-[#f2f4f7] rounded-[10px] px-3 py-4 font-medium text-[#4f5d80] text-lg leading-6 [font-family:'Raleway',Helvetica] hover:no-underline">
                  <div className="text-left">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent className="px-3 py-2">
                  {item.answer || "Информация будет добавлена позже."}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};
