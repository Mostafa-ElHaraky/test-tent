import { Button } from "../../../../../../components/ui/button";
import { Input } from "../../../../../../components/ui/input";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { FrameWrapperAbout1 } from "./sections/FrameWrapperAbout1/FrameWrapperAbout1";
import { DivWrapperAbout1 } from "./sections/DivWrapperAbout1";
import { FrameAbout1 } from "./sections/FrameAbout1";
import { OverlapWrapperAbout1 } from "./sections/OverlapWrapperAbout1/OverlapWrapperAbout1";
import { Frame1About1 } from "./sections/Frame1About1/Frame1About1";
import { OverlapGroupWrapperAbout1 } from "./sections/OverlapGroupWrapperAbout1/OverlapGroupWrapperAbout1";
import { Frame2About1 } from "./sections/Frame2About1/Frame2About1";
import { GroupAbout1 } from "./sections/GroupAbout1/GroupAbout1";
import { SectionComponentNodeAbout1 } from "./sections/SectionComponentNodeAbout1/SectionComponentNodeAbout1";
import { Frame3About1 } from "./sections/Frame3About1/Frame3About1";
import { Frame4About1 } from "./sections/Frame4About1/Frame4About1";


export const About1 = (): JSX.Element => {

  const navigate = useNavigate();

  const [isCatalogHovered, setIsCatalogHovered] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const catalogRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
      setIsCatalogOpen(false);
      setIsCatalogHovered(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  const navItems = [
    { text: "Отзывы", active: false, path: "/reviews" },
    { text: "Готовые решения", active: false, path: "/" },
    { text: "Вопросы и ответы", active: false, path: "/qa" },
    { text: "О компании", active: false, path: "/about" },
    { text: "Команда", active: false, path: "/comanda" },
    { text: "Контакты", active: false, path: "/contact" },
  ];

  return (
    <div className="relative w-full max-w-[1440px] h-[8115px] mx-auto bg-white">
      
      <div className="w-full">

                {/* Background elements */}
                <div className="absolute w-full h-[1081px] top-0 left-0 rounded-[0px_0px_30px_30px] overflow-hidden">
          <div className="relative w-[1734px] h-[1275px] top-[-194px]">
            <div className="absolute w-[1734px] h-[1196px] top-0 left-0 [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />
            <div className="absolute w-[1401px] h-[69px] top-[194px] left-[19px] bg-white rounded-[0px_0px_20px_20px]" />
          </div>
        </div>
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

        {/* Logo and search section */}
        <div className="absolute w-[1344px] h-[58px] top-[92px] left-12">
          {/* Logo and tagline */}
          <div className="inline-flex flex-col items-start gap-3 absolute top-0 left-0">
            <img
              className="relative w-[206px] h-[22.26px]"
              alt="Mobile tent ru logo"
              src="/mobile-tent-ru.png"
            />

            <div className="w-[217px] font-normal text-[#394355] text-[10px] leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
              Производство и продажа тентовых конструкций и шатров по всей
              России и СНГ
            </div>
          </div>



{/* Search and catalog section */}
<div className="inline-flex items-center gap-3.5 absolute top-1.5 left-[250px]">
  <div className="flex w-[473px] items-start relative rounded-[50px] overflow-visible">
{/* Catalog button and dropdown */}
<div className="relative inline-block" ref={catalogRef}>
  <Button
    className="inline-flex items-center gap-1.5 px-4 py-6 bg-[#f2f4f7] rounded-[50px_0px_0px_50px] text-[#232c42] hover:bg-[#e5e8ed]"
    onMouseEnter={() => setIsCatalogHovered(true)}
    onMouseLeave={() => setIsCatalogHovered(false)}
    onClick={() => setIsCatalogOpen((prev) => !prev)}
  >
    <div className="relative w-[22px] h-[22px]">
      <img
        className="absolute w-[15px] h-[15px] top-1 left-1"
        alt="Catalog icon"
        src="/group-3.png"
      />
    </div>
    <span className="font-semibold text-base">Каталог</span>
  </Button>

  {(isCatalogHovered || isCatalogOpen) && (
    <div
      className="absolute top-full left-0 z-50 mt-2"
      onMouseEnter={() => setIsCatalogHovered(true)}
      onMouseLeave={() => setIsCatalogHovered(false)}
    >
    </div>
  )}
</div>


    {/* Search bar */}
    <div className="flex flex-col w-[349px] h-[46px] items-start gap-4 relative">
      <div className="flex w-[349px] h-[46px] items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-[0px_50px_50px_0px]">
        <Input
          className="w-[291px] font-normal text-[17px] text-label-colorslc-l-secondary tracking-[-0.41px] leading-[22px] border-none"
          placeholder="Поиск по 1000+ товарам"
        />
        <Button className="w-9 flex items-center justify-center px-3 py-1 bg-[#4f5d80] rounded-[5000px] hover:bg-[#3e4a68]">
          <div className="w-[16px] h-4 bg-[url(/group-4.png)] bg-contain bg-no-repeat" />
        </Button>
      </div>
    </div>
  </div>

  {/* "или" divider */}
  <div className="w-fit font-normal text-[#394355] text-sm whitespace-nowrap [font-family:'Raleway',Helvetica]">
    или
  </div>

  {/* Help button */}
  <Button
    variant="outline"
    className="inline-flex h-[46px] items-center justify-center gap-2.5 px-4 py-[13px] bg-white rounded-[50px] border-none"
  >
    <span className="font-semibold text-[#232c42] text-sm">
      Помочь с подбором
    </span>
  </Button>
</div>

          {/* Phone numbers and callback */}
          <div className="inline-flex items-center gap-5 absolute top-1.5 left-[973px]">
            <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
              <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                <div className="relative w-[21px] h-[21px] mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px]">
                  <img
                    className="absolute w-3 h-3 top-1 left-1"
                    alt="Phone icon"
                    src="/group-5.png"
                  />
                </div>
              </div>

              <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                    +7 (499) 113-36-60
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                    8 (800) 302-46-31
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[190px] items-center gap-5 relative">
              <Button
                variant="outline"
                className="flex w-[190px] h-[46px] items-center justify-center gap-2.5 pl-6 pr-3 py-2.5 relative bg-white rounded-[50px] shadow-[inset_0px_0px_20px_#ffffff40] border-none"
              >
                <span className="ml-[-7.02px] font-semibold text-[#232c42] text-sm leading-[normal] whitespace-nowrap">
                  Перезвоните мне
                </span>

                <img
                  className="relative flex-[0_0_auto] mt-[-5.52px] mb-[-5.52px] mr-[-7.02px]"
                  alt="Phone icon"
                  src="/frame-44.svg"
                />
              </Button>
            </div>
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

<div className="relative top-[180px] left-[40px] font-normal text-[#394355] text-xs leading-[normal]  w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] tracking-[0] whitespace-nowrap">
            <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0]">
              Главная &gt;{"  "}
            </span>

            <span className="font-medium underline">О компании</span>
          </div>
      </div>
      <FrameWrapperAbout1 />
      <DivWrapperAbout1 />
      <FrameAbout1 />
      <OverlapWrapperAbout1 />
      <Frame1About1 />
      <div className="relative top-[600px] left-[250px] ">
      <Card className="inline-flex items-center justify-center bg-[#232c42] rounded-[10px] border-none">
      <CardContent className="px-4 py-2.5">
        <p className="w-[855px] font-['Raleway',Helvetica] text-base leading-6 tracking-[0]">
          <span className="font-bold text-white">
            До заключения договора у вас будет 3д макет{" "}
          </span>
          <span className="font-medium text-white">
            шатра с визуализацией и подробным планом всех элементов
          </span>
        </p>
      </CardContent>
    </Card>
    </div>


      <OverlapGroupWrapperAbout1 />
      <Frame2About1 />
      <GroupAbout1 />
      <SectionComponentNodeAbout1 />
      <Frame3About1 />
      <Frame4About1 />
    </div>
    
  );
};
