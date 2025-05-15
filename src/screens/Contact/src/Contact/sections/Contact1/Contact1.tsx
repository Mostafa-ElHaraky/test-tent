import { Badge } from "../../../../../../components/ui/badge";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";

export const Contact1 = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { title: "Отзывы", active: false },
    { title: "Готовые решения", active: true },
    { title: "Вопросы и ответы", active: false },
    { title: "О компании", active: false },
    { title: "Команда", active: false },
    { title: "Контакты", active: false },
  ];

  // Contact information data
  const contactInfo = [
    { phone: "+7 (499) 113-36-60" },
    { phone: "8 (800) 302-46-31" },
    { email: "info@mobile-tent.ru" },
  ];

  return (
    <main className="relative w-full max-w-[1440px] mx-auto bg-white overflow-hidden">
      <div className="relative">
        {/* Top navigation bar */}
        <header className="relative w-full bg-white rounded-b-[20px] shadow-sm z-10">
          <div className="flex justify-between items-center px-12 py-2">
            <nav className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-sm ${
                    link.active ? "text-[#232c42]" : "text-[#394355]"
                  } [font-family:'Raleway',Helvetica]`}
                >
                  {link.title}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-[#232c42] [font-family:'Raleway',Helvetica]">
                    Ваш город
                  </span>
                  <img
                    className="w-[8.66px] h-[4.5px]"
                    alt="Dropdown icon"
                    src="/contact1-polygon-1.svg"
                  />
                </div>
                <span className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
                  Москва
                </span>
              </div>

              <div className="flex flex-col items-center gap-0.5 ml-4">
                <div className="flex items-start gap-3">
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[21px] h-[18px] top-[3px] left-0.5"
                      alt="Telegram icon"
                      src="/contact1-group.png"
                    />
                  </div>
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-5 h-5 top-0.5 left-0.5"
                      alt="WhatsApp icon"
                      src="/contact1-group-1.png"
                    />
                  </div>
                </div>
                <span className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
                  Написать
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5 ml-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="relative w-[13px] h-[13px] bg-[url(/contact1-group-6.png)] bg-[100%_100%]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-[#232c42] [font-family:'Raleway',Helvetica]">
                      с 09:00 - 22:00 МСК
                    </span>
                    <span className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
                      с ПН - ПТ
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 ml-4">
                <span className="text-sm text-[#232c42] [font-family:'Raleway',Helvetica]">
                  info@mobile-tent.ru
                </span>
                <div className="relative w-5 h-5">
                  <img
                    className="absolute w-4 h-4 top-0.5 left-0.5"
                    alt="Email icon"
                    src="/contact1-group-2.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Logo and search section */}
        <div className="flex justify-between items-center px-12 py-4 mt-4">
          <div className="flex flex-col gap-3">
            <img
              className="w-[206px] h-[22.26px]"
              alt="Mobile tent ru logo"
              src="/contact1-mobile-tent-ru.png"
            />
            <p className="text-[10px] text-[#394355] [font-family:'Raleway',Helvetica] w-[217px]">
              Производство и продажа тентовых конструкций и шатров по всей
              России и СНГ
            </p>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="flex rounded-[50px] overflow-hidden">
              <Button
                className="flex items-center gap-1.5 px-4 py-3 bg-[#f2f4f7] rounded-[50px_0px_0px_50px] text-[#232c42] [font-family:'Raleway',Helvetica] h-[46px]"
                variant="ghost"
              >
                <div className="relative w-[22px] h-[22px]">
                  <img
                    className="absolute w-[15px] h-[15px] top-1 left-1"
                    alt="Catalog icon"
                    src="/contact1-group-3.png"
                  />
                </div>
                <span className="font-semibold text-base">Каталог</span>
              </Button>

              <div className="flex items-center bg-white rounded-[0px_50px_50px_0px] h-[46px]">
                <Input
                  className="w-[291px] border-none text-[17px] [font-family:'Raleway',Helvetica] text-label-colorslc-l-secondary tracking-[-0.41px] leading-[22px] h-[46px]"
                  placeholder="Поиск по 1000+ товарам"
                />
                <Button
                  className="w-8 h-8 bg-[#4f5d80] rounded-[50px] flex items-center justify-center"
                  size="icon"
                >
                  <div className="w-[15.99px] h-4 bg-[url(/group-4.png)] bg-[100%_100%]" />
                </Button>
              </div>
            </div>

            <span className="text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
              или
            </span>

            <Button
              className="h-[46px] px-4 py-[13px] bg-white text-[#232c42] font-semibold text-sm [font-family:'Raleway',Helvetica] rounded-[50px]"
              variant="outline"
            >
              Помочь с подбором
            </Button>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-[17px]">
              <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                <div className="relative w-3 h-3">
                  <img
                    className="w-full h-full"
                    alt="Phone icon"
                    src="/contact1-group-5.png"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
                  +7 (499) 113-36-60
                </span>
                <span className="text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
                  8 (800) 302-46-31
                </span>
              </div>
            </div>

            <Button
              className="flex items-center gap-2.5 h-[46px] pl-6 pr-3 py-2.5 bg-white text-[#232c42] font-semibold text-sm [font-family:'Raleway',Helvetica] rounded-[50px] shadow-[inset_0px_0px_20px_#ffffff40]"
              variant="outline"
            >
              Перезвоните мне
              <img
                className="flex-[0_0_auto]"
                alt="Phone icon"
                src="/contact1-frame-44.svg"
              />
            </Button>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="px-12 mt-8">
          <Badge
            className="inline-flex items-center gap-2.5 p-1 bg-[#4f5d801a] rounded text-xs text-[#394355] [font-family:'Raleway',Helvetica]"
            variant="outline"
          >
            <span>Главная &gt;{"  "}</span>
            <span className="font-medium underline">Контакты</span>
          </Badge>
        </div>

        {/* Main content */}
        <div className="px-12 mt-8">
          <div className="flex flex-col gap-[22px]">
            <h1 className="text-4xl font-semibold [font-family:'Raleway',Helvetica]">
              <span className="text-[#527dc5]">Контакты </span>
              <span className="text-[#232c42]">компании</span>
            </h1>

            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-3">
                <Badge
                  className="inline-flex px-3 py-1.5 rounded-lg [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] text-white text-lg [font-family:'Raleway',Helvetica]"
                  variant="outline"
                >
                  Работаем с любыми городами России
                </Badge>
                <p className="text-lg text-[#394355] [font-family:'Raleway',Helvetica]">
                  По любым вопросам звоните и пишите по указанным контактам
                </p>
              </div>
            </div>
          </div>

          {/* Contact information */}
          <div className="flex items-start gap-14 mt-8">
            <div className="flex items-start gap-[18px]">
              <div className="relative w-7 h-7">
                <img
                  className="absolute w-6 h-5 top-1 left-0.5"
                  alt="Telegram icon"
                  src="/contact1-group-7.png"
                />
              </div>
              <div className="relative w-7 h-7">
                <img
                  className="absolute w-[23px] h-[23px] top-[3px] left-[3px]"
                  alt="WhatsApp icon"
                  src="/contact1-group-8.png"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {contactInfo.slice(0, 2).map((contact, index) => (
                <div key={index} className="flex items-center gap-[17px]">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="relative w-3 h-3">
                      <img
                        className="w-full h-full"
                        alt="Phone icon"
                        src={`/contact1-group-${index === 0 ? 9 : 10}.png`}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
                    {contact.phone}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-[18px]">
              <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                <div className="relative w-[15px] h-[15px]">
                  <img
                    className="absolute w-[15px] h-[11px] top-0.5 left-0"
                    alt="Email icon"
                    src="/contact1-group-11.png"
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-[#232c42] [font-family:'Raleway',Helvetica]">
                  info@mobile-tent.ru
                </span>
                <div className="relative w-5 h-5">
                  <img
                    className="absolute w-4 h-4 top-0.5 left-0.5"
                    alt="Copy icon"
                    src="/contact1-group-12.png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Office information card */}
          <div className="flex mt-8">
            <div className="flex-1">{/* Map will be here */}</div>
            <Card className="w-[500px] p-[26px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px]">
              <CardContent className="p-0">
                <div className="flex flex-col gap-[26px]">
                  <h2 className="text-lg font-semibold text-[#394355] [font-family:'Raleway',Helvetica]">
                    Будем рады вас видеть в офисе или на производстве
                  </h2>
                  <div className="flex gap-4">
                    <Button className="h-[49px] px-4 py-[7px] bg-[#527dc5] rounded-[10px] text-white font-bold text-lg [font-family:'Raleway',Helvetica] [text-shadow:0px_4px_4px_#00000040]">
                      Офис г. Красногорск
                    </Button>
                    <Button className="h-[49px] px-4 py-[7px] bg-[#527dc5] rounded-[10px] text-white font-bold text-lg [font-family:'Raleway',Helvetica] [text-shadow:0px_4px_4px_#00000040]">
                      Производство г. Калуга
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map section */}
          <div className="w-full h-[360px] mt-8 bg-[url(/contact1-rectangle-87.png)] bg-cover bg-[50%_50%] rounded-lg">
            <div className="flex flex-col gap-6 pt-[163px] pl-[26px]">
              <h3 className="text-lg font-semibold text-[#394355] [font-family:'Raleway',Helvetica]">
                Адрес офиса компании
              </h3>

              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="relative w-[15px] h-[15px]">
                      <img
                        className="absolute w-[11px] h-[15px] top-0 left-0.5"
                        alt="Location icon"
                        src="/contact1-group-13.png"
                      />
                    </div>
                  </div>
                  <div className="ml-[35px] -mt-[20px]">
                    <p className="text-sm text-[#232c42] [font-family:'Raleway',Helvetica]">
                      Московская область, г. Красногорск, ул. Молодежная. д. 4
                    </p>
                    <a
                      href="#"
                      className="text-sm font-semibold text-[#527dc5] underline [font-family:'Raleway',Helvetica]"
                    >
                      Построить маршрут на Яндекс картах
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="relative w-[13px] h-[13px] bg-[url(/group-14.png)] bg-[100%_100%]" />
                  </div>
                  <div className="ml-[35px] -mt-[20px]">
                    <div className="flex items-start gap-1.5">
                      <span className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
                        ПН - ПТ
                      </span>
                      <span className="text-sm text-[#232c42] [font-family:'Raleway',Helvetica]">
                        с 09:00 - 22:00 МСК
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-semibold text-[#527dc5] underline [font-family:'Raleway',Helvetica]"
                    >
                      По предварительной записи
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background image */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <img
            className="absolute w-[719px] h-[643px] top-[194px] left-0 object-cover"
            alt="Element clouds"
            src="/contact1-08-clouds-2.png"
          />
          <img
            className="absolute w-[318px] h-16 bottom-0 left-0"
            alt="Vecteezy overgrown"
            src="/contact1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
          />
        </div>
      </div>
    </main>
  );
};
