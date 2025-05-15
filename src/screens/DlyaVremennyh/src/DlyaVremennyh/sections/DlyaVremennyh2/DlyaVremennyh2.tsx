import { Card, CardContent } from "../../../../../../components/ui/card";
import { Button } from "../../../../../../components/ui/button";


// Feature card data
const featureCards = [
  {
    id: 1,
    title: (
      <>
        <span className="text-[#232c42]">Минимум </span>
        <span className="text-[#527dc5]">15 лет</span>
      </>
    ),
    description: "будут иметь презентабельный вид\nдля аренды и проведения мероприятий",
    imageSrc: "/blue-water-splashing-alone--9-------1-5.png",
    position: "top-[60px] left-[35px]",
    iconClass: "w-224 h-224 -top-9 -left-[110px]" // Custom for card 1
  },
  {
    id: 2,
    title: (
      <>
        <span className="text-[#232c42]">Достаточно </span>
        <span className="text-[#527dc5]">мыть 1 раз в год</span>
      </>
    ),
    description: "для сохранения идеального внешнего вида.\nНе въедается грязь и пыль",
    imageSrc: "/blue-water-splashing-alone--9-------1-1.png",
    position: "top-[244px] left-[35px]",
    iconClass: "w-[168px] h-[168px] -top-[7px] -left-[27px]" // Custom for card 2
  },
  {
    id: 3,
    title: (
      <>
        <span className="text-[#527dc5]">Выдержат самые суровые условия</span>
        <span className="text-[#232c42]"> эксплуатации</span>
      </>
    ),
    description: "Ветер до 35м/c, снег от 60 до 380 кг/м2. Ваша компания не терпит убытки и упущенную прибыль из-за непогоды",
    imageSrc: "/blue-water-splashing-alone--9-------1-3.png",
    position: "top-[60px] left-[719px]",
    iconClass: "w-[232px] h-[232px] -top-[1px] -left-[110px]" // Custom for card 3
  },
  {
    id: 4,
    title: (
      <>
        <span className="text-[#527dc5]">Быстрая</span>
        <span className="text-[#232c42]"> окупаемость</span>
      </>
    ),
    description: "Не нужно тратиться на дорогой фундамент, можно использовать круглый год в любую погоду",
    imageSrc: "/M011t0367-d-gold-coin-06july22-------1.png",
    position: "top-[244px] left-[719px]",
    iconClass: "w-[380px] h-[380px] -top-5 -left-[150px]" // Custom for card 4
  },
  {
    id: 5,
    title: (
      <>
        <span className="text-[#527dc5]">Быстрый</span>
        <span className="text-[#232c42]"> монтаж</span>
      </>
    ),
    description: "Самостоятельно по подробной инструкции или нашими силами за 1-3 часа. И ваш бизнес уже укомплектован новым местом приема людей",
    imageSrc: "/blue-water-splashing-alone--9-------1-2.png",
    position: "top-[428px] left-[319px]",
    iconClass: "w-[156px] h-[156px] -top-[1px] -left-[40px]" // Custom for card 5
  },
];



export const DlyaVremennyh2 = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[1440px] h-[1191px] mx-auto bg-white">
      <div className="relative w-full max-w-[1427px] mx-auto px-3">
        
 {featureCards.map((card) => (
   <Card
     key={card.id}
     className={`absolute w-[660px] h-40 ${card.position} bg-white rounded-[30px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] overflow-hidden`} // Added overflow-hidden
   >
     <CardContent className="p-0 h-full">
       <div className="relative w-full h-full pl-28"> {/* Added padding for text area */}
         {/* Icon container with proper boundaries */}
         <div className={`absolute ${card.iconClass} overflow-visible z-10`}>
           <img
             className="w-full h-full object-contain"
             alt="Feature icon"
             src={card.imageSrc}
           />
         </div>
         
         {/* Text content */}
         <div className="inline-flex flex-col items-start gap-3 pt-8 h-full">
           <div className="relative w-fit font-bold text-transparent text-xl leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
             {card.title}
           </div>
           <div className="relative w-fit font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0] whitespace-pre-line">
             {card.description}
           </div>
         </div>
       </div>
     </CardContent>
   </Card>
 ))}


       {/* Promotions section */}
       <div className="inline-flex flex-col items-center gap-9 absolute top-[624px] left-[35px]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-semibold text-[#232c42] text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
            Акции
          </h2>

          <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
            {/* First promotion card */}
            <Card className="relative w-[660px] h-[379px] rounded-[30px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] bg-[#44546F]">
              <CardContent className="p-0">
                <div className="relative h-[379px] rounded-[20px]">
                  <div className="absolute w-[660px] h-[379px] top-0 left-0 rounded-[20px] overflow-hidden">
                    <div className="relative h-[379px]">
                      <img
                        className="absolute w-[660px] h-[248px] top-[100px] left-0"
                        alt="Element clouds"
                        src="/08-clouds-22.png"
                      />
                      <img
                        className="absolute w-[103px] h-[146px] top-0 left-[557px]"
                        alt="Ball PERCENT RED"
                        src="/ball-percent-3d-red-------2.png"
                      />
                      <img
                        className="absolute w-[99px] h-[189px] top-[190px] left-0"
                        alt="Ball PERCENT RED"
                        src="/ball-percent-3d-red-------2-1.png"
                      />
                      <img
                        className="absolute w-[660px] h-[379px] top-0 left-0 object-cover"
                        alt="Green grass texture"
                        src="/green-grass-texture-with-blang-copyspace-against-blue-sky-------.png"
                      />
                      <img
                        className="w-[197px] h-[154px] top-[225px] left-0 blur-[2px] absolute object-cover"
                        alt="Vecteezy ornamental"
                        src="/vecteezy-ornamental-grass-template-generative-ai-generated-24190-1.png"
                      />
                      <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 absolute top-[319px] left-[30px] bg-[#00000030] rounded-[50px] overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px]">
                        <div className="relative w-6 h-6">
                          <img
                            className="absolute w-4 h-4 top-1 left-1"
                            alt="Group"
                            src="/groupp.png"
                          />
                        </div>
                        <div className="relative w-fit mt-[-0.50px] [font-family:'Raleway',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                          Действительна до: 23.03.24
                        </div>
                      </div>
                      <img
                        className="w-[209px] h-[175px] top-[204px] left-[451px] blur-[7.5px] absolute object-cover"
                        alt="Vecteezy ornamental"
                        src="/vecteezy-ornamental-grass-template-generative-ai-generated-24190-1.png"
                      />
                      <img
                        className="absolute w-[414px] h-[379px] top-0 left-[246px] object-cover"
                        alt="Element"
                        src="/0-1-1.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[45px] left-[30px] [font-family:'Raleway',Helvetica] font-bold text-white text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
                    ДЕРЕВЯННЫЕ ШАТРЫ
                  </div>
                  <div className="inline-flex items-center gap-4 absolute top-[121px] left-[30px]">
                    <div className="inline-flex flex-col items-start gap-2.5 px-6 py-2 relative flex-[0_0_auto] rounded-lg overflow-hidden [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                      <div className="relative w-[110px] h-[53px] mr-[-2.00px]">
                        <div className="absolute top-0 left-0 [font-family:'Raleway',Helvetica] font-bold text-white text-[45px] tracking-[0] leading-[normal] whitespace-nowrap">
                          -10%
                        </div>
                      </div>
                    </div>
                    <div className="relative w-[198px] font-medium text-white text-xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                      Нанесение логотипа в подарок
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second promotion card */}
            <Card className="relative w-[660px] h-[379px] shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px] bg-[#DDEAFF]">
              <CardContent className="p-0">
                <div className="relative h-[379px] rounded-[30px]">
                  <div className="absolute w-[660px] h-[379px] top-0 left-0 rounded-[30px] overflow-hidden">
                    <div className="absolute w-[660px] h-[379px] top-0 left-0">
                      <img
                        className="absolute w-[201px] h-[115px] top-[186px] left-[459px]"
                        alt="Ball PERCENT RED"
                        src="/ball-percent-3d-red-------2-2.png"
                      />
                      <img
                        className="absolute w-[126px] h-32 top-[126px] left-[39px]"
                        alt="Ball PERCENT RED"
                        src="/ball-percent-3d-red-------3.png"
                      />
                      <img
                        className="absolute w-[353px] h-[316px] top-0 left-[307px]"
                        alt="Element clouds"
                        src="/08-clouds-1.png"
                      />
                      <img
                        className="absolute w-[660px] h-[379px] top-0 left-0"
                        alt="Green grass texture"
                        src="/green-grass-texture-with-blang-copyspace-against-blue-sky--------1.png"
                      />
                      <div className="absolute w-[117px] h-[117px] top-[262px] left-[543px] rounded-[0px_0px_20px_0px] overflow-hidden">
                        <img
                          className="absolute w-[117px] h-[117px] top-0 left-0"
                          alt="Green tea leaf"
                          src="/green-tea-leaf-premium-psd-11-------3.png"
                        />
                      </div>
                      <div className="absolute w-[323px] h-[193px] top-[95px] left-[337px] [background:linear-gradient(0deg,rgba(221,234,255,1)_0%,rgba(219,233,254,0)_100%)]" />
                      <div className="absolute w-[323px] h-6 top-72 left-[337px] [background:linear-gradient(0deg,rgba(174,214,108,1)_0%,rgba(131,185,54,0.79)_100%)]" />
                      <div className="absolute w-[323px] h-[193px] top-[95px] left-[337px] [background:linear-gradient(0deg,rgba(221,234,255,1)_0%,rgba(219,233,254,0)_100%)]" />
                      <div className="absolute w-[323px] h-[193px] top-[95px] left-[337px] [background:linear-gradient(0deg,rgba(221,234,255,1)_0%,rgba(219,233,254,0)_100%)]" />
                      <div className="absolute w-[660px] h-[193px] top-[95px] left-0 [background:linear-gradient(0deg,rgba(221,234,255,1)_0%,rgba(219,233,254,0)_100%)]" />
                      <img
                        className="absolute w-[365px] h-[300px] top-[79px] left-[295px]"
                        alt="Image withou BG"
                        src="/image-1-withou-bg-1.png"
                      />
                    </div>
                  </div>
                  <div className="absolute w-[588px] h-[310px] top-[45px] left-[29px]">
                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 absolute top-[274px] left-px bg-[#00000030] rounded-[50px] overflow-hidden shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px]">
                      <div className="relative w-6 h-6">
                        <img
                          className="absolute w-4 h-4 top-1 left-1"
                          alt="Group"
                          src="/groupp-1.png"
                        />
                      </div>
                      <div className="relative w-fit mt-[-0.50px] [font-family:'Raleway',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                        Действительна до: 23.03.24
                      </div>
                    </div>
                    <div className="absolute w-[588px] h-[136px] top-0 left-0">
                      <div className="absolute w-[588px] -top-px left-0 font-bold text-[#232c42] text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                        ДОСТАВКА ШАТРА В ПОДАРОК
                      </div>
                      <div className="inline-flex items-center gap-4 absolute top-[85px] left-px">
                        <div className="inline-flex flex-col items-start gap-2.5 px-6 py-2 relative flex-[0_0_auto] rounded-lg overflow-hidden [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
                          <div className="relative w-[149px] h-[35px] mr-[-2.00px]">
                            <div className="absolute top-0 left-0 font-bold text-white text-3xl leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                              ЛОГОТИП
                            </div>
                          </div>
                        </div>
                        <div className="relative w-[108px] font-medium text-[#394355] text-xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                          Нанесение в подарок
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Navigation buttons for promotions */}
        <div className="flex w-full items-start justify-between absolute top-[917px] left- -inset-3" >
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
    </div>
  );
};
