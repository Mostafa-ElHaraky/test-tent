import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen9 = (): JSX.Element => {
  return (
    <div className="relative w-[375px] h-[735px] bg-white">
      <Card className="relative h-[675px] top-[30px] rounded-[20px] overflow-hidden border-none">
        <CardContent className="p-0">
          <div className="relative w-[375px] h-[888px]">
            {/* Background gradient */}
            <div className="absolute w-[375px] h-[888px] top-0 left-0 rounded-[30px] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]" />

            <div className="relative w-[375px] h-[640px] top-[35px]">
              {/* Bottom landscape image */}
              <img
                className="absolute w-[375px] h-[421px] top-[219px] left-0"
                alt="Summer landscape"
                src="/summer-landscape--1--------1.png"
              />

              {/* Content container */}
              <div className="flex flex-col w-[322px] items-start gap-[46px] absolute top-0 left-[26px]">
                {/* Text content */}
                <div className="flex flex-col items-start gap-6 relative">
                  <h1 className="relative w-full font-['Raleway',Helvetica] text-2xl tracking-[0] leading-normal">
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
                  </h1>

                  <p className="w-[322px] font-['Raleway',Helvetica] font-medium text-[11px] leading-4 tracking-[0]">
                    <span className="text-white">
                      Сообщите точные размеры, пришлите фото местности,
                      <br />
                      где будет располагаться{" "}
                    </span>
                    <span className="text-[#9ec2ff] underline">шатер</span>
                    <span className="text-white">
                      . Мы бесплатно спроектируем и поставим его на фото.
                      Увидете, как он будет смотреться в реальности
                    </span>
                  </p>
                </div>

                {/* Button and disclaimer */}
                <div className="flex flex-col w-[325px] items-center gap-3 relative">
                  <Button className="relative w-[325px] h-[68px] rounded-2xl border-none shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] font-['Raleway',Helvetica] font-semibold text-white text-base">
                    Получить 3D модель шатра
                  </Button>

                  <p className="w-fit font-['Raleway',Helvetica] font-normal text-sm leading-5 whitespace-nowrap tracking-[0]">
                    <span className="text-[#eb3c3c]">*</span>
                    <span className="text-white">
                      Заявка ни к чему не обязывает
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone image at the bottom */}
            <img
              className="absolute w-[375px] h-[362px] top-[526px] left-0"
              alt="Close up man holding"
              src="/close-up-man-holding-blank-smart-phone-screen-against-white-conc.png"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
