import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for intermediaries problems
const intermediaryProblems = [
  {
    icon: "/group.png",
    title: "Срыв сроков",
    description:
      "Из-за «испорченного телефона» каждый этап придется долго согласовывать и постоянно уточнять детали",
  },
  {
    icon: "/group-1.png",
    title: "Плохое качество",
    description:
      "и несоответствие заказу. Общение происходит через людей не имеющих отношение к прямому производству, у них свое видение итогового качества",
  },
  {
    icon: "/group-2.png",
    title: "Дороже стоимость",
    description:
      "Каждый посредник накручивает свою маржу в цену или ухудшает качество материалов, чтобы получить свою выгоду",
  },
  {
    icon: "/group-3.png",
    title: "Сложности с гарантией и сервисным обслуживанием",
    description:
      "Посредникам главное продать, а потом можно и прикрыть фирму-однодневку",
  },
];

// Data for direct manufacturer advantages
const manufacturerAdvantages = [
  {
    icon: "/group-4.png",
    title: "Общение ведется напрямую с личным менеджером",
    description:
      "Всегда на связи инженеры и дизайнеры. Недопонимания исключены",
  },
  {
    icon: "/group-5.png",
    title: "Работаем с соблюдением Гост, СНИП",
    description:
      "С 2012 года сделано более 3000 тентовых конструкций (шатры, ангары и прочее)",
  },
  {
    icon: "/group-6.png",
    title: "Мы сами закупаем материалы и производим детали",
    description: "Вы получаете цену без лишней накрутки",
  },
  {
    icon: "/group-7.png",
    title: "Мы на рынке более 10 лет, репутация доказана временем",
    description: "Можете связаться с нашими клиентами и спросить сами",
  },
];

export const Screen25 = (): JSX.Element => {
  return (
    <div className="relative bg-white max-w-[375px] min-h-[1151px]">
      <div className="flex flex-col items-start gap-6 pt-[30px] px-6">
        <h1 className="w-full font-semibold text-[22px] leading-normal [font-family:'Raleway',Helvetica] tracking-[0]">
          <span className="text-[#527dc5]">
            Мы избавим вас
            <br />
            от проблем
          </span>
          <span className="text-[#232c42]">
            {" "}
            возникающих
            <br />
            при работе с посредниками-перекупщиками
          </span>
        </h1>

        <div className="flex flex-col items-start gap-4 w-full">
          {/* Intermediaries Card */}
          <Card className="w-full rounded-[20px] border border-solid border-[#d5d5d5] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
            <CardContent className="p-6">
              <h2 className="font-semibold text-[#242f57] text-base text-center mb-6 [font-family:'Raleway',Helvetica]">
                Посредники
              </h2>

              <div className="flex flex-col gap-6">
                {intermediaryProblems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="relative w-7 h-7 flex-shrink-0">
                      <XCircleIcon className="text-red-500" size={28} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-semibold text-[#394355] text-xs leading-[18px] [font-family:'Raleway',Helvetica]">
                        {problem.title}
                      </h3>
                      <p className="font-normal text-[#4f5d80] text-[10px] leading-4 [font-family:'Raleway',Helvetica]">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Manufacturer Card */}
          <Card className="w-full rounded-[20px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)]">
            <CardContent className="p-6">
              <h2 className="font-semibold text-white text-base text-center mb-6 [font-family:'Raleway',Helvetica]">
                Напрямую у нас -производителя Mobile tent
              </h2>

              <div className="flex flex-col gap-6">
                {manufacturerAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="relative w-7 h-7 flex-shrink-0 shadow-[0px_22px_44px_#1f7cfe66,0px_4px_20px_#00000026]">
                      <div className="relative w-[25px] h-[25px] flex items-center justify-center">
                        <CheckCircleIcon className="text-green-500" size={28} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-semibold text-white text-xs leading-[18px] [font-family:'Raleway',Helvetica]">
                        {advantage.title}
                      </h3>
                      <p className="font-normal text-white text-[10px] leading-4 [font-family:'Raleway',Helvetica]">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
