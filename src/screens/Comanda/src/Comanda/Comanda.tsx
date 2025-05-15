import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ContactSection } from "./sections/ContactSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { Footer1 } from "./sections/Footer1";

export const Comanda = (): JSX.Element => {
  // Department data for mapping
  const departments = [
    { name: "Отдел проектирования", width: "w-[222px]" },
    { name: "Отдел контроля качества", width: "w-[222px]" },
    { name: "Отдел производства", width: "w-[187px]" },
    { name: "Отдел логистики", width: "w-40" },
    { name: "Отдел закупок", width: "w-[140px]" },
    { name: "Отдел монтажа", width: "w-[143px]" },
    { name: "Отдел сертификации изделий", width: "w-[272px]" },
  ];

  // Team member data for mapping
  const teamMembers = [
    {
      name: "Евгений Петров",
      position: "Дизайнер",
      experience: "Опыт с 2013 года",
      image:
        "/comanda-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at-2.png",
    },
    {
      name: "Евгений Петров",
      position: "Дизайнер",
      experience: "Опыт с 2013 года",
      image:
        "/comanda-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at-2.png",
    },
    {
      name: "Евгений Петров",
      position: "Дизайнер",
      experience: "Опыт с 2013 года",
      image:
        "/comanda-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at-2.png",
    },
  ];

  // Navigation items
  const navItems = [
    "Отзывы",
    "Готовые решения",
    "Вопросы и ответы",
    "О компании",
    "Команда",
    "Контакты",
  ];

  // Team roles
  const teamRoles = [
    { name: "Дизайнеры", icon: "/comanda-group-7.png" },
    { name: "Технологи, конструктора", icon: "/comanda-group-8.png" },
    { name: "Проектировщики", icon: "/comanda-group-9.png" },
    { name: "Геодезисты", icon: "/comanda-group-10.png" },
  ];

  return (
    <div className="relative w-full max-w-[1440px] mx-auto bg-white overflow-hidden">
      <div className="relative">
        {/* Top Navigation */}
        <nav className="flex items-start gap-6 p-7">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`text-sm font-normal ${
                item === "Готовые решения" ? "text-[#232c42]" : "text-[#394355]"
              } [font-family:'Raleway',Helvetica]`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* City Selector */}
        <div className="inline-flex flex-col items-start gap-1.5 absolute top-[19px] left-[782px]">
          <div className="inline-flex items-center gap-1">
            <div className="text-sm font-normal text-[#232c42] [font-family:'Raleway',Helvetica]">
              Ваш город
            </div>
            <img
              className="w-[8.66px] h-[4.5px]"
              alt="Polygon"
              src="/comanda-polygon-1.svg"
            />
          </div>
          <div className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
            Москва
          </div>
        </div>

        {/* Contact Icons */}
        <div className="inline-flex flex-col items-center gap-0.5 absolute top-[15px] left-[912px]">
          <div className="inline-flex items-start gap-3">
            <div className="relative w-6 h-6">
              <img
                className="absolute w-[21px] h-[18px] top-[3px] left-0.5"
                alt="Group"
                src="/comanda-group.png"
              />
            </div>
            <div className="relative w-6 h-6">
              <img
                className="absolute w-5 h-5 top-0.5 left-0.5"
                alt="Group"
                src="/comanda-group-1.png"
              />
            </div>
          </div>
          <div className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
            Написать
          </div>
        </div>

        {/* Email */}
        <div className="inline-flex items-center gap-1 absolute top-[27px] left-[1219px]">
          <div className="text-sm font-normal text-[#232c42] [font-family:'Raleway',Helvetica]">
            info@mobile-tent.ru
          </div>
          <div className="relative w-5 h-5">
            <img
              className="absolute w-4 h-4 top-0.5 left-0.5"
              alt="Group"
              src="/comanda-group-2.png"
            />
          </div>
        </div>

        {/* Working Hours */}
        <div className="absolute w-[179px] h-[38px] top-[19px] left-[1021px]">
          <div className="inline-flex flex-col items-start gap-1.5 absolute top-0 left-[42px]">
            <div className="text-sm font-normal text-[#232c42] [font-family:'Raleway',Helvetica]">
              с 09:00 - 22:00 МСК
            </div>
            <div className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
              с ПН - ПТ
            </div>
          </div>
          <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 absolute top-1 left-0 rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
            <div className="relative w-[21px] h-[21px] mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px]">
              <div className="relative w-[13px] h-[13px] top-1 left-1 bg-[url(/comanda-group-6.png)] bg-[100%_100%]" />
            </div>
          </div>
        </div>

        {/* Logo and Company Info */}
        <div className="absolute w-full max-w-[1344px] top-[92px] left-12">
          <div className="inline-flex flex-col items-start gap-3">
            <img
              className="w-[206px] h-[22.26px]"
              alt="Mobile tent ru"
              src="/comanda-mobile-tent-ru.png"
            />
            <div className="w-[217px] text-[10px] font-normal text-[#394355] [font-family:'Raleway',Helvetica]">
              Производство и продажа тентовых конструкций и шатров по всей
              России и СНГ
            </div>
          </div>

          {/* Contact Section and Help Button */}
          <div className="inline-flex items-center gap-3.5 absolute top-1.5 left-[250px]">
            <ContactSection />
            <div className="text-sm font-normal text-[#394355] [font-family:'Raleway',Helvetica]">
              или
            </div>
            <Button
              variant="ghost"
              className="h-[46px] px-4 py-[13px] bg-white rounded-[50px]"
            >
              <span className="text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
                Помочь с подбором
              </span>
            </Button>
          </div>

          {/* PhoneIcon Numbers */}
          <div className="inline-flex items-center gap-5 absolute top-1.5 left-[973px]">
            <div className="inline-flex items-center gap-[17px]">
              <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                <div className="relative w-[21px] h-[21px] mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px]">
                  <img
                    className="absolute w-3 h-3 top-1 left-1"
                    alt="Group"
                    src="/comanda-group-5.png"
                  />
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-1.5">
                <div className="text-sm font-normal text-[#394355] [font-family:'Raleway',Helvetica]">
                  +7 (499) 113-36-60
                </div>
                <div className="text-sm font-normal text-[#394355] [font-family:'Raleway',Helvetica]">
                  8 (800) 302-46-31
                </div>
              </div>
            </div>

            {/* Call Back Button */}
            <Button
              variant="ghost"
              className="w-[190px] h-[46px] pl-6 pr-3 py-2.5 bg-white rounded-[50px] shadow-[inset_0px_0px_20px_#ffffff40] flex items-center justify-between"
            >
              <span className="ml-[-7.02px] text-sm font-semibold text-[#232c42] [font-family:'Raleway',Helvetica]">
                Перезвоните мне
              </span>
              <img
                className="mt-[-5.52px] mb-[-5.52px] mr-[-7.02px]"
                alt="Frame"
                src="/comanda-frame-44.svg"
              />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-[200px] flex flex-col">
          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Services and Team Info */}
          <div className="flex flex-wrap gap-[110px] px-12 mt-[50px]">
            <div className="flex flex-col gap-[45px] max-w-[574px]">
              <div className="flex flex-col gap-[22px]">
                <ContactSection />
                <ServicesSection />
                <TeamSection />
                <p className="w-[510px] text-base font-normal text-[#394355] leading-6 [font-family:'Raleway',Helvetica]">
                  <span className="font-bold">
                    Работает, как единый организм
                  </span>
                  <span className="font-semibold">&nbsp;</span>
                  <span className="font-medium">
                    из 80 человек с высшим строительным и инженерным
                    образованием и опытом от 10 лет
                  </span>
                </p>
              </div>

              {/* Team Roles */}
              <div className="flex flex-col gap-6">
                <div className="flex w-[560px] items-start justify-between">
                  {teamRoles.slice(0, 3).map((role, index) => (
                    <div key={index} className="inline-flex items-center gap-3">
                      <div className="relative w-6 h-6">
                        <img
                          className="absolute w-6 h-[17px] top-[3px] left-0"
                          alt={role.name}
                          src={role.icon}
                        />
                      </div>
                      <div className="text-sm font-semibold text-[#394355] leading-5 [font-family:'Raleway',Helvetica]">
                        {role.name}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex w-[413px] items-center justify-between">
                  <div className="inline-flex items-center gap-3">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-6 h-[17px] top-[3px] left-0"
                        alt="Group"
                        src="/comanda-group-10.png"
                      />
                    </div>
                    <div className="text-sm font-semibold text-[#394355] leading-5 [font-family:'Raleway',Helvetica]">
                      Геодезисты
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-[#527dc5] leading-5 underline [font-family:'Raleway',Helvetica]">
                    и еще 5+ должностей разного уровня
                  </div>
                </div>
              </div>
            </div>

            {/* Departments Card */}
            <Card className="w-[660px] rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]">
              <CardContent className="flex flex-wrap w-full items-start justify-center gap-[24px_12px] py-[29px]">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="inline-flex flex-col items-start gap-2.5 p-4 bg-[#f5f6ff] rounded-[50px] overflow-hidden"
                  >
                    <div
                      className={`flex flex-col ${dept.width} items-center justify-center gap-2`}
                    >
                      <div className="text-lg font-bold text-[#527dc5] text-center leading-6 [font-family:'Raleway',Helvetica]">
                        {dept.name}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Team Members Carousel */}
          <div className="relative w-full mt-[100px] px-5">
            <div className="flex justify-between gap-5">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="w-[429px] h-[482px] bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(79px)_brightness(100%)]"
                >
                  <CardContent className="p-0 h-full relative">
                    <img
                      className="w-[293px] h-[342px] mx-auto mt-[31px] object-cover"
                      alt={member.name}
                      src={member.image}
                    />
                    <div className="absolute bottom-[59px] left-10 flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-semibold text-[#394355] leading-6 [font-family:'Raleway',Helvetica]">
                          {member.name}
                        </h3>
                        <Badge className="px-4 py-2 bg-[#f5f6ff] rounded-lg">
                          <span className="text-sm font-medium text-[#394355] leading-5 [font-family:'Raleway',Helvetica]">
                            {member.position}
                          </span>
                        </Badge>
                      </div>
                      <p className="text-sm font-normal text-[#394355] leading-5 [font-family:'Raleway',Helvetica]">
                        {member.experience}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="flex w-full items-start justify-between absolute top-[185px]">
              <Button
                variant="ghost"
                className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] flex items-center justify-center"
              >
                <div className="relative w-6 h-6 rotate-180">
                  <img
                    className="absolute w-3.5 h-6 top-0 left-[5px] -rotate-180"
                    alt="Previous"
                    src="/comanda-group-11.png"
                  />
                </div>
              </Button>
              <Button
                variant="ghost"
                className="w-14 h-14 rounded-[50px] shadow-[0px_15px_44px_#1f7cfe66] flex items-center justify-center"
              >
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-3.5 h-6 top-0 left-[5px]"
                    alt="Next"
                    src="/comanda-group-12.png"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
    
  );
  
};
