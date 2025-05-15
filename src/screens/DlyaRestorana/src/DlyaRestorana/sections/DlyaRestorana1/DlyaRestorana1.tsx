import { useNavigate } from "react-router-dom"; // Add this import
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";

import { DivWrapperDlyaRestorana1 } from "./DivWrapperDlyaRestorana1/DivWrapperDlyaRestorana1";
import { FrameDlyaRestorana1 } from "./FrameDlyaRestorana1/FrameDlyaRestorana1";
import { FrameWrapperDlyaRestorana1 } from "./FrameWrapperDlyaRestorana1/FrameWrapperDlyaRestorana1";


export const DlyaRestorana1 = (): JSX.Element => {
  const navigate = useNavigate(); // Add this hook

  const navItems = [
    { text: "Отзывы", active: false, path: "/reviews" },
    { text: "Готовые решения", active: false, path: "/" },
    { text: "Вопросы и ответы", active: false, path: "/qa" },
    { text: "О компании", active: false, path: "/about" },
    { text: "Команда", active: false, path: "/comanda" },
    { text: "Контакты", active: false, path: "/contact" },
  ];

  // Hotel specifications
  const hotelSpecs = [
    { label: "Размер:", value: "200*80 м" },
    { label: "Площадь:", value: "300 м2" }, 
    { label: "Вместимость:", value: "400 чел" },
  ];

  // Additional information
  const additionalInfo = [
    { label: "Срок:", value: "10 дней" },
    { label: "Город:", value: "Москва" },
  ];


  

  return (
    <div className="relative w-full max-w-[1440px] mx-auto bg-white">
      <div className="w-full">
        <div className="w-full">
          <FrameDlyaRestorana1 />
          <FrameWrapperDlyaRestorana1 />

 

          {/* City selector */}
          <div className="inline-flex flex-col items-start gap-1.5 absolute top-[19px] left-[782px]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="w-fit mt-[-1.00px] font-normal text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                Ваш город
              </div>
              <img
                className="relative w-[8.66px] h-[4.5px]"
                alt="Dropdown indicator"
                src="/polygon-1.svg"
              />
            </div>
            <div className="w-fit font-semibold text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
              Москва
            </div>
          </div>

          {/* Contact buttons */}
          <div className="inline-flex flex-col items-center gap-0.5 absolute top-[15px] left-[912px]">
            <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
              <div className="relative w-6 h-6">
                <img
                  className="absolute w-[21px] h-[18px] top-[3px] left-0.5"
                  alt="Telegram icon"
                  src="/group.png"
                />
              </div>
              <div className="relative w-6 h-6">
                <img
                  className="absolute w-5 h-5 top-0.5 left-0.5"
                  alt="WhatsApp icon"
                  src="/group-1.png"
                />
              </div>
            </div>
            <div className="w-fit font-semibold text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
              Написать
            </div>
          </div>

          {/* Email */}
          <div className="inline-flex items-center gap-1 absolute top-[27px] left-[1219px]">
            <div className="relative w-fit [font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              info@mobile-tent.ru
            </div>
            <div className="relative w-5 h-5">
              <img
                className="absolute w-4 h-4 top-0.5 left-0.5"
                alt="Email icon"
                src="/group-2.png"
              />
            </div>
          </div>


          {/* Working hours */}
          <div className="absolute w-[179px] h-[38px] top-[19px] left-[1021px]">
            <div className="inline-flex flex-col items-start gap-1.5 absolute top-0 left-[42px]">
              <div className="w-fit mt-[-1.00px] font-normal text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                с 09:00 - 22:00 МСК
              </div>
              <div className="w-fit font-semibold text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                с ПН - ПТ
              </div>
            </div>
            <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 absolute top-1 left-0 rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <div className="relative w-[21px] h-[21px] mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px]">
                <div className="relative w-[13px] h-[13px] top-1 left-1 bg-[url(/group-7.png)] bg-[100%_100%]" />
              </div>
            </div>
          </div>

          {/* Hotel title */}
          <div className="inline-flex items-start gap-[335px] absolute top-[246px] left-12">
            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[658px] items-start gap-[228px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[55px] relative flex-[0_0_auto] mr-[-8.00px]">
                  <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                        <div className="w-[666px] font-medium text-4xl relative mt-[-1.00px] font-['Raleway',Helvetica] text-[#394355] tracking-[0] leading-[normal]">
                          SPA отель Мриан бей
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hotel specifications */}
          <Card className="inline-flex flex-col items-start gap-9 absolute top-[802px] left-12 border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                  {hotelSpecs.map((spec, index) => (
                    <div
                      key={index}
                      className="inline-flex items-start gap-2 relative flex-[0_0_auto]"
                    >
                      <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-[#394355] text-lg tracking-[0] leading-6 whitespace-nowrap">
                        {spec.label}
                      </div>
                      <div className="relative w-fit mt-[-1.00px] font-medium text-[#394355] text-lg leading-6 whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional information */}
          <Card className="inline-flex flex-col items-start gap-9 absolute top-[802px] left-[733px] border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                  {additionalInfo.map((info, index) => (
                    <div
                      key={index}
                      className="inline-flex items-start gap-2 relative flex-[0_0_auto]"
                    >
                      <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-[#394355] text-lg tracking-[0] leading-6 whitespace-nowrap">
                        {info.label}
                      </div>
                      <div className="relative w-fit mt-[-1.00px] font-medium text-[#394355] text-lg leading-6 whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                        {info.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation menu */}
        <nav className="inline-flex items-start gap-6 absolute top-7 left-12">
          {navItems.map((item) => (
            <div
              key={item.text}
              className={`relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal ${
                item.active ? "text-[#232c42]" : "text-[#394355]"
              } text-sm tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer hover:text-[#232c42]`}
              onClick={() => {
                if (item.path !== "#") {
                  navigate(item.path);
                }
              }}
            >
              {item.text}
              {item.active && (
                <div className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-[#232c42]"></div>
              )}
            </div>
          ))}
        </nav>





        {/* Call to action button */}
        <div className="flex flex-col w-[659px] items-center gap-3 absolute top-[900px] left-[733px]">
          <Button className="relative w-[655px] h-[68px] rounded-2xl border-[none] shadow-2 [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
            <span className="absolute top-[22px] left-[272px] font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
              Хочу похожий
            </span>
          </Button>
        </div>
      </div>
      <DivWrapperDlyaRestorana1 />

    </div>
  );
};