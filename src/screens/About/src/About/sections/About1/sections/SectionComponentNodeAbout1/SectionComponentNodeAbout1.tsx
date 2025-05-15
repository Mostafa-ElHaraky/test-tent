import { Button } from "../../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../../components/ui/card";
import { Input } from "../../../../../../../../components/ui/input";

export const SectionComponentNodeAbout1 = (): JSX.Element => {
  return (
    <section className="relative w-full h-[604px] top-[650px] rounded-[30px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)] bg-[url(/About1-metal-structure-against-the-blue-sky-with-white-clouds-1-1.png)] bg-cover bg-[50%_50%]">
      <div className="relative w-[962px] h-[811px] top-[-57px] left-[-115px]">
        <div className="absolute w-[807px] h-[807px] top-0 left-0 rounded-[403.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(60,138,255,0.85)_0%,rgba(67,130,220,0)_100%)]" />

        <img
          className="w-[847px] h-[424px] top-[57px] left-[115px] absolute object-cover"
          alt="Element clouds"
          src="/About1-08-clouds-1-1.png"
        />

        <div className="absolute w-[676px] h-[513px] top-[298px] left-[115px] rounded-[338px/256.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(7,12,30,1)_0%,rgba(17,27,63,0)_100%)]" />

        <img
          className="absolute w-[719px] h-[604px] top-[57px] left-[115px]"
          alt="Event tent"
          src="/About1-event-tent-i02-2-1.png"
        />

        <img
          className="absolute w-[299px] h-[190px] top-[471px] left-[115px]"
          alt="Vecteezy overgrown"
          src="/About1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--2.png"
        />

        <img
          className="absolute w-[486px] h-[355px] top-[306px] left-[115px] blur-[15px] object-cover"
          alt="Element clouds"
          src="/About1-08-clouds-1-1.png"
        />
      </div>

      <div className="flex flex-col items-start gap-[46px] absolute top-[75px] left-[847px]">
        <div className="flex flex-col items-start gap-[50px]">
          <div className="flex flex-col items-start gap-9">
            <div className="flex flex-col w-[490px] items-start gap-6">
              <h2 className="w-[490px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-white">Скачайте презентацию </span>
                <span className="text-[#89b5ff]">компании</span>
              </h2>
            </div>

            <Card className="bg-[#73a7ff59] border-none rounded-[20px]">
              <CardContent className="p-6">
                <p className="w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-semibold text-white text-xl tracking-[0] leading-6 whitespace-nowrap">
                  Придет файл формат .pdf, 57 страниц, 500 кб
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <div className="flex w-[496px] items-end gap-4">
            <div className="flex flex-col h-[67px] items-start gap-4 flex-1 grow rounded-2xl overflow-hidden border border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <div className="w-full h-[67px] rounded-2xl overflow-hidden flex items-center gap-2 pl-3 pr-2 py-2 bg-white">
                <Input
                  className="border-none shadow-none h-full [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px]"
                  placeholder="Ваш телефон"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[496px] items-start justify-center gap-3">
            <Button className="w-[496px] h-[68px] rounded-2xl border-none shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
              Запросить контакты
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <div className="flex flex-col w-[33px] h-[33px] items-center justify-center gap-1 p-3 relative rounded-lg overflow-hidden border-none [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <div className="relative w-[21px] h-[21px] mt-[-6.00px] mb-[-6.00px] ml-[-6.00px] mr-[-6.00px]">
                <img
                  className="absolute w-[17px] h-[13px] top-1 left-0.5"
                  alt="Group"
                  src="/About1-group-6.png"
                />
              </div>
            </div>

            <div className="flex flex-col w-[453px] items-start gap-3">
              <p className="w-[529px] mt-[-1.00px] mr-[-76.00px] font-medium text-[#ffffffcc] text-xs leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                Нажимая на кнопку, вы даете согласие на обработку персональных
                данных и соглашаетесь с Пользовательским соглашение
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
