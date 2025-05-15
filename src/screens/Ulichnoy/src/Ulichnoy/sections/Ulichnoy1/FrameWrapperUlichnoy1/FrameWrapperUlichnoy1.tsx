import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../../components/ui/card";
import { Input } from "../../../../../../../components/ui/input";
import { Separator } from "../../../../../../../components/ui/separator";
import { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

const Frame = (): JSX.Element => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [activeMenuItem, setActiveMenuItem] = useState<number>(2); // Default to "Типы шатров"

  const menuItems = [
    { 
      id: 1, 
      title: "Типы мероприятий", 
      active: false,
      path: "/events",
      cards: [
        { title: "Свадьбы", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/events/wedding" },
        { title: "Корпоративы", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/events/corporate" },
        { title: "Фестивали", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/events/festival" },
        { title: "Выставки", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/events/exhibition" },
      ]
    },
    { 
      id: 2, 
      title: "Типы шатров", 
      active: false, 
      path: "/shatry",
      cards: [
        { title: "Мобильные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/mobilnye" },
        { title: "Пагода шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/pagoda" },
        { title: "Арочные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/arochnye" },
        { title: "Большие шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/bolshie" },
        { title: "Шатры для мероприятий", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/vozduhoopornye" },
        { title: "Выставочные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/dlya_vystavki" },
        { title: "Шатер Звезда", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/shater-zvezda" },
        { title: "Шестигранные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/shestigrannye" },
        { title: "Купольные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/kruglye" },
        { title: "Натяжные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/natyagnye" },
        { title: "Мембранные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/membrannye" },
        { title: "Глэмпинг", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/glehmping" },
        { title: "Надувные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/naduvnye" },
        { title: "Шатры для свадьбы", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/wedding" },
        { title: "Шатры-трансформеры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "/shatry-i-navesy/transformer" },
      ]
    },
    { 
      id: 3, 
      title: "Оснащение шатров", 
      active: false,
      path: "/equipment",
      cards: [
        { title: "Отопление", imageUrl: "/heating.png", path: "/equipment/heating" },
        { title: "Освещение", imageUrl: "/lighting.png", path: "/equipment/lighting" },
        { title: "Вентиляция", imageUrl: "/ventilation.png", path: "/equipment/ventilation" },
        { title: "Полы", imageUrl: "/flooring.png", path: "/equipment/flooring" },
        { title: "Мебель", imageUrl: "/furniture.png", path: "/equipment/furniture" },
      ]
    },
    { 
      id: 4, 
      title: "Другие тентовые конструкции", 
      active: false,
      path: "/other",
      cards: [
        { title: "Навесы", imageUrl: "/canopy.png", path: "/other/canopy" },
        { title: "Тенты", imageUrl: "/tarpaulin.png", path: "/other/tarpaulin" },
        { title: "Брезентовые конструкции", imageUrl: "/canvas.png", path: "/other/canvas" },
      ]
    },
  ];

  const navigate = useNavigate();

  const getCurrentCards = () => {
    const activeItem = menuItems.find(item => item.id === activeMenuItem);
    return activeItem ? activeItem.cards : [];
  };

  return (
    <main className="relative w-[1440px] h-[821px] right-[300px] bg-white shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px]">
      {/* Left navigation */}
      <nav className="absolute w-[200px] h-[285px] top-[30px] left-[30px] bg-white">
        <div className="relative w-[212px] h-[118px] top-[31px] left-0.5">
          <ul className="flex flex-col items-start gap-[18px] absolute top-0 left-[7px]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="relative flex items-center"
                onMouseEnter={() => {
                  setHoveredItem(item.id);
                  setActiveMenuItem(item.id);
                }}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {hoveredItem === item.id && (
                  <Separator
                    orientation="vertical"
                    className="absolute w-0.5 h-3.5 left-[-7px] bg-[#527dc5] rounded-[2px_0px_0px_2px]"
                  />
                )}
                <button
                  className={`relative w-fit [font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-sm tracking-[0] leading-[normal] whitespace-nowrap transition-colors duration-200 ${
                    hoveredItem === item.id ? 
                    "font-medium text-[#527dc5]" : 
                    "hover:text-[#527dc5]"
                  }`}
                  onClick={() => {
                    if (item.path) navigate(item.path);
                    setActiveMenuItem(item.id);
                  }}
                  role="navigation"
                  aria-label={`Navigate to ${item.title}`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main content area */}
      <section className="absolute w-[771px] h-[561px] top-[35px] left-[618px] bg-white">
        {/* Title Section */}
        <div className="absolute -top-px left-0 font-semibold text-[#232c42] leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] text-sm tracking-[0]">
          {menuItems.find(item => item.id === activeMenuItem)?.title || "Типы шатров"}
        </div>

        {/* Tent Cards Section */}
        <div className="flex flex-wrap w-[771px] items-start gap-[14px] absolute top-[35px] left-0">
          {getCurrentCards().map((card, index) => (
            <Link 
              to={card.path} 
              key={`tent-card-${index}`}
              className="block no-underline outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-[20px]"
              aria-label={`Перейти к ${card.title}`}
            >
              <Card
                className="w-[204px] h-[121px] border-spacing-1 bg-white rounded-[20px] overflow-hidden border border-solid border-[#dddddd] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px] backdrop-brightness-[100%] cursor-pointer hover:shadow-lg transition-shadow duration-300 hover:border-blue-200 active:scale-[0.98]"
              >
                <CardContent className="flex flex-col items-center gap-4 p-[13px]">
                  <div
                    className="relative w-[99px] h-[55px] bg-cover bg-[50%_50%] bg-no-repeat"
                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                    aria-hidden="true"
                  />
                  <div className="w-full text-center">
                    <h3 className="font-medium text-[#394355] text-sm leading-6 [font-family:'Raleway',Helvetica] tracking-[0] line-clamp-2">
                      {card.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};





export const FrameWrapperUlichnoy1 = (): JSX.Element => {

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



  return (
    <div className="w-full h-[58px] py-0 px-12">
      <div className="flex justify-between items-center">
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
      <Frame />
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
      </div>
    </div>
  );
};
