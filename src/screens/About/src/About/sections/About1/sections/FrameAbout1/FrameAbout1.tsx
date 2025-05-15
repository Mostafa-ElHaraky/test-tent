import { Card, CardContent } from "../../../../../../../../components/ui/card";
import { Button } from "../../../../../../../../components/ui/button";
import { Badge } from "../../../../../../../../components/ui/badge";

export const FrameAbout1 = (): JSX.Element => {
  // Data for service cards
  const features = [
    {
      id: 1,
      icon: "/grouppp-3.png",
      title: "Разработаем проект шатра",
      description:
        "удобный для пользования всеми гостями и неприхотливого в обслуживании",
    },
    {
      id: 2,
      icon: "/grouppp-4.png",
      title: "Уложимся в срок",
      description: "до мероприятия или сезона",
    },
    {
      id: 3,
      icon: "/grouppp-5.png",
      title: "Поможем увеличить посадочные места",
      description:
        "или создать новые места для проведения мероприятий и приема гостей",
    },
    {
      id: 4,
      icon: "/grouppp-6.png",
      title: "Выдадим сертификаты о пожарной безопасности,",
      description: "если нужно ввести в эксплуатацию",
    },
    {
      id: 5,
      icon: "/grouppp-7.png",
      title: "Забрендируем шатер",
      description: "для повышения узнаваемости вашей компании",
    },
    {
      id: 6,
      icon: "/group-8.png",
      title: "Разработаем сайт",
      description: "для постоянного прихода клиентов в ваш бизнес",
    },
  ];

  // Client logos data
  const clientLogos = [
    {
      src: "/image-19.png",
      alt: "Sberbank logo",
      width: "300px",
      height: "42px",
      top: "30px",
      left: "-39px",
    },
    {
      src: "/image-20.png",
      alt: "VTB logo",
      width: "223px",
      height: "50px",
      top: "150px",
      left: "275px",
    },
    {
      src: "/image-22.png",
      alt: "Coca-Cola logo",
      width: "171px",
      height: "74px",
      top: "32px",
      left: "269px",
    },
    {
      src: "/image-21.png",
      alt: "Burger King logo",
      width: "178px",
      height: "100px",
      top: "115px",
      left: "55px",
    },
  ];

  return (
    <div className="relative top-[350px]">
        <div className="relative w-[1440px] h-[1345px] mx-auto bg-white">
          {/* First section */}
          <div className="w-full h-[195px]">
            <h2 className="text-4xl font-normal [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="font-medium text-[#232c42]">Делаем все, чтобы </span>
              <span className="font-bold text-[#527dc5]">
                ваша компания больше зарабатывала на аренде и приеме гостей
              </span>
            </h2>
      
            <Card className="w-full p-8 rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature) => (
                    <div key={feature.id} className="flex items-start gap-[34px]">
                      <div className="relative w-[60px] h-[60px]">
                        <div className="relative w-9 h-[38px] top-[11px] left-3">
                          <div className="relative h-[38px]">
                            <div className="absolute w-[23px] h-[23px] top-[7px] left-[7px] bg-white rounded-[11.63px]" />
                            <img
                              className="absolute w-9 h-[38px] top-0 left-0"
                              alt="Feature icon"
                              src={feature.icon}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="font-normal text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                        <span className="font-semibold">{feature.title} </span>
                        <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0] leading-6">
                          {feature.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
      
          {/* Clients section */}
          <div className="relative top-[150px]">
          <div className="w-[1440px] h-[456px]">
            <Card className="w-full h-full rounded-[30px] shadow-[0px_24px_38px_#161D2414] backdrop-blur-[158px] [-webkit-backdrop-filter:blur(158px)]">
              <CardContent className="p-0">
                <div className="flex flex-row h-full">
                  {/* Left content */}
                  <div className="flex flex-col items-start gap-9 pt-[123px] pl-12">
                    <h2 className="w-[567px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                      <span className="text-[#527dc5]">Наши клиенты крупные </span>
                      <span className="text-[#232c42]">
                        частные и государственные компании по всей России и СНГ
                      </span>
                    </h2>
      
                    <div className="flex items-center gap-[5px]">
                      <div className="flex items-start gap-3">
                        <p className="w-fit mt-[-1.00px] font-normal text-[#232c42] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                          Работаем по 44-ФЗ и 223-ФЗ. Можем заключить контракт,
                          <br />
                          как с единственным поставщиком в рамках этих законов
                        </p>
                      </div>
                    </div>
                  </div>
      
                  {/* Right content with logos */}
                  <div className="w-[684px] h-[391px]">
                    <div className="relative w-[684px] h-[391px]">
                      <div className="relative h-[812px] top-[-421px] rounded-[342px]">
                        <div className="absolute w-[481px] h-[234px] top-[456px] left-[88px]">
                          {clientLogos.map((logo, index) => (
                            <img
                              key={index}
                              className="absolute"
                              style={{
                                width: logo.width,
                                height: logo.height,
                                top: logo.top,
                                left: logo.left,
                              }}
                              alt={logo.alt}
                              src={logo.src}
                            />
                          ))}
                        </div>
      
                        <div className="flex items-start gap-3 absolute top-[710px] left-[214px]">
                          <p className="w-fit mt-[-1.00px] font-normal text-[#4f5d80] text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                            <span className="font-medium">и </span>
                            <span className="font-extrabold">еще 100+</span>
                            <span className="font-medium"> известных компаний</span>
                          </p>
                        </div>
                      </div>
                    </div>
      
                    {/* Navigation buttons */}
                    <div className="flex items-start gap-[45px] absolute top-[352px] left-[278px]">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                      >
                        <div className="relative w-6 h-6 rotate-180">
                          <img
                            className="absolute w-3.5 h-6 top-0 left-[5px] -rotate-180"
                            alt="Previous"
                            src="/group-18.png"
                          />
                        </div>
                      </Button>
      
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-14 h-14 rounded-full shadow-[0px_15px_44px_#1f7cfe66] p-0 border-none bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC]"
                      >
                        <div className="relative w-6 h-6">
                          <img
                            className="absolute w-3.5 h-6 top-0 left-[5px]"
                            alt="Next"
                            src="/group-19.png"
                          />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
      
          {/* Tender section */}
          <div className="relative top-[200px]">
          <div className="w-[1440px] h-[604px] rounded-[30px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px] bg-[url(/metal-structure-against-the-blue-sky-with-white-clouds-1.png)] bg-cover bg-center overflow-hidden">
            <div className="relative w-full h-full">
              {/* Blue gradient circle */}
              <div className="absolute w-[1440px] h-[604px] rounded-[30px] [background:linear-gradient(108.32deg,_#243057_19.48%,_rgba(34,_67,_124,_0.51)_107.93%)]" />    
              <div className="flex flex-col items-start gap-9 absolute top-[54px] left-[50px]">
                <div className="flex flex-col items-end gap-10">
                  {/* Headline */}
                  <div className="flex flex-col w-[658px] items-start gap-6">
                    <h1 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
                      <span className="text-[#639dff]">Работаем с тендерами</span>
                      <span className="text-white">
                        {" "}
                        с бюджетами по 10 000 000 рублей
                      </span>
                    </h1>
                  </div>
      
                  {/* Registry info card */}
                  <Card className="bg-[#73a7ff59] border-none rounded-[20px]">
                    <CardContent className="flex items-center gap-[30px] p-6">
                      <div className="w-fit [font-family:'Raleway',Helvetica] text-white text-xl">
                        <span className="font-semibold leading-6">
                          Входим в реестр МИНПРОМТОРГА
                          <br />
                        </span>
                        <span className="leading-6">
                          в качестве официального производителя
                        </span>
                      </div>
      
                      <Badge className="bg-white rounded-[20px] px-3 py-1.5 w-[185px] h-[66px] flex items-start">
                        <div className="flex flex-col gap-[6px] w-full">
                          <div className="flex items-center gap-3 w-full h-[54px]">
                            <div className="w-[79px] h-[54px] font-bold text-[46px] leading-[54px] text-[#6FA7FF] [font-family:'Raleway',Helvetica]">
                              30+
                            </div>
                            <div className="w-[70px] h-[40px] font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                              Тендеров выиграли
                            </div>
                          </div>
                        </div>
                      </Badge>
                    </CardContent>
                  </Card>
      
                  {/* Bullet points */}
                  <div className="flex flex-col w-[650px] items-start gap-[21px]">
                    {[
                      {
                        text: (
                          <>
                            <span className="font-medium">С </span>
                            <span className="font-bold">
                              2023 года нужно обязательно входить в реестр
                            </span>
                            <span className="font-medium">
                              , чтобы учавствовать в торгах
                            </span>
                          </>
                        ),
                      },
                      {
                        text: (
                          <>
                            <span className="font-bold">Аккредитованы</span>
                            <span className="font-medium">
                              {" "}
                              на большинстве тендерных площадках
                            </span>
                          </>
                        ),
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-[17px]">
                        <div className="w-3 h-3 rounded-md [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]" />
                        <div className="font-normal text-white text-base leading-6 [font-family:'Raleway',Helvetica]">
                          {item.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
      
                {/* CTA section */}
                <div className="flex flex-col items-start justify-center gap-3">
                  <Button className="w-[412px] h-[68px] rounded-2xl border-none shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <span className="font-semibold text-white text-base text-center whitespace-nowrap [font-family:'Raleway',Helvetica]">
                      Запросить контакты
                    </span>
                  </Button>
                  <p className="w-[412px] font-normal text-white text-xs text-center [font-family:'Raleway',Helvetica]">
                    Вы можете лично поговорить с клиентами и посетить их объекты,
                    чтобы узнать все подробности о нашей работе
                  </p>
                </div>
              </div>
      
              {/* Background elements */}
              <img
                className="w-[601px] h-[430px] absolute top-0 right-[131px] object-cover"
                alt="Element clouds"
                src="/element8-08-clouds-1.png"
              />
      
              <div className="absolute w-[676px] h-[513px] bottom-[-243px] right-[-11px] rounded-[338px/256.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(7,12,30,1)_0%,rgba(17,27,63,0)_100%)]" />
      
              <div className="absolute w-[725px] h-[101px] bottom-[-163px] right-[-43px] bg-[#232c42] rounded-[362.5px/50.5px] blur-[25px]" />
      
              <img
                className="absolute w-[790px] h-[604px] top-0 right-0 object-cover"
                alt="Event tent"
                src="/element8-event-tent-i02-2.png"
              />
      
              <img  
                className="absolute w-[299px] h-[190px] bottom-0 left-0"
                alt="Vecteezy overgrown"
                src="/element8-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
              />
      
              <img
                className="w-[464px] h-[339px] absolute bottom-0 right-0 blur-[15px] object-cover"
                alt="Element clouds"
                src="/08-clouds-1.png"
              />
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};