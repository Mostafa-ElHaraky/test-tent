import { Alert, AlertDescription } from "../../../../../../../components/ui/alert";
import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";

export const DivShatry5 = (): JSX.Element => {
  // Data for the comparison cards
  const comparisonData = [
    {
      type: "our",
      title: "Наша компания",
      subtitle: "Вырезаем на плоттере с ЧПУ с точностью до 0.001мм.",
      description: (
        <>
          Это дает мощное натяжение при любой погоде
          <br />и ветре. Тент не провисает. Стоимость плоттера{" "}
          <strong>5+ млн. руб.</strong>
        </>
      ),
      imageSrc: "/rectangle-49.svg",
      isDark: false,
    },
    {
      type: "others",
      title: "Другие компании",
      subtitle:
        "Используют лекала. Вручную обводят ручкой и вырезают ножницами прямо на полу.",
      description:
        "Получаются элементы разные по размеру. Натяжение в одном месте хорошее, в другом тент провисает",
      imageSrc: "/rectangle-51.png",
      isDark: true,
    },
  ];

  return (
    <section className="flex flex-col items-start gap-9 w-full max-w-[1344px] mx-auto my-12">
      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col items-start gap-[30px]">
          <div className="flex flex-col max-w-[774px] items-start gap-3">
            <h2 className="font-normal text-4xl leading-normal font-['Raleway',Helvetica]">
              <span className="font-semibold text-[#527dc5]">
                Будьте осторожны
              </span>
              <span className="font-medium text-[#232c42]">
                , не нарвитесь на кустарное производство или посредников
              </span>
            </h2>
          </div>

          <Alert className="flex items-start gap-2.5 px-4 py-1.5 bg-[#f7e8e8] rounded-[10px] border-none">
            <div className="relative w-6 h-6">
              <div className="relative w-[17px] h-[15px] top-1 left-1 bg-[url(/DOCvector-1.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-0.5 h-[9px] top-1 left-2"
                  alt="Warning icon"
                  src="/DOCgroup-4.png"
                />
              </div>
            </div>
            <AlertDescription className="font-semibold text-[#cf2a2a] text-xl leading-6 whitespace-nowrap font-['Raleway',Helvetica]">
              Обычно они выделяются низкой ценой и «сладкими обещаниями»
            </AlertDescription>
          </Alert>
        </div>

        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            size="icon"
            className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
            >
            <img className="w-3.5 h-6" alt="Next slide" src="/GROP-10.png" />

          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
          >
          <img className="w-3.5 h-6" alt="Next slide" src="/GROP-11.png" />

          </Button>
        </div>
      </div>

      <div className="flex items-start gap-6 w-full">
        {comparisonData.map((item) => (
          <Card
            key={item.type}
            className={`w-full max-w-[660px] h-[660px] rounded-[20px] ${
              item.isDark
                ? "bg-white border border-solid border-[#cecece] shadow-[var(--)] backdrop-blur-[79px]"
                : "bg-[#6FA7FF] shadow-2"
            }`}
          >
            <CardContent className="p-0">
              <div className="p-10">
                <div className="flex flex-col items-start gap-6">
                  <h3
                    className={`font-bold text-2xl leading-6 whitespace-nowrap font-['Raleway',Helvetica]  ${
                      item.isDark ? "text-[#394355]" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`font-semibold text-lg leading-6 font-['Raleway',Helvetica] ${
                      item.isDark ? "text-[#394355]" : "text-white"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                  <p
                    className={`font-medium text-base leading-6 font-['Raleway',Helvetica] ${
                      item.isDark ? "text-[#394355]" : "text-white"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
              <img
  className={`w-[580px] h-[389px] mx-auto mt-[-10px] rounded-3xl ${
    !item.isDark ? "object-cover" : "filter grayscale brightness-10"
  }`}
  alt={`${item.title} illustration`}
  src={item.imageSrc}
/>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
