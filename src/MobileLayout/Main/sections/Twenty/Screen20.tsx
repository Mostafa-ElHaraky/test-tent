import { DownloadIcon, SendIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen20 = (): JSX.Element => {
  // Certificate data for mapping
  const certificateTypes = [
    "Сертификаты соответствия",
    "Сертификаты качества",
    "Сертификат пожарной безопасности",
    "Протоколы испытания",
  ];

  return (
    <div className="flex flex-col items-center bg-white max-w-[375px] min-h-[1042px] mx-auto">
      <div className="flex flex-col items-center gap-6 px-6 pt-[30px] w-full">
        {/* Heading */}
        <h1 className="w-full font-['Raleway',Helvetica] font-semibold text-2xl tracking-[0]">
          <span className="text-[#232c42]">
            На все элементы шатра
            <br />
          </span>
          <span className="text-[#527dc5]">
            есть документы качества
            <br />и надежности
          </span>
        </h1>

        {/* Laboratory note */}
        <Card className="w-full border border-solid border-[#e4e4e4] rounded-[10px] p-0">
          <CardContent className="p-6">
            <p className="font-['Raleway',Helvetica] font-normal text-sm leading-5 italic">
              <span className="text-[#eb3c3c]">*</span>
              <span className="text-[#4f5d80]">
                Дополнительно проводим испытания
                <br />в своей аккредитованной лаборатории
              </span>
            </p>
            <Badge className="w-full mt-3 py-1 px-2 rounded font-['Raleway',Helvetica] font-semibold text-sm text-white justify-center bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
              Аттестат № RA.RU.10HA2100
            </Badge>
          </CardContent>
        </Card>

        {/* Certificates card */}
        <Card className="w-full rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
          <CardContent className="p-5">
            <div className="flex flex-col gap-6">
              <h2 className="font-['Raleway',Helvetica] font-bold text-base leading-6">
                <span className="text-[#527dc5]">Сертификаты</span>
                <span className="text-[#232c42]"> на комплектующие</span>
              </h2>

              <ul className="font-['Raleway',Helvetica] font-normal text-[11px] leading-4 text-[#394355]">
                {certificateTypes.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>

            <img
              className="ml-auto mt-[20px] w-[186px] h-[162px]"
              alt="Элемент шатра"
              src="/15-9bf6ff67-------1.png"
            />
          </CardContent>
        </Card>

        {/* Technical passport card */}
        <Card className="w-full rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
          <CardContent className="p-5">
            <div className="flex flex-col gap-6">
              <h2 className="font-['Raleway',Helvetica] font-bold text-base leading-6">
                <span className="text-[#527dc5]">Технический паспорт</span>
                <span className="text-[#232c42]"> на шатер</span>
              </h2>

              <p className="font-['Raleway',Helvetica] font-normal text-[11px] leading-4 text-[#394355]">
                на 30-40 листов с описанием сборки каждого этапа
              </p>
            </div>

            <div className="flex justify-center">
              <img
                className="w-[207px] h-[232px] mt-[10px]"
                alt="Технический паспорт"
                src="/paper-a4-10-ps-------1.png"
              />
            </div>
          </CardContent>
        </Card>

        {/* DownloadIcon buttons */}
        <div className="flex flex-col gap-6 w-full">
          <Button className="w-full h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
            <div className="flex items-center justify-center gap-[15px]">
              <span className="font-['Raleway',Helvetica] font-bold text-white text-base">
                Скачать документы
              </span>
              <SendIcon className="w-5 h-5" />
            </div>
          </Button>

          <Button className="w-full h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
            <div className="flex items-center justify-center gap-[15px]">
              <span className="font-['Raleway',Helvetica] font-bold text-white text-base">
                Скачать документы
              </span>
              <DownloadIcon className="w-5 h-5" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
