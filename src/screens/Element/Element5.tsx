import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

export const Element5 = (): JSX.Element => {
  // Capacity options data
  const capacityOptions = [
    { value: "50", label: "до 50 человек", display: "50" },
    { value: "50-200", label: "50-200 человек", display: "50-200" },
    { value: "200+", label: "от 200 человек", display: "от 200" },
    { value: "not-sure", label: "затрудняюсь ответить", icon: true },
  ];

  // Fabric issues data
  const fabricIssues = [
    {
      icon: "/FORgroup-5.png",
      title: "Будет постоянно пахнуть пластмассой",
      description: "при нагреве на солнце",
    },
    {
      icon: "/FORgroup-6.png",
      title: "Покроется плесенью",
      description: "и начнутся процессы гниения",
    },
    {
      icon: "/FORgroup-7.png",
      title: "Тент выцветет",
      description: "и станет серым, беклым и не красивым",
    },
    {
      icon: "/FORgroup-8.png",
      title: "Будет невозможно отмыть",
      description: "от въевшихся пятен грязи",
    },
    {
      icon: "/FORgroup-9.png",
      title: "Потрескается",
      description: "и начнет протекать прямо на головы людям",
    },
  ];

  // Fabric benefits data
  const fabricBenefits = [
    {
      icon: "/FORgroup-2.png",
      text: "Компания DICKSON\nоснована в 1969 году",
    },
    {
      icon: "/FORgroup-3.png",
      text: "Выпускает 25 000 000+ м2 ткани в год",
    },
  ];

  return (
    <main className="relative w-full max-w-[1440px] h-full max-h-[2205px] mx-auto bg-white">
      {/* First Section - Capacity Selection */}
      <section className="px-12 pt-[33px] pb-12">
        <div className="max-w-[1368px] mx-auto">
          <div className="flex flex-col w-full max-w-[627px] items-start gap-6 mb-12">
            <h1 className="font-['Raleway',Helvetica] font-semibold text-4xl">
              <span className="text-[#527dc5]">
                Нужен шатер под свои размеры,{" "}
              </span>
              <span className="text-[#232c42]">форму или дизайн?</span>
            </h1>

            <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg leading-6">
              Спроектируем и изготовим с гарантией 50 лет
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 p-6 bg-[#f2f4f7] rounded-[10px] max-w-[627px] mb-12">
            <p className="font-['Raleway',Helvetica] font-semibold text-[#4f5d80] text-base leading-6">
              Получите расчет цены шатра в 3х вариантах ответив на 3 вопроса
            </p>

            <Progress
              value={33.3}
              className="h-2.5 bg-[#4f5d802b] rounded w-full"
            />

            <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg">
              1 из 3
            </p>
          </div>
          

          <div className="flex flex-col items-start gap-6 mb-12">
            <h2 className="font-['Raleway',Helvetica] font-bold text-[#394355] text-xl leading-6">
              1. Какая вместимость?
            </h2>

            <RadioGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {capacityOptions.map((option, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[318px] h-[200px] rounded-[20px] shadow-md relative"
                >
                  <CardContent className="p-0 h-full">
                    <div className="p-5 h-full flex flex-col justify-between">
                      {option.icon ? (
                        <div className="w-[90px] h-[90px] bg-[#f5f6ff] rounded-[45px] flex items-center justify-center mt-[22px] ml-[22px]">
                          <div className="w-[54px] h-[54px] relative">
                            <img
                              className="w-12 h-[54px]"
                              alt="Question mark"
                              src="/FORgroup.png"
                            />
                          </div>
                        </div>
                      ) : (
<div 
  className="mt-5 ml-[22px] font-['Raleway',Helvetica] font-bold text-6xl"
  style={{ color: "#6FA7FF" }} // White text
>
  {option.display}
</div>
                      )}

                      <div className="flex items-center gap-3 mt-auto mb-6 ml-[22px]">
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="w-[25px] h-[25px] rounded-[12.5px] border-[#4f5d807d]"
                        />
                        <label
                          htmlFor={option.value}
                          className="font-['Raleway',Helvetica] font-normal text-[#394355] text-lg"
                        >
                          {option.label}
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>
          </div>

          {/* Gift Card */}
          <div 
  className="absolute w-[546px] h-[288px] left-[846px] top-[100px] rounded-[20px] bg-gradient-to-br from-[#243057] to-[#374255]"
  style={{
    background: "linear-gradient(108.32deg, #243057 -27.58%, #374255 107.93%)",
    borderRadius: "20px"
  }}
>
  {/* Content */}
  <div className="absolute top-[30px] left-[30px] z-10">
    <h3 className="font-['Raleway',Helvetica] font-bold text-white text-2xl leading-6 mb-6">
      Ваши подарки в конце
    </h3>

    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <img
          className="w-[75px] h-14 object-contain"
          alt="Star tent"
          src="/FORstar-tent-h02-1.png"
        />
        <p className="font-['Raleway',Helvetica] text-white text-base leading-6">
          3d проект вашего шатра под размеры
          <br />и оснащение
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative w-[62px] h-20">
          <img
            className="w-full h-full object-cover"
            alt="Calendar background"
            src="/hanging-blank-calender-------1.png"
          />
          <img
            className="absolute w-9 h-9 top-[29px] left-[13px] object-cover"
            alt="Calendar icon"
            src="/FORfc3740fa54440e5eaefe94690ddc2643-4.png"
          />
        </div>
        <p className="font-['Raleway',Helvetica] text-white text-base leading-6">
          Примеры уже готовых шатров схожими
          <br />с вашими задачами
        </p>
      </div>
    </div>

    <img
  className="absolute w-[262px] h-[284px] top-[-111px] left-[360px]"
  alt="Gifts"
  src="/gifts3-------1.png"
/>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <Button className="w-[412px] h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-['Raleway',Helvetica] font-semibold text-white text-base">
              Далее
            </Button>
          </div>
        </div>
      </section>

      {/* Second Section - Fabric Quality */}
      <section className="px-12 py-">
        <div className="max-w-[1392px] mx-auto relative">
          <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl mb-8">
            <span className="text-[#232c42]">
              Ткань тента приспособлена для работы{" "}
            </span>
            <span className="text-[#527dc5]">
              в самых жестких условиях эксплуатации. Даже в суровом климате
              России
            </span>
          </h2>

          <div className="flex items-center gap-4 p-3 bg-[#f2f4f7] rounded-[10px] mb-8 max-w-fit">
            <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg leading-6">
              Используем профессиональный французский бренд
            </p>
            <Badge className="p-3 rounded-[10px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <span className="font-['Raleway',Helvetica] font-extrabold text-white text-3xl">
                DICKSON
              </span>
            </Badge>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-[13px] h-[13px] rounded-[6.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
              <p className="font-['Raleway',Helvetica] font-normal text-[#394355] text-lg leading-5 max-w-[774px]">
                Закупаем оптовые объемы и даем вам цену ниже, чем другие
                компании
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-[13px] h-7 pt-[5px]">
                <div className="h-[13px] rounded-[6.5px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
              </div>
              <p className="font-['Raleway',Helvetica] font-semibold text-[#394355] text-lg leading-6 max-w-[634px]">
                С нами вы купите официальную продукцию, а не получаете китайскую
                под видом европейской
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <Card className="p-6 rounded-2xl shadow-lg backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] max-w-[509px] max-h-[166px] radius-[16px]">
              <CardContent className="p-0">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-2xl leading-6 mb-6">
                  Лучшая ткань в мире по цене-качеству
                </h3>

                <div className="flex justify-between flex-wrap gap-4 w-full">
                  {fabricBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img
                          className="w-6 h-[17px]"
                          alt="Checkmark"
                          src={benefit.icon}
                        />
                      </div>
                      <p className="font-['Raleway',Helvetica] font-semibold text-[#4f5d80] text-sm leading-5 max-w-[184px] whitespace-pre-line">
                        {benefit.text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex-1 relative min-h-[500px]">
              <img
                className="w-full h-auto max-w-[926px]"
                alt="Fabric sample"
                src="/rectangle-43.png"
              />

              <div className="absolute top-[136px] right-[376px] w-[408px] h-[275px]">
                <div className="relative">
                  <img
                    className="absolute w-[220px] h-[275px] top-[-130px] left-[395px]"
                    alt="Fabric document"
                    src="/rectangle-44.png"
                  />
                  <img
                    className="absolute w-[220px] h-[275px] top-[-130px] left-[494px]"
                    alt="Fabric document"
                    src="/rectangle-45.png"
                  />
                  <img
                    className="absolute w-[220px] h-[275px] top-[-130px] left-[588px]"
                    alt="Fabric document"
                    src="/rectangle-46.png"
                  />
                </div>
              </div>

              <Badge className="absolute top-[436px] right-[107px] flex items-center gap-[15px] px-6 py-3 bg-white rounded-[50px] border-[3px] border-solid shadow-md">
                <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <div className="w-[43px] h-[43px]">
                    <img
                      className="w-10 h-[43px]"
                      alt="Certificate"
                      src="/FORgroup-4.png"
                    />
                  </div>
                </div>
                <span className="font-['Raleway',Helvetica] font-bold text-[#232c42] text-base">
                  Официальные партнеры компании
                </span>
              </Badge>
            </div>
          </div>

          <Button className="relative top-[-170px] gap-[15px] h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] max-w-[499px]">
            <div className="w-[50px] h-[50px] top-[500px] flex items-center justify-center">
              <div className="w-[35px] h-[35px] bg-[url(/FORgroup-1.png)] bg-[100%_100%]" />
            </div>
            <span className="font-['Raleway',Helvetica] font-bold text-white text-base">
              Скачать документы на ткань
            </span>
          </Button>
        </div>
      </section>

      {/* Third Section - Fabric Warning */}
      <section className=" relative max-w[1440px] max-h-[4108px] px-12 py-8">
        <div className="max-w-[1392px] mx-auto">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-6">
              <h2 className="font-['Raleway',Helvetica] font-semibold text-4xl max-w-[798px]">
                <span className="text-[#527dc5]">Не экономьте на ткани, </span>
                <span className="text-[#232c42]">
                  чтобы через 2-3 года не пришлось заказывать новый тент
                </span>
              </h2>

              <p className="font-['Raleway',Helvetica] font-medium text-[#4f5d80] text-lg leading-6">
                А это на минуточку 50% от цены всего шатра
              </p>
            </div>

            <Card className="max-w-[1345px] max-h-[268px] p-6 rounded-2xl shadow-lg backdrop-blur-[79px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]">
              <CardContent className="p-0">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-[#242f57] text-2xl leading-6 mb-9">
                  Что вас ожидает через 1-3 года от плохой ткани
                </h3>

                <div className="flex flex-wrap gap-[55px]">
                  {fabricIssues.map((issue, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3 max-w-[212px]"
                    >
                      <div className="w-[174px] h-[108px] relative">
                        <div className="w-[108px] h-[108px] bg-[#f2f4f7] rounded-[87px] absolute left-[33px] flex items-center justify-center">
                          <img
                            className="w-[50px] h-[50px] object-contain"
                            alt={`Issue ${index + 1}`}
                            src={issue.icon}
                          />
                        </div>
                      </div>

                      <p className="font-['Raleway',Helvetica] text-[#4f5d80] text-sm leading-5 text-center">
                        <span className="font-semibold">{issue.title} </span>
                        {issue.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};
