import { Card, CardContent } from "../../../../components/ui/card";

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

export const HeroImageSection = (): JSX.Element => {
  return (
    <section className="w-[1344px] h-[813px] absolute top-[205px] left-[48px] flex flex-col items-start gap-[36px] py-12">
      <h2 className="w-full max-w-[888px] text-4xl font-semibold font-['Raleway',Helvetica] tracking-normal">
        <span className="text-[#527dc5]">Мы избавим вас от проблем</span>
        <span className="text-[#232c42]">
          {" "}
          возникающих
          <br />
          при работе с посредниками-перекупщиками
        </span>
      </h2>

      <div className="flex items-start gap-6">
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
          <div className="w-[74px] h-[74px]  rounded-full flex items-center justify-center">
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
    </section>
  );
};
