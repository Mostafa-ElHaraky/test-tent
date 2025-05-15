import { ChevronDownIcon, SearchIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "../../../../../../components/ui/breadcrumb";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";

export const QA1 = (): JSX.Element => {
  // FAQ questions data
  const faqQuestions = [
    { id: 1, text: "Сколько стоит?", active: true },
    { id: 2, text: "Как заказать?", active: false },
    { id: 3, text: "Какие конструкции вы делаете?", active: false },
    { id: 4, text: "У вас свое производство?", active: false },
    { id: 5, text: "Какие сроки изготовления?", active: false },
    { id: 6, text: "Товар в наличии или надо ждать?", active: false },
    { id: 7, text: "Как оплачивать?", active: false },
    { id: 8, text: "Есть ли доставка и в какие города?", active: false },
  ];

  // Navigation links
  const navLinks = [
    { text: "Отзывы", active: false },
    { text: "Готовые решения", active: true },
    { text: "Вопросы и ответы", active: false },
    { text: "О компании", active: false },
    { text: "Команда", active: false },
    { text: "Контакты", active: false },
  ];

  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      <div className="relative">
        <div className="w-full overflow-hidden">
          <div className="relative">
            <img
              className="absolute w-[719px] h-[643px] top-0 left-0 object-cover"
              alt="Element clouds"
              src="/QA1-08-clouds-2.png"
            />

            <div className="absolute w-full h-[69px] top-0 left-0 bg-white rounded-[0px_0px_20px_20px]" />

            {/* Top navigation bar */}
            <div className="flex items-start gap-6 absolute top-7 left-12">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className={`relative w-fit [font-family:'Raleway',Helvetica] font-normal ${link.active ? "text-[#232c42]" : "text-[#394355]"} text-sm tracking-[0] leading-[normal] whitespace-nowrap`}
                >
                  {link.text}
                </div>
              ))}
            </div>

            {/* City selector */}
            <div className="inline-flex flex-col items-start gap-1.5 absolute top-[19px] left-[782px]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-normal text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                  Ваш город
                </div>
                <ChevronDownIcon className="h-[4.5px] w-[8.66px]" />
              </div>
              <div className="w-fit font-semibold text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                Москва
              </div>
            </div>

            {/* Write to us */}
            <div className="inline-flex flex-col items-center gap-0.5 absolute top-[15px] left-[912px]">
              <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-[21px] h-[18px] top-[3px] left-0.5"
                    alt="Group"
                    src="/QA1-group.png"
                  />
                </div>
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-5 h-5 top-0.5 left-0.5"
                    alt="Group"
                    src="/QA1-group-1.png"
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
                  alt="Group"
                  src="/QA1-group-2.png"
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
                  <div className="relative w-[13px] h-[13px] top-1 left-1 bg-[url(/QA1-group-6.png)] bg-[100%_100%]" />
                </div>
              </div>
            </div>

            {/* Logo and search section */}
            <div className="absolute w-[1344px] h-[58px] top-[92px] left-12">
              <div className="inline-flex flex-col items-start gap-3 absolute top-0 left-0">
                <img
                  className="relative w-[206px] h-[22.26px]"
                  alt="Mobile tent ru"
                  src="/QA1-mobile-tent-ru.png"
                />
                <div className="w-[217px] font-normal text-[#394355] text-[10px] leading-[normal] relative [font-family:'Raleway',Helvetica] tracking-[0]">
                  Производство и продажа тентовых конструкций и шатров по всей
                  России и СНГ
                </div>
              </div>

              {/* SearchIcon and catalog section */}
              <div className="inline-flex items-center gap-3.5 absolute top-1.5 left-[250px]">
                <div className="flex w-[473px] items-start relative rounded-[50px] overflow-hidden">
                  <Button
                    variant="secondary"
                    className="inline-flex items-center gap-1.5 px-4 py-3 relative flex-[0_0_auto] bg-[#f2f4f7] rounded-[50px_0px_0px_50px] overflow-hidden"
                  >
                    <div className="relative w-[22px] h-[22px]">
                      <img
                        className="absolute w-[15px] h-[15px] top-1 left-1"
                        alt="Group"
                        src="/QA1-group-3.png"
                      />
                    </div>
                    <div className="w-fit font-semibold text-[#232c42] text-base leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                      Каталог
                    </div>
                  </Button>

                  <div className="flex flex-col w-[349px] h-[46px] items-start gap-4 relative">
                    <div className="flex w-[349px] h-[46px] items-center gap-2 pl-3 pr-2 py-2 relative bg-white rounded-[0px_50px_50px_0px]">
                      <Input
                        className="relative w-[291px] [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px] border-none"
                        placeholder="Поиск по 1000+ товарам"
                      />
                      <Button
                        size="icon"
                        className="flex w-8 items-center justify-center gap-2.5 px-3 py-2 relative mt-[-1.00px] mb-[-1.00px] mr-[-2.00px] bg-[#4f5d80] rounded-[50px]"
                      >
                        <SearchIcon className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="w-fit font-normal text-[#394355] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                  или
                </div>

                <Button
                  variant="outline"
                  className="inline-flex h-[46px] items-center justify-center gap-2.5 px-4 py-[13px] relative flex-[0_0_auto] bg-white rounded-[50px]"
                >
                  <div className="w-fit font-semibold text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                    Помочь с подбором
                  </div>
                </Button>
              </div>

              {/* PhoneIcon numbers and callback */}
              <div className="inline-flex items-center gap-5 absolute top-1.5 left-[973px]">
                <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
                  <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="relative w-[21px] h-[21px] mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px]">
                      <img
                        className="absolute w-3 h-3 top-1 left-1"
                        alt="Group"
                        src="/QA1-group-5.png"
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
                    className="flex w-[190px] h-[46px] items-center justify-center gap-2.5 pl-6 pr-3 py-2.5 relative bg-white rounded-[50px] shadow-[inset_0px_0px_20px_#ffffff40]"
                  >
                    <div className="w-fit ml-[-7.02px] font-semibold text-[#232c42] text-sm leading-[normal] whitespace-nowrap relative [font-family:'Raleway',Helvetica] tracking-[0]">
                      Перезвоните мне
                    </div>
                    <img
                      className="relative flex-[0_0_auto] mt-[-5.52px] mb-[-5.52px] mr-[-7.02px]"
                      alt="Frame"
                      src="/QA1-frame-44.svg"
                    />
                  </Button>
                </div>
              </div>
            </div>

            {/* Breadcrumb navigation */}
            <div className="inline-flex items-center justify-center gap-2.5 p-1 absolute top-[372px] left-[46px] bg-[#4f5d801a] rounded">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0]"
                    >
                      Главная
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="font-medium underline">
                      Вопрос-ответ
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Page title */}
            <div className="inline-flex flex-col items-start gap-3 absolute top-[443px] left-12">
              <div className="relative w-[721px] mt-[-1.00px] [font-family:'Raleway',Helvetica] font-semibold text-transparent text-4xl tracking-[0] leading-[normal]">
                <span className="text-[#527dc5]">Клиенты</span>
                <span className="text-[#232c42]"> часто спрашивают</span>
              </div>
            </div>

            {/* FAQ section */}
            <Card className="absolute w-[1343px] h-[433px] top-[530px] left-12 bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="p-0 h-full">
                <div className="flex h-full">
                  {/* Questions column */}
                  <div className="flex flex-col w-[457px] p-[37px_39px] gap-6 border-r border-[#E5E7EB]">
                    {faqQuestions.map((question) => (
                      <div
                        key={question.id}
                        className={`relative w-full [font-family:'Raleway',Helvetica] ${
                          question.active
                            ? "font-semibold text-[#527dc5]"
                            : "font-normal text-[#394355]"
                        } text-xl tracking-[0] leading-6 cursor-pointer`}
                      >
                        {question.text}
                      </div>
                    ))}
                  </div>

                  {/* Answer column */}
                  <div className="flex-1 p-9">
                    <div className="[font-family:'Raleway',Helvetica] font-normal text-[#4f5d80] text-lg tracking-[0] leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                      amet lacus accumsan et viverra justo commodo. Proin
                      sodales pulvinar tempor. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus. Nam
                      fermentum, nulla luctus pharetra vulputate, felis tellus
                      mollis orci, sed rhoncus sapien nunc eget odio.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                      amet lacus accumsan et viverra justo commodo. Proin
                      sodales pulvinar tempor. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus. Nam
                      fermentum, nulla luctus pharetra vulputate, felis tellus
                      mollis orci, sed rhoncus sapien nunc eget odio.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
