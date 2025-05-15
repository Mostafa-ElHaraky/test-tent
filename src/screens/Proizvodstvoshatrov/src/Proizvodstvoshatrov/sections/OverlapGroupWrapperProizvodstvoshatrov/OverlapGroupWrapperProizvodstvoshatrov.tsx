import { Button } from "../../../../../../components/ui/button";
import { Card } from "../../../../../../components/ui/card";

export const OverlapGroupWrapperProizvodstvoshatrov  = (): JSX.Element => {
  return (
    <section className="w-full h-[535px] relative">
      <div className="relative h-[574px] top-[-39px]">
        <Card className="w-full h-[486px] top-[88px] left-0 rounded-[30px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(245,246,255,0)_100%)]">
          <div className="flex flex-row">
            <div className="flex flex-col items-start gap-[45px] pt-[71px] pl-[84px] max-w-[550px]">
              <h2 className="w-[508px] [font-family:'Raleway',Helvetica] font-semibold text-4xl tracking-[0] leading-normal">
                <span className="text-[#527dc5]">Получите 3D модель</span>
                <span className="text-[#232c42]">
                  {" "}
                  шатра
                  <br />
                  по фотографии площадки
                </span>
              </h2>

              <div className="flex flex-col w-[496px] items-start gap-9">
                <div className="flex items-center gap-3">
                  <p className="w-[486px] font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                    Сообщите точные размеры, пришлите фото местности,
                    <br />
                    где будет располагаться шатер. Мы бесплатно спроектируем и
                    поставим его на фото. Увидете, как он будет смотреться в
                    реальности
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-[496px] items-start justify-center gap-3">
                <Button className="w-[496px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] [font-family:'Raleway',Helvetica] font-semibold text-white text-base">
                  Получите 3D модель
                </Button>
              </div>
            </div>

            <div className="flex-1">
              <img
                className="w-[735px] h-[556px] ml-auto"
                alt="Tent"
                src="/tent-i02-1.png"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
