import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import { Badge } from "../../../../../../components/ui/badge";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";
import { Separator } from "../../../../../../components/ui/separator";
import { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

const Frame = (): JSX.Element => {
  // State for hovered menu item
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const menuItems = [
    { id: 1, title: "Типы мероприятий", active: false },
    { id: 2, title: "Типы шатров", active: false, path: "/shatry"  },
    { id: 3, title: "Оснащение шатров", active: false },
    { id: 4, title: "Другие тентовые конструкции", active: false },
  ];

  const tentCards = [
    { title: "Мобильные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "mobilnye" },
    { title: "Пагода шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "pagoda" },
    { title: "Арочные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "arochnye" },
    { title: "Большие шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "bolshie" },
    { title: "Шатры для мероприятий", imageUrl: "/15-9bf6ff67-------1-11.png", path: "vozduhoopornye" },
    { title: "Выставочные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "dlya_vystavki" },
    { title: "Шатер Звезда", imageUrl: "/15-9bf6ff67-------1-11.png", path: "shater-zvezda" },
    { title: "Шестигранные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "shestigrannye" },
    { title: "Купольные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "kruglye" },
    { title: "Натяжные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "natyagnye" },
    { title: "Мембранные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "membrannye" },
    { title: "Глэмпинг", imageUrl: "/15-9bf6ff67-------1-11.png", path: "glehmping" },
    { title: "Надувные шатры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "naduvnye" },
    { title: "Шатры для свадьбы", imageUrl: "/15-9bf6ff67-------1-11.png", path: "wedding" },
    { title: "Шатры-трансформеры", imageUrl: "/15-9bf6ff67-------1-11.png", path: "transformer" },
  ];

  // Use navigate hook for routing
  const navigate = useNavigate();

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
                onMouseEnter={() => setHoveredItem(item.id)}  // When mouse enters, set hoveredItem
                onMouseLeave={() => setHoveredItem(null)}  // When mouse leaves, set hoveredItem to null
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
  onClick={() => item.path && navigate(item.path)}
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
    Типы шатров
  </div>

  {/* Tent Cards Section */}
  <div className="flex flex-wrap w-[771px] items-start gap-[14px] absolute top-[35px] left-0">
  {tentCards.map((card, index) => (
 <Link 
 to={`/shatry-i-navesy/${card.path}`} 
 key={`tent-card-${index}`}
 className="block no-underline outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-[20px]"
 aria-label={`Перейти к ${card.title}`}
 onClick={(e) => {
   e.preventDefault();
   navigate(`/shatry-i-navesy/${card.path}`);
 }}
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




export const Mobilnye1 = (): JSX.Element => {
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
  // Data for guarantee items
const guaranteeItems = [
  { years: "5 лет", description: "на конструкцию" },
  { years: "10 лет", description: "на ткань" },
  { years: "50 лет", description: "а сварные швы" },
  { years: "25 лет", description: "на отсутствие корозии" },
];

  return (
    <main className="relative w-full max-w-[1440px] h-[1081px] bg-white mx-auto">
      <section className="relative h-[1081px] rounded-[0px_0px_30px_30px]">
        {/* Background elements */}
        <div className="absolute w-full h-[1081px] top-0 left-0 rounded-[0px_0px_30px_30px] overflow-hidden">
          <div className="relative w-[1734px] h-[1275px] top-[-194px]">
            <div className="absolute w-[1734px] h-[1196px] top-0 left-0 [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />

            <div className="absolute w-[1440px] h-[689px] top-[586px] left-0 rounded-[0px_0px_20px_20px] overflow-hidden">
              <div className="relative h-[689px] bg-[url(/fc3740fa54440e5eaefe94690ddc2643-3.png)] bg-[100%_100%]">
                <img
                  className="absolute w-[543px] h-[549px] top-[200px] left-[1007px]"
                  alt="Overgrown green grass"
                  src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.png"
                />
              </div>
            </div>

            <img
              className="w-[604px] h-[819px] top-[220px] left-[836px] blur-[2px] absolute object-cover"
              alt="Clouds background"
              src="/08-clouds-2.png"
            />

            <img
              className="w-[719px] h-[643px] top-[194px] left-0 absolute object-cover"
              alt="Clouds background"
              src="/08-clouds-2.png"
            />

            <div className="absolute w-[1401px] h-[69px] top-[194px] left-[19px] bg-white rounded-[0px_0px_20px_20px]" />

            <img
              className="absolute w-[318px] h-[222px] top-[1053px] left-0"
              alt="Overgrown green grass"
              src="/vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
            />
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

        {/* Main content */}
        <div className="inline-flex flex-col items-start gap-[228px] absolute top-[230px] left-12">
          <div className="inline-flex flex-col items-start gap-[60px] relative flex-[0_0_auto]">
            {/* Hero section */}
            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                  <div className="w-fit mt-[-1.00px] font-normal text-[#394355] text-base leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0]">
                      Реально{" "}
                    </span>

                    <span className="font-semibold">
                      договечные тентовые конструкции
                    </span>

                    <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-base tracking-[0]">
                      {" "}
                      стали реальностью
                    </span>
                  </div>

                  <h1 className="w-[966px] font-medium text-[50px] leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="text-[#335dc2] mr-2">МОБИЛЬНЫЕ ШАТРЫ В МОСКВЕ</span>
                    <span className="text-[#232c42]">&nbsp;</span>
<br></br>
                    <span className="text-[#232c42bf]">
                    ОТ ПРОИЗВОДИТЕЛЯ
                    </span>
                  </h1>
                </div>

                <Badge className="inline-flex items-center justify-center gap-2.5 px-3 py-1.5 relative flex-[0_0_auto] bg-[#4f5d80] rounded-lg overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
                  <span className="mt-[-1.00px] font-semibold text-white text-[22px] leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                    с гарантией сохранения внешнего вида в течении 15 лет при
                    любой погоде
                  </span>
                </Badge>
              </div>

        {/* Guarantees card */}
        <Card className="absolute w-[585px] h-[124px] top-[625px] left-[5px] bg-[#fffffff2] rounded-[20px] overflow-hidden border-[3px] border-solid border-white shadow-[0px_24px_38px_#161d2414] backdrop-blur-[79px]">
          <CardContent className="p-0">
            <div className="inline-flex flex-col items-start gap-4 relative w-[541px] h-[90px] top-[9px] left-[18px]">
              <div className="relative w-fit mt-[-5.00px] font-bold text-transparent text-l leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#527dc5]">Честные</span>
                <span className="text-[#232c42]"> гарантии</span>
              </div>
              <div className="inline-flex items-start gap-[31px] w-[541px] h-[90px] relative flex-[0_0_auto]">
                {guaranteeItems.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]"
                  >
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-bold text-[#232c42] text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                      {item.years}
                    </div>
                    <div className="relative w-fit font-normal text-[#394355] text-sm leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

              {/* Feature highlight */}
              <div className="inline-flex items-start gap-1.5 relative flex-[0_0_auto]">
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-4 h-4 top-1 left-1"
                    alt="Checkmark icon"
                    src="/group-6.png"
                  />
                </div>

                <div className="w-[538px] mt-[-1.00px] font-medium text-[#232c42] text-base leading-6 relative [font-family:'Raleway',Helvetica] tracking-[0]">
                  Отгрузим готовый со склада за 1 день или изготовим любую форму
                  и размер конструкции за 10-60 дней с фиксацией сроков в
                  договоре
                </div>
              </div>
            </div>

            {/* CTA section */}
            <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
              <div className="relative w-[383px] mt-[-1.00px] right-[100px] font-normal text-[#394355] text-xs [font-family:'Raleway',Helvetica] text-center tracking-[0] leading-[normal]">
                <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0]">
                  Ваши{" "}
                </span>

                <span className="font-semibold">
                  мероприятия будут яркими и уютными
                </span>

                <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0]">
                  , а бизнес будет развиваться с красивыми и{" "}
                </span>

                <span className="font-bold">
                  надежными решениями от MobilTent
                </span>
              </div>

              <div className="flex gap-6">
  {/* Large blue gradient button */}
  <Button className="relative w-[412px] h-[68px] rounded-2xl border-none shadow-md [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)] hover:opacity-90">
    <span className="absolute top-3 left-[43px] font-semibold text-white text-base [font-family:'Raleway',Helvetica] text-center tracking-[0] leading-[normal]">
      Рассчитать стоимость под ваши размеры
      <br />и получить бесплатный 3d проект
    </span>
  </Button>

  {/* Smaller frosted glass button */}
  <Button
    variant="outline"
    className="w-[203px] h-[68px] bg-[#ededed] rounded-2xl border-none shadow-[0px_22px_44px_rgba(77,77,77,0.4)] backdrop-blur-[10px]"
  >
    <span className="[font-family:'Raleway',Helvetica] font-semibold text-[16px] text-center bg-gradient-to-r from-[#243057] to-[#374255] bg-clip-text text-transparent">
      Смотреть каталог<br />готовых шатров
    </span>
  </Button>
</div>
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

        {/* Video button */}
        <Card className="inline-flex flex-col items-start gap-2.5 px-6 py-3 absolute top-[414px] left-[1148px] bg-white rounded-[50px] border-solid shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
          <CardContent className="p-0">
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <div className="relative w-[50px] h-[50px]">
                <div className="relative w-[47px] h-[33px] top-[9px] left-0.5">
                  <div className="relative h-[33px]">
                    <div className="absolute w-[23px] h-[23px] top-[5px] left-3 bg-white rounded-[11.5px]" />

                    <img
                      className="absolute w-[47px] h-[33px] top-0 left-0"
                      alt="Video play icon"
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="w-fit font-bold text-[#232c42] text-base leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                Видео
                <br />о производстве
              </div>
            </div>
          </CardContent>
        </Card>

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
      </section>
    </main>
  );
};
