import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupWrapperByAnima1 = (): JSX.Element => {
  return (
    <section className="w-full py-12 px-12">
      <div className="flex flex-col gap-10 max-w-[1346px] mx-auto">
        <div className="flex justify-between items-start">
          <h2 className="text-4xl font-semibold font-['Raleway',Helvetica] max-w-[655px]">
            <span className="text-[#232c42]">На все элементы шатра </span>
            <span className="text-[#527dc5]">
              есть документы качества и надежности
            </span>
          </h2>

          <div className="flex items-center gap-7 px-6 py-3 rounded-[10px] border border-solid border-[#e4e4e4]">
            <p className="text-sm leading-5 font-['Raleway',Helvetica]">
              <span className="italic text-[#eb3c3c]">*</span>
              <span className="italic text-[#4f5d80]">
                Дополнительно проводим испытания
                <br />в своей аккредитованной лаборатории
              </span>
            </p>

            <Badge className="px-2 py-1 rounded text-white text-sm font-semibold font-['Raleway',Helvetica] leading-6 whitespace-nowrap [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              Аттестат № RA.RU.10HA2100
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Certificates Card */}
          <Card className="rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] h-[364px]">
            <CardContent className="p-0 h-full">
              <div className="relative h-full pt-12 pl-8">
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl font-bold font-['Raleway',Helvetica] leading-6">
                    <span className="text-[#527dc5]">Сертификаты</span>
                    <span className="text-[#232c42]"> на комплектующие</span>
                  </h3>

                  <p className="text-lg text-[#394355] font-normal font-['Raleway',Helvetica] leading-9">
                       • Сертификаты соответствия
                     <br />
                       • Сертификаты качества
                      <br />
                       • Сертификат пожарной безопасности
                      <br />
                       • Протоколы испытания
                       </p>
                </div>

                <img
                  className="absolute w-[318px] h-[276px] bottom-0 right-0"
                  alt="Certificate document"
                  src="/15-9bf6ff67-------1.png"
                />

                <div className="absolute bottom-[-3px] left-[689px]">
                  <Button className="w-[319px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="flex items-center gap-[15px]">
                      <span className="font-bold text-white text-base font-['Raleway',Helvetica]">
                        Скачать документы
                      </span>
                      <div className="w-6 h-6">
                        <img
                          className="w-[21px] h-[18px] mt-[3px] ml-0.5"
                          alt="Download icon"
                          src="/DOCgroup-2.png"
                        />
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Passport Card */}
          <Card className="rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] h-[270px]">
            <CardContent className="p-0 h-full">
              <div className="relative h-full pt-12 pl-8">
                <div className="flex flex-col gap-6 max-w-[310px]">
                  <h3 className="text-xl font-bold font-['Raleway',Helvetica] leading-6">
                    <span className="text-[#527dc5]">Технический паспорт </span>
                    <span className="text-[#232c42]">на шатер</span>
                  </h3>

                  <p className="text-lg text-[#394355] font-normal font-['Raleway',Helvetica] leading-6">
                    на 30-40 листов с описанием сборки каждого этапа
                  </p>
                </div>

                <img
                  className="absolute w-[284px] h-[323px] top-[-5px] right-0"
                  alt="Technical passport document"
                  src="/paper-a4-10-ps-------1.png"
                />

                <div className="absolute bottom-[-97px] right-0">
                  <Button className="w-[319px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="flex items-center gap-[15px]">
                      <span className="font-bold text-white text-base font-['Raleway',Helvetica]">
                        Скачать документы
                      </span>
                      <div className="w-6 h-6">
                        <img
                          className="w-5 h-5 mt-0.5 ml-0.5"
                          alt="Download icon"
                          src="/DOCgroup-3.png"
                        />
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
