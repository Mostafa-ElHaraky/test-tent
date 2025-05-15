import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[562px] rounded-[30px] overflow-hidden">
      <div className="relative h-[562px]">
        {/* Background gradient */}
        <div className="absolute w-full h-[465px] top-[97px] left-0 rounded-[30px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]" />

        {/* Left grass decoration */}
        <img
          className="absolute w-[302px] h-[270px] top-[340px] left-[-50px]"
          alt="Decorative grass"
          src="/Vecteezy-overgrown-green-grass.png"
        />

        {/* Tent image */}
        <img
          className="absolute w-[505px] h-[562px] top-0 left-[935px]"
          alt="Event tent"
          src="/Event-Tent-i02.png"
        />

        {/* Main content container */}
        <div className="flex flex-col items-start gap-[55px] absolute top-[151px] left-[65px]">
          {/* Text content */}
          <div className="flex flex-col items-start gap-6">
            <h2 className="w-[401px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-[#232c42]">Уже </span>
              <span className="text-[#4377cd]">12 лет</span>
              <span className="text-[#232c42]">
                {" "}
                в сфере тентовых конструкций
              </span>
            </h2>

            <p className="font-medium text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
              Прошел путь от просто продажи шатров из Китая
              <br />
              до создания предприятия в РФ с полным циклом производства
            </p>

            <Card className="bg-white rounded-[10px] p-0 border-none">
              <CardContent className="p-5">
                <p className="font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0] w-[520px]">
                  Делаю все, чтобы вы, ваши сотрудники и клиенты чувствовали
                  себя комфортно, а ваш бизнес развивался без издержек на
                  постоянные ремонты
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features section */}
          <div className="flex w-[560px] items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6">
                <img
                  className="absolute w-6 h-[17px] top-[3px] left-0"
                  alt="Check icon"
                  src="/GROP-2.png"
                />
              </div>

              <p className="w-[260px] text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-semibold">
                  Контролирую соблюдение единых стандартов работы
                </span>
                <span className="font-medium"> всех сотрудников</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6">
                <img
                  className="absolute w-6 h-[17px] top-[3px] left-0"
                  alt="Check icon"
                  src="/GROP-3.png"
                />
              </div>

              <p className="w-[143px] text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="font-semibold">Лично веду</span>
                <span className="font-medium"> ключевых клиентов</span>
              </p>
            </div>
          </div>
        </div>

        {/* Person image */}
        <img
          className="absolute w-[475px] h-[554px] top-2 left-[829px] object-cover"
          alt="Company leader portrait"
          src="/Confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
        />

        {/* Introduction badge */}
        <Badge className="absolute w-[440px] top-[458px] left-[853px] px-6 py-3 rounded-[10px] text-lg text-center leading-6 [font-family:'Raleway',Helvetica] tracking-[0] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] border-none">
          <span className="font-medium text-white">
            Здравствуйте, меня зовут Бородин Андрей Я руководитель компании
          </span>
        </Badge>

        {/* Video button */}
        <Card className="absolute top-[273px] left-[1120px] px-6 py-3 bg-white rounded-[50px] border-[3px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-0">
            <div className="flex items-center gap-[15px]">
              <div className="relative w-[50px] h-[50px]">
                <div className="relative w-[47px] h-[33px] top-[9px] left-0.5">
                  <div className="relative h-[33px]">
                    <div className="absolute w-[23px] h-[23px] top-[5px] left-3 bg-white rounded-[11.5px]" />
                    <img
                      className="absolute w-[47px] h-[33px] top-0 left-0"
                      alt="Play icon"
                      src="/Vector-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="font-bold text-[#232c42] text-base leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                Видео
                <br />о компании
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};
