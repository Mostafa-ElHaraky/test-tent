import { Badge } from "../../../../../../../components/ui/badge";
import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";

export const DivWrapperMobilnye5 = (): JSX.Element => {
  return (
    <div className="w-full max-w-[1346px] mx-auto">
      <div className="flex flex-col gap-12">
        {/* Header section */}
        <div className="flex justify-between items-start">
          <h2 className="text-4xl font-semibold [font-family:'Raleway',Helvetica] max-w-[655px]">
            <span className="text-[#232c42]">На все элементы шатра </span>
            <span className="text-[#527dc5]">
              есть документы качества и надежности
            </span>
          </h2>

          <div className="flex items-center gap-7 px-6 py-3 rounded-[10px] border border-solid border-[#e4e4e4]">
            <p className="text-sm leading-5 font-normal [font-family:'Raleway',Helvetica]">
              <span className="italic text-[#eb3c3c]">*</span>
              <span className="italic text-[#4f5d80]">
                Дополнительно проводим испытания
                <br />в своей аккредитованной лаборатории
              </span>
            </p>

            <Badge className="px-2 py-1 rounded text-sm font-semibold text-white [font-family:'Raleway',Helvetica] leading-6 whitespace-nowrap [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              Аттестат № RA.RU.10HA2100
            </Badge>
          </div>
        </div>

        {/* Cards section */}
        <div className="flex gap-6">
          {/* Left card */}
          <Card className="w-[660px] h-[364px] rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="p-0">
              <div className="relative w-full h-[317px] pt-[47px] pl-[31px]">
                <div className="flex flex-col items-start gap-6">
                  <h3 className="font-bold text-xl leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica]">
                    <span className="text-[#527dc5]">Сертификаты</span>
                    <span className="text-[#232c42]"> на комплектующие</span>
                  </h3>

                  <p className="font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                    Сертификаты соответствия
                    <br />
                    Сертификаты качества
                    <br />
                    Сертификат пожарной безопасности
                    <br />
                    Протоколы испытания
                  </p>
                </div>

                <img
                  className="absolute w-[318px] h-[276px] top-[41px] left-[311px]"
                  alt="Element"
                  src="/15-9bf6ff67-------1.png"
                />
              </div>
            </CardContent>
          </Card>

          {/* Right card */}
          <div className="w-[660px] h-[364px] relative">
            <Card className="w-full h-[270px] rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0">
                <div className="pt-[50px] pl-[31px] flex flex-col items-start gap-6">
                  <h3 className="font-bold text-xl leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica]">
                    <span className="text-[#527dc5]">Технический паспорт </span>
                    <span className="text-[#232c42]">на шатер</span>
                  </h3>

                  <p className="w-[310px] font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica]">
                    на 30-40 листов с описанием сборки каждого этапа
                  </p>
                </div>

                <img
                  className="absolute w-[284px] h-[323px] top-0 right-0"
                  alt="Paper ps"
                  src="/paper-a4-10-ps-------1.png"
                />
              </CardContent>
            </Card>

            <Button className="w-full h-[68px] mt-[29px] rounded-2xl shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <div className="flex items-center justify-center gap-[15px]">
                <div className="relative w-[50px] h-[50px]">
                  <div className="relative w-[35px] h-[35px] top-2 left-2 bg-[url(/group-13.png)] bg-[100%_100%]" />
                </div>
                <span className="font-bold text-white text-base whitespace-nowrap [font-family:'Raleway',Helvetica]">
                  Скачать документы
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
