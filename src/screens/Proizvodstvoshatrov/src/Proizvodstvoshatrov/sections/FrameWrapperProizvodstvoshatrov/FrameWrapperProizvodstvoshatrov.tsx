import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "../../../../../../components/ui/breadcrumb";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useState } from "react";
import { Input } from "../../../../../../components/ui/input";

export const FrameWrapperProizvodstvoshatrov = (): JSX.Element => {
  const navigate = useNavigate();
  const [isCatalogHovered, setIsCatalogHovered] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const catalogRef = useRef<HTMLDivElement | null>(null);

  // Data for tent types
  const tentTypes = [
    [
      "Арочные шатры",
      "Глэмпинг",
      "Деревянные шатры",
      "Каскадные шатры",
      "Классические шатры",
      "Купольные конструкции",
      "Мембранные шатры",
    ],
    [
      "Мобильные шатры",
      "Надувные шатры",
      "Натяжные шатры",
      "Пагода шатры",
      "Сферические шатры",
      "Шатер звезда",
    ],
  ];

  // Data for other tent constructions
  const otherConstructions = [
    ["Перголы", "Тентовые ангары", "Арочные ангары"],
    ["Каркасные ангары", "Зонты"],
  ];

  const navItems = [
    { text: "Отзывы", active: false, path: "/reviews" },
    { text: "Готовые решения", active: false, path: "/" },
    { text: "Вопросы и ответы", active: false, path: "/qa" },
    { text: "О компании", active: false, path: "/about" },
    { text: "Команда", active: false, path: "/comanda" },
    { text: "Контакты", active: false, path: "/contact" },
  ];

    // Data for the feature points
    const features = [
      {
        id: 1,
        icon: "/group.png",
        title: "Проектирование",
        description: "за 5-7 дней",
      },
      {
        id: 2,
        icon: "/group-1.png",
        title: "Изготовление",
        description: "до 30 дней",
      },
    ];
    

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

  // Catalog dropdown component
  const CatalogDropdown = () => (
    <div className="absolute top-full left-0 z-50 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
      <div className="space-y-2">
      {tentTypes.flat().slice(0, 5).map((name, index) => (
  <div key={index} className="p-2 hover:bg-gray-100 rounded cursor-pointer">
    {name}
  </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-[65px] w-full">
      {/* Header section */}
      <div className="w-full h-[150px] relative">
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

                {(isCatalogHovered || isCatalogOpen) && <CatalogDropdown />}
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
      </div>

      <div className="relative bottom-[5px] left-[-600px]">


      <Breadcrumb>
          <BreadcrumbList className="bg-[#4f5d801
          a] rounded">
            <BreadcrumbItem>
              <BreadcrumbLink className="font-normal text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                Главная &gt;{" "}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink className="font-medium underline text-[#394355] text-xs [font-family:'Raleway',Helvetica]">
                О компании
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero section with background image */}
      <div
      className="relative w-full h-[458px] bg-[url(/rectangle-93.png)] bg-cover bg-[50%_50%]"
      data-model-id="1:28481"
    >
      <div className="flex flex-col items-start gap-[45px] absolute top-[104px] left-[47px]">
        <div className="flex flex-col w-[557px] items-start gap-7">
          <div className="flex flex-col w-[532px] items-start gap-[22px]">
            <div className="flex flex-col items-start gap-3">
              <h1 className="font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="text-[#7aacff]">
                  Производство тентовых
                  <br />
                  конструкций{" "}
                </span>
                <span className="text-white">любой сложности</span>
              </h1>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col items-start gap-9">
                <div className="flex flex-col items-start gap-1.5">
                  <div className="flex flex-col items-start gap-6">
                    <Button className="flex items-start gap-2.5 px-3 py-1.5 rounded-lg [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                      <span className="font-medium text-white text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                        собственном производстве в г. Калуга
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col w-[155px] items-start gap-[51px]"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-6 h-[17px] top-[3px] left-0"
                    alt={`Feature icon ${feature.id}`}
                    src={feature.icon}
                  />
                </div>

                <div className="relative w-[119px] mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                  <span className="font-semibold">
                    {feature.title}
                    <br />
                  </span>
                  <span className="[font-family:'Raleway',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                    {feature.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="absolute w-[502px] h-[362px] top-[47px] left-[885px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
        <CardContent className="p-0 h-full flex items-center justify-center">
          <div className="relative w-[57px] h-[57px] bg-[#f5f6ff] rounded-[28.72px] flex items-center justify-center">
            <img
              className="w-[19px] h-[22px]"
              alt="Play button"
              src="/polygon-2.svg"
            />
          </div>
        </CardContent>
      </Card>
    </div>

      {/* Monthly capacity section */}
      <div className="flex flex-col items-center gap-11 w-full px-12">
        <h2 className="text-4xl font-semibold [font-family:'Raleway',Helvetica]">
          <span className="text-[#527dc5]">Ежемесячные </span>
          <span className="text-[#232c42]">мощности</span>
        </h2>

        <div className="flex gap-8 justify-center w-full">
          {/* Blue capacity card */}
          <div className="bg-white p-8 rounded-[20px] shadow-xl w-[450px]">
            <div className="text-[80px] font-bold bg-gradient-to-b from-[#73a8ff] to-[#3c6cec] bg-clip-text text-transparent">
              40 000
            </div>
            <div className="text-xl font-semibold text-[#4f5d80] mt-4">
              сборных металлоконструкций
            </div>
          </div>

          {/* Dark capacity card */}
          <div className="bg-gradient-to-b from-[#243057] to-[#374255] p-8 rounded-[20px] shadow-xl w-[450px]">
            <div className="text-[80px] font-bold text-[#8cb7ff]">
              50 000<span className="text-3xl">+</span>
            </div>
            <div className="text-xl font-semibold text-white mt-4">
              тентовых покрытий
            </div>
          </div>
        </div>
      </div>

      {/* What we produce section */}
      <section className="w-full h-[540px] bg-[#eef1f8] rounded-[20px] p-12 pt-16">
      <div className="flex flex-col gap-9">
        <h2 className="font-semibold text-[#232c42] text-4xl [font-family:'Raleway',Helvetica]">
          Что предлагаем
        </h2>

        <div className="flex gap-6">
          <Card className="w-[888px] h-[362px] bg-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="p-7">
              <div className="flex flex-col gap-[21px]">
                <h3 className="font-bold text-[#527dc5] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                  Шатры
                </h3>

                <div className="flex gap-[61px]">
                  {tentTypes.map((column, columnIndex) => (
                    <div
                      key={`tent-column-${columnIndex}`}
                      className="flex flex-col gap-3"
                    >
                      {column.map((item, itemIndex) => (
                        <a
                          key={`tent-item-${columnIndex}-${itemIndex}`}
                          href="#"
                          className="font-normal text-[#394355] text-base leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] w-[169px]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div 
  className="absolute w-[366px] h-[296px] top-[23px] right-5 rounded-[20px]" 
  style={{ 
    background: 'linear-gradient(180deg, #73A8FF 0%, #6FA7FF 36.5%, #4778C7 95.5%)' 
  }}
>
                <img
                  className="w-[336px] h-[296px] ml-[30px]"
                  alt="Event tent"
                  src="/event-tent-i02-1.png"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="w-[432px] h-[362px] bg-white shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
            <CardContent className="p-7">
              <div className="flex flex-col gap-[21px]">
                <h3 className="font-bold text-[#232c42] text-xl leading-6 [font-family:'Raleway',Helvetica]">
                  Другие тентовые конструкции
                </h3>

                <div className="flex gap-[61px]">
                  {otherConstructions.map((column, columnIndex) => (
                    <div
                      key={`construction-column-${columnIndex}`}
                      className="flex flex-col gap-3"
                    >
                      {column.map((item, itemIndex) => (
                        <a
                          key={`construction-item-${columnIndex}-${itemIndex}`}
                          href="#"
                          className="font-normal text-[#394355] text-base leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0] w-[169px]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div 
  className="absolute w-[386px] h-[132px] bottom-[23px] left-[23px] rounded-[20px]" 
  style={{ 
    background: 'linear-gradient(108.32deg, #243057 -27.58%, #374255 107.93%)' 
  }}
>
  <img
    className="w-80 h-28 mt-3 ml-[33px]"
    alt="Bessonneau hangar"
    src="/bessonneau-hangar-i01-1.png"
  />
</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </div>
  );
};