import { Card, CardContent } from "../../../../../../../components/ui/card";
import { Button } from "../../../../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../../../../../components/ui/tabs";

export const FrameDlyaVremennyh7 = (): JSX.Element => {


    // Data for service features
    const serviceFeatures = [
      {
        icon: "/element7-10.png",
        title: "Произведет замеры участка",
        description: "и соберет данные для создания бесплатного 3D проекта",
      },
      {
        icon: "/element7-11.png",
        title: "Покажет разные ткани",
        description: "для сравнения качества",
      },
      {
        icon: "/element7-12.png",
        title: "Расскажет о циклах",
        description: "и методах производства",
      },
      {
        icon: "/element7-13.png",
        title: "Отвезет на реальные объекты",
        description: "смонтированные у клиентов",
      },
    ];
  
    // Data for Russian cities
    const russianCities = [
      ["Новосибирск", "Самара", "Казань", "Иркутск"],
      ["Екатеринбург", "Сочи", "Краснодар", "Чебоксары"],
    ];
  
    // Data for CIS countries
    const cisCountries = [
      {
        name: "Казахстан",
        flagSrc: "/ellipse-14.png",
      },
      {
        name: "Узбекистан",
        flagSrc: "/ellipse-14-1.png",
      },
      {
        name: "Азербайджан",
        flagSrc: "/ellipse-14-2.png",
      },
      {
        name: "Республика Беларусь",
        flagSrc: "/ellipse-14-3.png",
      },
    ];
 
    




    // Data for the intermediary problems
const intermediaryProblems = [
  {
    icon: "/element7-2.png",
    title: "Срыв сроков",
    description:
      "Из-за «испорченного телефона» каждый этап придется долго согласовывать и постоянно уточнять детали",
  },
  {
    icon: "/element7-3.png",
    title: "Плохое качество",
    description:
      "и несоответствие заказу. Общение происходит через людей не имеющих отношение к прямому производству, у них свое видение итогового качества",
  },
  {
    icon: "/element7-4.png",
    title: "Дороже стоимость",
    description:
      "Каждый посредник накручивает свою маржу в цену или ухудшает качество материалов, чтобы получить свою выгоду",
  },
  {
    icon: "/element7-5.png",
    title: "Сложности с гарантией и сервисным обслуживанием",
    description:
      "Посредникам главное продать, а потом можно и прикрыть фирму-однодневку",
  },
];

// Data for direct manufacturer benefits
const manufacturerBenefits = [
  {
    icon: "/element7-6.png",
    title: "Общение ведется напрямую с личным менеджером",
    description:
      "Всегда на связи инженеры и дизайнеры. Недопонимания исключены",
  },
  {
    icon: "/element7-7.png",
    title: "Работаем с соблюдением Гост, СНИП.",
    description:
      "С 2012 года сделано более 3000 тентовых конструкций (шатры, ангары и прочее)",
  },
  {
    icon: "/element7-8.png",
    title: "Мы сами закупаем материалы и производим детали.",
    description: "Вы получаете цену без лишней накрутки",
  },
  {
    icon: "/element7-9.png",
    title: "Мы на рынке более 10 лет, репутация доказана временем.",
    description: "Можете связаться с нашими клиентами и спросить сами",
  },
];
 


const cardData = [
  {
    id: 1,
    titlePart1: "Пыль ",
    titlePart2: "не оседает на ткань",
    description: "Достаточно мыть 1 раз в год. Грязь смывается под дождем",
    imageSrc: "/FrameShatry7-------1-1500x-1.png",
    imageAlt: "Element",
    imageClassName: "w-[337px] h-[254px] object-cover",
  },
  {
    id: 2,
    titlePart1: "Возможность ",
    titlePart2: "увеличения площади",
    description: "путем соединения нескольких шатров",
    imageSrc: "/FrameShatry7-------1-1500x-1-1.png",
    imageAlt: "Element",
    imageClassName: "w-[337px] h-[271px] mb-[-23.00px]",
  },
  {
    id: 3,
    titlePart1: "Создаем ",
    titlePart2: "сайт для привлечения ",
    titlePart3: "клиентов в ваш бизнес",
    description: "Будет еще один источник прибыли",
    hasSpecialImages: true,
  },
]; 



  // Testimonial data
  const testimonial = {
    text: "Покупка не бюджетного шатра стоило того. Шатер выдерживает нагрузки ветра и не пахнет на солнце, как предыдущий",
    author: "Максимова Н.В. генеральный директор",
    images: ["/rectangle-57.png", "/rectangle-58.png"],
  };

  // Tab options
  const tabOptions = [
    { id: "text", label: "Текстовые" },
    { id: "letters", label: "Благодарственные письма" },
    { id: "reviews", label: "Отзовики" },
  ];
 



  return (
<section className="flex flex-col w-[1344px] h-[1819px] gap-[75px] py-[30px] px-12">
        {/* First section - Problems with intermediaries */}
      <h2 className="w-full max-w-[888px] text-4xl font-semibold font-['Raleway',Helvetica] tracking-normal">
        <span className="text-[#527dc5]">Мы избавим вас от проблем</span>
        <span className="text-[#232c42]">
          {" "}
          возникающих
          <br />
          при работе с посредниками-перекупщиками
        </span>
      </h2>

      <div className="flex items-start gap-6 relative">
        {/* Intermediaries Card */}
        <Card className="w-[660px] h-[693px] rounded-[20px] border border-[#D5D5D5] shadow-[var(--)] backdrop-blur-[79px]">
          <CardContent className="p-12 pt-12">
            <h3 className="text-center text-2xl font-semibold text-[#242f57] font-['Raleway',Helvetica] mb-16">
              Посредники
            </h3>

            <div className="space-y-10">
              {intermediaryProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-8">
                  {/* Fixed icon implementation */}
                  <div className="w-[74px] h-[74px] rounded-full flex items-center justify-center">
                    <img 
                      src={problem.icon} 
                      alt={problem.title}
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-[#394355] text-base leading-6 font-['Raleway',Helvetica]">
                      {problem.title}
                    </h4>
                    <p className="text-[#4f5d80] text-sm leading-5 font-normal font-['Raleway',Helvetica] max-w-[420px]">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Direct Manufacturer Card */}
        <Card 
          className="w-[660px] h-[693px] absolute left-[684px] rounded-[20px] shadow-[0px_22px_44px_#207CFE66] bg-[linear-gradient(180deg,#73A8FF_0%,#6FA7FF_36.5%,#3C6CEC_100%)]"
        >
          <CardContent className="p-12 pt-12">
            <h3 className="text-center text-2xl font-semibold text-white font-['Raleway',Helvetica] mb-16">
              Напрямую у нас -производителя Mobile tent
            </h3>

            <div className="space-y-10">
              {manufacturerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-6">
                  {/* Simplified icon container - no background */}
                  <div className="flex-shrink-0">
                    <img
                      className="w-12 h-12 object-contain"
                      alt={benefit.title}
                      src={benefit.icon}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-white text-lg leading-6 font-['Raleway',Helvetica]">
                      {benefit.title}
                    </h4>
                    <p className="text-white text-base leading-5 font-normal font-['Raleway',Helvetica] max-w-[420px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second section - Live meeting with representative */}
      <div className="relative top-[-30px]">
        <h2 className="font-semibold text-4xl font-['Raleway',Helvetica] mb-20">
          <span className="text-[#527dc5]">Организуем живую встречу </span>
          <span className="text-[#232c42]">
            с представителем компании в вашем городе
          </span>
        </h2>
        
        <div className="flex flex-col gap-6">
          {/* Service features card */}
          <Card 
            className="w-[1343px] h-[127px] absolute top-[94px] left-[-1px] rounded-[16px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] p-[24px]"
          >         
            <CardContent className="p-6">
              <div className="flex flex-wrap items-start gap-[60px] h-full">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="relative w-[25px] h-[25px] left-[-35px] top-[-10px]">
                      <div className="w-[74px] h-[74px] bg-[#F3F4F7] rounded-[87px] flex items-center justify-center">
                        <img 
                          src={feature.icon} 
                          alt={feature.title}
                          className="w-30 h-30"
                        />                
                      </div>
                    </div>
                    <div className="flex flex-col w-[217px] items-start justify-center gap-1.5">
                      <div className="font-semibold text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica]">
                        {feature.title}
                      </div>
                      <div className="font-normal text-[#4f5d80] text-sm leading-5 font-['Raleway',Helvetica]">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main content area with image and representatives */}
          <div className="w-[1390px] h-[752px] absolute top-[179px] left-[-48px] flex flex-wrap gap-8">
            {/* Left side with businessman image */}
            <div className="relative w-full md:w-[635px]">
              <img
                className="relative w-[507px] h-[628px]"
                alt="Rectangle"
                src="/rectangle-49.png"
              />
              <img
                className="absolute w-[527px] h-[610px] top-16 left-24"
                alt="Confident young businessman"
                src="/element7_confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
              />
              <div className="absolute w-[463px] h-[109px] top-[565px] left-[143px] -rotate-180 [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
              <div className="absolute w-[211px] h-[211px] top-[508px] left-[79px] rounded-[105.39px] rotate-[46.81deg] blur-[25px] backdrop-blur-[25px] [background:linear-gradient(180deg,rgba(90,145,238,0.55)_0%,rgba(82,125,197,0)_100%)]" />
              <div className="absolute w-[79px] h-[79px] top-[333px] left-[544px] rounded-[39.66px] rotate-[-158.76deg] blur-[15px] [background:linear-gradient(180deg,rgba(86,164,255,1)_0%,rgba(82,125,197,0)_100%)]" />
              <div className="absolute w-[31px] h-[31px] top-[107px] left-[216px] rounded-[15.49px] rotate-[-158.76deg] blur-[15px] [background:linear-gradient(180deg,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)]" />
            </div>

            {/* Right side with representatives */}
            <Card 
              className="w-[658px] h-[572px] absolute top-[250px] left-[732px] rounded-[20px] border border-[#E3E3E3] shadow-[0px_22px_44px_#207CFE66] bg-[linear-gradient(108.32deg,#243057_-27.58%,#374255_107.93%)]"
            >
              <CardContent className="p-14 pt-[51px]">
                <div className="flex flex-col gap-[60px]">
                  <h3 className="font-semibold text-white text-2xl leading-6 font-['Raleway',Helvetica]">
                    Представительства в городах и странах СНГ
                  </h3>

                  {/* Cities list */}
                  <div className="flex gap-[156px]">
                    {russianCities.map((column, colIndex) => (
                      <div key={colIndex} className="flex flex-col gap-4">
                        {column.map((city, cityIndex) => (
                          <div
                            key={cityIndex}
                            className="flex items-center gap-2.5"
                          >
                            <img
                              className="w-[10.5px] h-[9.53px]"
                              alt="Polygon"
                              src="/polygon-3.svg"
                            />
                            <div className="font-medium text-white text-base leading-5 font-['Raleway',Helvetica]">
                              {city}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Countries grid */}
                  <div className="flex flex-wrap gap-6">
                    {cisCountries.map((country, index) => (
                      <Card
                        key={index}
                        className="w-[259px] h-[85px] bg-[#a9beef1a] rounded-[20px] border border-solid border-[#d3d3d31a]"
                      >
                        <CardContent className="p-0">
                          <div className="flex items-center gap-3 p-6">
                            <img
                              className="w-[50px] h-[50px] object-cover"
                              alt={`Flag of ${country.name}`}
                              src={country.flagSrc}
                            />
                            <div className="font-semibold text-white text-base leading-5 font-['Raleway',Helvetica]">
                              {country.name}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      





      <div className="flex flex-row items-start gap-[23px] mt-[770px]">  
      {cardData.map((card) => (
        <Card
          key={card.id}
          className="flex flex-col w-[432px] h-[386px] items-center gap-2.5 p-6 rounded-2xl overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]"
        >
          <CardContent className="p-0 w-full flex flex-col items-center">
            <div className="flex w-full items-start justify-center gap-3">
              <div className="inline-flex flex-col items-center justify-center gap-2">
                <div className="relative mt-[-1.00px] [font-family:'Raleway',Helvetica] font-semibold text-[22px] text-center tracking-[0] leading-[normal]">
                  <span className="text-[#4f5d80]">{card.titlePart1}</span>
                  <span className="text-[#527dc5]">{card.titlePart2}</span>
                  {card.titlePart3 && (
                    <span className="text-[#4f5d80]">{card.titlePart3}</span>
                  )}
                </div>

                <div className="relative w-[310px] [font-family:'Raleway',Helvetica] font-normal text-[#4f5d80] text-sm text-center tracking-[0] leading-5">
                  {card.description}
                </div>
              </div>
            </div>

            {!card.hasSpecialImages ? (
              <img
                className={card.imageClassName}
                alt={card.imageAlt}
                src={card.imageSrc}
              />
            ) : (
              <div className="relative w-[357px] h-[246px]">
                <div className="relative w-[363px] h-64 top-1 -left-0.5">
                  <img
                    className="absolute w-[280px] h-[216px] top-0 left-0"
                    alt="Element"
                    src="/FrameShatry7-------1-1500x-1-2.png"
                  />
                  <img
                    className="absolute w-[186px] h-[219px] top-[37px] left-[177px]"
                    alt="Element"
                    src="/FrameShatry7-------1-1500x-2.png"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="w-[1344px] h-[81px] flex items-center gap-[62px]">
            <div className="flex flex-col items-start gap-3">
              <h2 className="font-semibold text-4xl font-['Raleway',Helvetica]">
                <span className="text-[#232c42]">Уже </span>
                <span className="text-[#527dc5]">800+ компаний купили</span>
                <span className="text-[#232c42]"> наши шатры</span>
              </h2>
    
              <div className="flex items-center gap-[5px]">
                <div className="relative w-[27px] h-[27px]">
                  <img
                    className="absolute w-[25px] h-[25px] top-px left-px"
                    alt="Group"
                    src="/group-14.png"
                  />
                </div>
                <p className="font-medium text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                  Пишут реальные отзывы
                </p>
              </div>
            </div>
    
            <Tabs defaultValue="text" className="flex items-start gap-6">
              <TabsList className="bg-transparent p-0 gap-6">
                {tabOptions.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="px-6 py-3 bg-[#e1ecff] rounded-[50px] shadow-[var(--)] backdrop-blur-[79px] text-[#394355] text-base font-semibold font-['Raleway',Helvetica] data-[state=active]:bg-[#e1ecff]"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
    
          <Card 
      className="w-[1343px] h-[326px] bg-white rounded-[20px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] relative"
    >
              <CardContent className="p-0">
              <div className="flex items-start gap-6 absolute top-[43px] left-10">
                <div className="relative w-[59px] h-[59px] -rotate-180">
                  <img
                    className="absolute w-11 h-[33px] top-[18px] left-[7px] rotate-180"
                    alt="Group"
                    src="/group-15.png"
                  />
                </div>
    
                <div className="flex flex-col items-start gap-9">
                  <p className="w-[570px] font-normal text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                    {testimonial.text}
                  </p>
                  <p className="font-semibold text-[#4f5d80] text-lg leading-6 font-['Raleway',Helvetica]">
                    {testimonial.author}
                  </p>
                </div>
              </div>
    
              <div className="flex items-start gap-[26px] absolute top-10 left-[785px]">
                {testimonial.images.map((image, index) => (
                  <img
                    key={index}
                    className="w-[246px] h-[246px] object-cover"
                    alt={`Testimonial image ${index + 1}`}
                    src={image}
                  />
                ))}
              </div>
    
              <div className="flex items-start gap-[45px] absolute top-[233px] left-12">
                <Button
                  variant="outline"
                  className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  >
                  <div className="relative w-6 h-6 rotate-180">
                    <img
                      className="absolute w-3.5 h-6 top-0 left-[5px] -rotate-180"
                      alt="Previous"
                      src="/group-16.png"
                    />
                  </div>
                </Button>
    
                <Button
                  variant="outline"
                  className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                  >
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-3.5 h-6 top-0 left-[5px]"
                      alt="Next"
                      src="/group-17.png"
                    />
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
    </section>
  );
};
