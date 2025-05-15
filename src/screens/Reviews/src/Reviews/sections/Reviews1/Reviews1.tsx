import { Badge } from "../../../../../../components/ui/badge";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";

// Data for reviews to enable mapping
const reviews = [
  {
    text: "Покупка не бюджетного шатра стоило того. Шатер выдерживает нагрузки ветра и не пахнет на солнце, как предыдущий",
    author: "Максимова Н.В. генеральный директор",
    images: ["/reviews1-rectangle-57-2.png", "/reviews1-rectangle-58-2.png"],
  },
  {
    text: "Покупка не бюджетного шатра стоило того. Шатер выдерживает нагрузки ветра и не пахнет на солнце, как предыдущий",
    author: "Максимова Н.В. генеральный директор",
    images: ["/reviews1-rectangle-57-2.png", "/reviews1-rectangle-58-2.png"],
  },
  {
    text: "Покупка не бюджетного шатра стоило того. Шатер выдерживает нагрузки ветра и не пахнет на солнце, как предыдущий",
    author: "Максимова Н.В. генеральный директор",
    images: ["/reviews1-rectangle-57-2.png", "/reviews1-rectangle-58-2.png"],
  },
];

// Navigation links
const navLinks = [
  { text: "Отзывы", active: true },
  { text: "Готовые решения", active: false },
  { text: "Вопросы и ответы", active: false },
  { text: "О компании", active: false },
  { text: "Команда", active: false },
  { text: "Контакты", active: false },
];

// Filter buttons
const filterButtons = [
  { text: "Текстовые", active: true },
  { text: "Благодарственные письма", active: false },
  { text: "Отзовики", active: false },
];

export const Reviews1 = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto bg-white">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="relative w-full">
            <div className="w-full h-[1196px] [background:linear-gradient(180deg,rgba(232,238,248,1)_0%,rgba(222,228,240,0)_100%)]" />

            <img
              className="absolute w-[719px] h-[643px] top-[194px] left-0 object-cover"
              alt="Element clouds"
              src="/reviews1-08-clouds-2.png"
            />

            <div className="absolute w-full max-w-[1401px] h-[69px] top-[194px] left-[19px] bg-white rounded-[0px_0px_20px_20px]" />

            <img
              className="absolute w-[318px] h-[306px] bottom-[295px] left-0"
              alt="Vecteezy overgrown"
              src="/reviews1-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
            />

            {/* Top navigation */}
            <nav className="absolute top-7 left-12 flex items-center gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-sm ${link.active ? "text-[#232c42]" : "text-[#394355]"} font-normal [font-family:'Raleway',Helvetica]`}
                >
                  {link.text}
                </a>
              ))}
            </nav>

            {/* City selector */}
            <div className="absolute top-[19px] left-[782px] flex flex-col items-start gap-1.5">
              <div className="flex items-center gap-1">
                <span className="text-sm font-normal text-[#232c42] [font-family:'Raleway',Helvetica]">
                  Ваш город
                </span>
                <img
                  className="w-[8.66px] h-[4.5px]"
                  alt="Dropdown icon"
                  src="/reviews1-polygon-1.svg"
                />
              </div>
              <span className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
                Москва
              </span>
            </div>

            {/* Write to us */}
            <div className="absolute top-[15px] left-[912px] flex flex-col items-center gap-0.5">
              <div className="flex items-start gap-3">
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-[21px] h-[18px] top-[3px] left-0.5"
                    alt="Message icon"
                    src="/reviews1-group-4.png"
                  />
                </div>
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-5 h-5 top-0.5 left-0.5"
                    alt="WhatsApp icon"
                    src="/reviews1-group-5.png"
                  />
                </div>
              </div>
              <span className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
                Написать
              </span>
            </div>

            {/* Working hours */}
            <div className="absolute top-[19px] left-[1021px] h-[38px]">
              <div className="absolute top-0 left-[42px] flex flex-col items-start gap-1.5">
                <span className="text-sm font-normal text-[#232c42] [font-family:'Raleway',Helvetica]">
                  с 09:00 - 22:00 МСК
                </span>
                <span className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
                  с ПН - ПТ
                </span>
              </div>
              <div className="absolute top-1 left-0 flex items-center justify-center w-[25px] h-[25px] p-1.5 rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                <div className="relative w-[21px] h-[21px] -m-1">
                  <div className="relative w-[13px] h-[13px] top-1 left-1 bg-[url(/reviews1-group-10.png)] bg-[100%_100%]" />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="absolute top-[27px] left-[1219px] flex items-center gap-1">
              <span className="text-sm font-normal text-[#232c42] [font-family:'Raleway',Helvetica]">
                info@mobile-tent.ru
              </span>
              <div className="relative w-5 h-5">
                <img
                  className="absolute w-4 h-4 top-0.5 left-0.5"
                  alt="Email icon"
                  src="/reviews1-group-6.png"
                />
              </div>
            </div>

            {/* Logo and search section */}
            <div className="absolute w-full max-w-[1344px] h-[58px] top-[92px] left-12">
              {/* Logo */}
              <div className="absolute top-0 left-0 flex flex-col items-start gap-3">
                <img
                  className="w-[206px] h-[22.26px]"
                  alt="Mobile tent ru"
                  src="/reviews1-mobile-tent-ru.png"
                />
                <p className="w-[217px] text-[10px] font-normal text-[#394355] [font-family:'Raleway',Helvetica]">
                  Производство и продажа тентовых конструкций и шатров по всей
                  России и СНГ
                </p>
              </div>

              {/* Search and catalog */}
              <div className="absolute top-1.5 left-[250px] flex items-center gap-3.5">
                <div className="flex w-[473px] items-start relative rounded-[50px] overflow-hidden">
                  <Button className="flex items-center gap-1.5 px-4 py-3 bg-[#f2f4f7] rounded-[50px_0px_0px_50px] h-auto">
                    <div className="relative w-[22px] h-[22px]">
                      <img
                        className="absolute w-[15px] h-[15px] top-1 left-1"
                        alt="Catalog icon"
                        src="/reviews1-group-7.png"
                      />
                    </div>
                    <span className="font-semibold text-base text-[#232c42] [font-family:'Raleway',Helvetica]">
                      Каталог
                    </span>
                  </Button>
                  <div className="flex w-[349px] h-[46px] items-center">
                    <div className="flex w-full h-full items-center pl-3 pr-2 py-2 bg-white rounded-[0px_50px_50px_0px]">
                      <Input
                        className="border-none text-[17px] font-normal text-label-colorslc-l-secondary tracking-[-0.41px] leading-[22px] [font-family:'Raleway',Helvetica]"
                        placeholder="Поиск по 1000+ товарам"
                      />
                      <Button
                        size="icon"
                        className="w-8 h-8 bg-[#4f5d80] rounded-[50px] flex items-center justify-center"
                      >
                        <div className="w-[15.99px] h-4 bg-[url(/reviews1-group-8.png)] bg-[100%_100%]" />
                      </Button>
                    </div>
                  </div>
                </div>
                <span className="text-sm font-normal text-[#394355] [font-family:'Raleway',Helvetica]">
                  или
                </span>
                <Button
                  variant="outline"
                  className="h-[46px] px-4 py-[13px] bg-white rounded-[50px] border-none"
                >
                  <span className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
                    Помочь с подбором
                  </span>
                </Button>
              </div>

              {/* Phone numbers and callback */}
              <div className="absolute top-1.5 left-[973px] flex items-center gap-5">
                <div className="flex items-center gap-[17px]">
                  <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="relative w-[21px] h-[21px] -m-1">
                      <img
                        className="absolute w-3 h-3 top-1 left-1"
                        alt="Phone icon"
                        src="/reviews1-group-9.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <span className="text-sm font-normal text-[#394355] [font-family:'Raleway',Helvetica]">
                      +7 (499) 113-36-60
                    </span>
                    <span className="text-sm font-normal text-[#394355] [font-family:'Raleway',Helvetica]">
                      8 (800) 302-46-31
                    </span>
                  </div>
                </div>
                <div className="flex w-[190px]">
                  <Button
                    variant="outline"
                    className="w-full h-[46px] flex items-center justify-center pl-6 pr-3 py-2.5 bg-white rounded-[50px] shadow-[inset_0px_0px_20px_#ffffff40] border-none"
                  >
                    <span className="font-semibold text-sm text-[#232c42] [font-family:'Raleway',Helvetica]">
                      Перезвоните мне
                    </span>
                    <img
                      className="ml-2"
                      alt="Phone icon"
                      src="/reviews1-frame-44.svg"
                    />
                  </Button>
                </div>
              </div>
            </div>

            {/* Breadcrumbs */}
            <Badge
              variant="outline"
              className="absolute top-[372px] left-[46px] p-1 bg-[#4f5d801a] rounded font-normal text-xs text-[#394355] [font-family:'Raleway',Helvetica]"
            >
              <span>Главная &gt;{"  "}</span>
              <span className="font-medium underline">Отзывы</span>
            </Badge>

            {/* Main content */}
            <div className="absolute top-[443px] left-12 flex flex-col gap-9">
              {/* Header section */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-[5px]">
                    <div className="relative w-[27px] h-[27px]">
                      <img
                        className="absolute w-[25px] h-[25px] top-px left-px"
                        alt="Reviews icon"
                        src="/reviews1-group.png"
                      />
                    </div>
                    <h2 className="font-medium text-lg text-[#4f5d80] [font-family:'Raleway',Helvetica]">
                      Отзывы клиентов
                    </h2>
                  </div>
                  <h1 className="w-[721px] font-semibold text-4xl [font-family:'Raleway',Helvetica]">
                    <span className="text-[#232c42]">Уже </span>
                    <span className="text-[#527dc5]">800+ компаний купили</span>
                    <span className="text-[#232c42]"> наши шатры</span>
                  </h1>
                </div>

                {/* Filter buttons */}
                <div className="flex items-start gap-6">
                  {filterButtons.map((button, index) => (
                    <Button
                      key={index}
                      className={`px-6 py-3 rounded-[50px] font-semibold text-base [font-family:'Raleway',Helvetica] ${
                        button.active
                          ? "bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)] text-white"
                          : "bg-white text-[#394355] border border-solid border-[#394355]"
                      }`}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Review cards */}
              <div className="flex flex-col gap-6">
                {reviews.map((review, index) => (
                  <Card
                    key={index}
                    className="w-[1343px] h-[326px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start gap-6 absolute top-[43px] left-10">
                        <div className="relative w-[59px] h-[59px] -rotate-180">
                          <img
                            className="absolute w-11 h-[33px] top-[18px] left-[7px] rotate-180"
                            alt="Quote icon"
                            src={`/reviews1-group-${index + 1}.png`}
                          />
                        </div>
                        <div className="flex flex-col gap-9">
                          <p className="w-[570px] font-normal text-lg text-[#4f5d80] leading-6 [font-family:'Raleway',Helvetica]">
                            {review.text}
                          </p>
                          <p className="font-semibold text-lg text-[#4f5d80] leading-6 [font-family:'Raleway',Helvetica]">
                            {review.author}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-[26px] absolute top-10 left-[785px]">
                        {review.images.map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            className="w-[246px] h-[246px] object-cover"
                            alt={`Tent image ${imgIndex + 1}`}
                            src={image}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Show more button */}
            <Button
              variant="link"
              className="absolute top-[1492px] left-[637px] font-bold text-2xl text-[#527dc5] leading-6 underline [font-family:'Raleway',Helvetica]"
            >
              Показать еще
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
