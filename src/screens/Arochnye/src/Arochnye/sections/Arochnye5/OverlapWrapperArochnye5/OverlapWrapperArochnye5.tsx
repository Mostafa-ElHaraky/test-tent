import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";

export const OverlapWrapperArochnye5 = (): JSX.Element => {
  return (
    <section className="relative w-full h-[488px] top-[17px] my-1">
      <Card className="relative w-full h-[456px] rounded-[30px] overflow-hidden">
        <CardContent className="p-0 h-full">
          <div className="absolute inset-0 rounded-[30px] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]" />

 {/* Background images */}
<div className="relative">
  <img
    className="absolute w-[846px] h-[456px] top-0 right-0 rounded-[30px]"
    alt="Fields at mountain"              
    src="/summer-landscape--1--------1.png"
  />
  <div 
    className="absolute w-[846px] h-[456px] top-0 right-0 rounded-[30px]"
    style={{
      background: 'linear-gradient(270deg, rgba(47, 58, 87, 0) 56.04%, rgba(47, 58, 87, 0.54) 76.44%, #2F3A57 100%)'
    }}
  />
</div>

          {/* Radial gradient overlay */}
          <div className="absolute w-full h-[456px] top-0 left-0 rounded-[20px] overflow-hidden">
            <div className="relative w-[807px] h-[807px] top-[-279px] left-[781px] rounded-[403.5px]" />
          </div>

          {/* Content container */}
          <div className="flex flex-col items-start gap-[46px] absolute top-[65px] left-[84px]">
            {/* Text content */}
            <div className="flex flex-col items-start gap-6">
              <h2 className="w-[546px] mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-4xl tracking-[0] leading-normal">
                <span className="font-medium text-white">
                  Получите 3D модель{" "}
                </span>
                <span className="font-bold text-[#9ec2ff]">
                  шатра
                  <br />
                </span>
                <span className="font-medium text-white">
                  по фотографии площадки
                </span>
              </h2>

              <p className="w-[635px] font-medium text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-white">
                  Сообщите точные размеры, пришлите фото местности,
                  <br />
                  где будет располагаться{" "}
                </span>
                <span className="text-[#9ec2ff] underline">шатер</span>
                <span className="text-white">
                  . Мы бесплатно спроектируем и поставим его на фото. Увидете,
                  как он будет смотреться в реальности
                </span>
              </p>
            </div>

            {/* Button and disclaimer */}
            <div className="flex flex-col items-center gap-3">
              <Button className="w-[412px] h-[68px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-semibold text-white text-base">
                Получить 3D модель шатра
              </Button>

              <p className="font-normal text-sm leading-5 [font-family:'Raleway',Helvetica]">
                <span className="text-[#eb3c3c]">*</span>
                <span className="text-[#394355]">
                  Заявка ни к чему не обязывает
                </span>
              </p>
            </div>
          </div>

          {/* Tent image */}
          <img
            className="absolute w-[709px] h-[709px] top-[-116px] left-[774px]"
            alt="Star tent"
            src="/close-up-man-holding-blank-smart-phone-screen-against-white-conc.png"
          />
        </CardContent>
      </Card>
    </section>
  );
};
