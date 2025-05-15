import { Button } from "../../../../components/ui/button";
import { useState } from "react";

interface BenefitItem {
  id: number;
  icon: string;
  text: string;
  width: string;
}

export const OverlapWrapperByAnima1 = (): JSX.Element => {
  const [isDark] = useState(false);
  
  const benefits: BenefitItem[] = [

    
    {
      id: 1,
      icon: "/DOCgroup-7.png",
      text: "Проверим качество\nиспользуемых материалов",
      width: "187px",
    },
    {
      id: 2,
      icon: "/DOCgroup-8.png",
      text: "Оценим правильность расчетов для выдерживания нагрузки",
      width: "227px",
    },
    {
      id: 3,
      icon: "/DOCgroup-9.png",
      text: "Оценим адекватность выставленной цены",
      width: "175px",
    },
  ];

  return (
    <section className="relative w-[1440px] h-[460px] rounded-[30px] overflow-hidden">
      <div className="relative h-full">
        {/* Background gradient */}
        <div className="absolute w-full h-[370px] top-[97px] left-0 rounded-[30px] bg-gradient-to-b from-[#F5F6FF] to-transparent" />

        {/* Decorative images */}
        <img
          className={`absolute w-[322.71px] h-[352.49px] top-[20px] left-[965.14px] rotate-[7.51deg] ${
            isDark ? "object-cover" : "filter grayscale brightness-10"
          }`}
          alt="Checklist"
          src="/DOCchecklist-------1.png"
        />


        <img
          className="absolute w-[319.13px] h-[226.6px] top-[300px] left-[-199px] blur-[15px] -scale-x-100 -rotate-[6.87deg]"
          alt="Grass decoration"
          src="/DOCvecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
        />

        <img
          className="absolute w-[285.29px] h-[164.73px] top-[187.51px] left-[906.49px] -scale-x-100 rotate-[4.58deg]"
          alt="Grass decoration"
          src="/DOCvecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.png"
        />

        <img
          className="absolute w-[492.06px] h-[349.4px] top-[268.52px] left-[1052px] blur-[15px] -rotate-[1.11deg]"
          alt="Grass decoration"
          src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.png"
        />



        {/* Content container */}
        <div className="flex flex-col items-start gap-[55px] absolute top-[151px] left-[65px]">
          <div className="flex flex-col items-start gap-6">
            <h2 className="w-[650px] font-semibold text-[36px] leading-[42px] font-['Raleway'] text-[#232c42]">
              Получили КП от других компаний,
              <br />
              <span className="text-[#527dc5]">
                что-то смущает или отталкивает?
              </span>
            </h2>

            <p className="w-[597px] font-medium text-[#394355] text-[18px] leading-[24px] font-['Raleway']">
              Давайте проанализируем КП и расскажем про подводные камни или их
              отсутствие в предложении другой компании
            </p>
          </div>

          {/* Benefits section */}
          <div className="flex w-[741px] justify-between">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-center gap-3">
                <div className="w-6 h-6">
                  <img className="w-6 h-[17px]" alt="Check icon" src={benefit.icon} />
                </div>
                <div
                  className="font-semibold text-[#394355] text-[14px] leading-[20px] font-['Raleway']"
                  style={{ width: benefit.width }}
                >
                  {benefit.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial proposal document */}
        <div 
  className="absolute font-['Raleway'] font-semibold text-center"
  style={{
    top: '147px',
    left: '1039.35px',
    width: '178.14px',
    height: '56.99px',
    transform: 'rotate(7.41deg)',
    fontSize: '22px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#232c42ab',
    fontWeight: 600 // Using numeric value for font-weight
  }}
>
  Коммерческое
  <br />
  предложение
</div>

        <div className="absolute w-[175px] top-[214px] left-[1029.44px] rotate-[7deg] font-semibold text-[#3943556b] text-[12px] text-center leading-[20px] font-['Raleway']">
          Строительство тента
        </div>

        {/* Chat bubble image */}
        <img
          className="absolute w-[146.02px] h-[175.26px] top-[10px] left-[1170.22px] rotate-[2.36deg]"
          alt="Chat"
          src="/chat-46-------1.png"
        />

        {/* CTA button and disclaimer */}
        <div className="absolute bottom-[43px] left-[907px] flex flex-col gap-3">
          <Button className="w-[412px] h-[68px] rounded-2xl shadow-[0px_22px_44px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[#73A8FF] via-[#6FA7FF] to-[#3C6CEC] font-semibold text-white text-[16px] font-['Raleway']">
            Получить оценку КП
          </Button>
          <p className="w-[383px] font-normal text-[#394355] text-[12px] text-center leading-[14px] font-['Raleway']">
            Заявка ни к чему не обязывает
          </p>
        </div>
      </div>
    </section>
  );
};