import { ClockIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../../../../../components/ui/button";
import { Link } from 'react-router-dom';

// Data for footer navigation sections
const footerSections = [
  {
    title: "Клиентам",
    links: [
      { text: "Отзывы", path: "/reviews" },
      { text: "Готовые решения", path: "/solutions" },
      { text: "Вопросы и ответы", path: "/QA" },
      { text: "Контакты", path: "/contact" }
    ],
  },
  {
    title: "Каталог",
    links: [
      { text: "Шатры", path: "/shatry" },
      { text: "Тентовые ангары", path: "/tentovye-angary" },
      { text: "Оснащение", path: "/equipment" }
    ],
  },
  {
    title: "О компании",
    links: [
      { text: "Компания", path: "/about" },
      { text: "Команда", path: "/team" },
      { text: "Производство", path: "/proizvodstvo-shatrov" },
      { text: "Проектирование", path: "/design" }
    ],
  },
];

export const Footer1 = (): JSX.Element => {
  return (
<footer className="relative w-full max-w-[1440px] h-[346px] bg-[#171C29] overflow-hidden font-['Raleway',Helvetica] mx-auto">
        {/* Company Logo and Description */}
      <div className="flex flex-col w-[157px] h-[55px] items-start gap-3 absolute top-[42px] left-12">
        <img
          className="relative w-[157px] h-[17.16px]"
          alt="Mobile tent ru"
          src="/element9-mobile-tent-ru.png"
        />
        <p className="relative w-[156px] mb-[-9.16px] font-normal text-white text-[10px] tracking-[0] leading-normal">
          Производство и продажа тентовых конструкций и шатров по всей России и
          СНГ
        </p>
      </div>

      {/* Navigation Sections */}
      <div className="inline-flex items-start gap-[46px] absolute top-10 left-[269px]">
  {/* Map through footer sections */}
  {footerSections.map((section, index) => (
    <div
      key={index}
      className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]"
    >
      <h3 className="relative w-fit mt-[-1.00px] font-semibold text-white text-base whitespace-nowrap tracking-[0] leading-normal">
        {section.title}
      </h3>
      <nav className="inline-flex flex-col items-start gap-3.5 relative flex-[0_0_auto]">
        {section.links.map((link, linkIndex) => (
          <Link
            key={linkIndex}
            to={link.path}
            className="relative w-fit font-normal text-white text-sm whitespace-nowrap tracking-[0] leading-normal hover:text-[#b1ceff] transition-colors"
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </div>
        ))}

        {/* Social Media Section */}
        <div className="relative w-[138px] h-16">
          <div className="inline-flex flex-col items-start gap-6 absolute top-0 left-0">
            <h3 className="relative w-fit mt-[-1.00px] font-semibold text-white text-base whitespace-nowrap tracking-[0] leading-normal">
              Социальные сети
            </h3>
          </div>
          <div className="inline-flex items-center gap-3 absolute top-[37px] left-0">
            <a href="#" className="relative w-[27px] h-[27px]">
              <div className="relative w-[25px] h-[18px] top-[5px] left-px">
                <div className="relative h-[18px]">
                  <div className="absolute w-3 h-3 top-[3px] left-[7px] bg-white rounded-[6.21px]" />
                  <img
                    className="absolute w-[25px] h-[18px] top-0 left-0"
                    alt="Vector"
                    src="/element9-vector.svg"
                  />
                </div>
              </div>
            </a>
            <a href="#" className="relative w-[25px] h-[25px]">
              <img
                className="absolute w-[25px] h-3.5 top-[5px] left-0"
                alt="Group"
                src="/element9-group.png"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Contact and CTA Section */}
      <div className="absolute w-[187px] h-[161px] top-[42px] left-[960px]">
        {/* Working Hours */}
        <div className="inline-flex items-start gap-[17px] absolute top-0 left-0">
          <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
            <ClockIcon className="w-[13px] h-[13px] text-white" />
          </div>
          <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-normal text-white text-sm whitespace-nowrap tracking-[0] leading-normal">
              с 09:00 - 22:00 МСК
            </p>
            <p className="relative w-fit font-semibold text-white text-sm whitespace-nowrap tracking-[0] leading-normal">
              с ПН - ПТ
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex w-[184px] items-center justify-between absolute top-[59px] left-0">
          <Button
            variant="ghost"
            className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] rounded"
          >
            <span className="relative w-fit mt-[-1.00px] font-semibold text-[#b1ceff] text-sm whitespace-nowrap tracking-[0] leading-normal">
              Написать
            </span>
          </Button>
          <div className="inline-flex items-start gap-[15px] relative flex-[0_0_auto]">
            <a href="#" className="relative w-6 h-6">
              <img
                className="absolute w-[21px] h-[18px] top-[3px] left-0.5"
                alt="Group"
                src="/element9-group-1.png"
              />
            </a>
            <a href="#" className="relative w-6 h-6">
              <img
                className="absolute w-5 h-5 top-0.5 left-0.5"
                alt="Group"
                src="/element9-group-2.png"
              />
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <Button className="absolute w-[187px] h-[53px] top-[115px] left-0 rounded-2xl border-[none] shadow-[0px_15px_20px_#1f7cfe24] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
          <span className="absolute w-[167px] top-1 left-2.5 font-semibold text-white text-sm text-center tracking-[0] leading-normal">
            Рассчитать стоимость <br></br> под нужный размер
          </span>
        </Button>
      </div>

      {/* PhoneIcon and Email Section */}
      <div className="absolute w-[199px] h-[148px] top-[42px] left-[1193px]">
        <div className="inline-flex flex-col items-start absolute top-0 left-0">
          {/* PhoneIcon Numbers */}
          <div className="inline-flex items-start gap-[17px] relative flex-[0_0_auto]">
            <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <PhoneIcon className="w-3 h-3 text-white" />
            </div>
            <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
              <a
                href="tel:+74991133660"
                className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
              >
                <span className="relative w-fit mt-[-1.00px] font-normal text-white text-sm tracking-[0] leading-normal whitespace-nowrap">
                  +7 (499) 113-36-60
                </span>
              </a>
            </div>
          </div>
          <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto] -mt-2">
            <div className="relative w-[25px] h-[25px] rounded-[50px]" />
            <a
              href="tel:88003024631"
              className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
            >
              <span className="relative w-fit mt-[-1.00px] font-normal text-white text-sm tracking-[0] leading-normal whitespace-nowrap">
                8 (800) 302-46-31
              </span>
            </a>
          </div>
        </div>

        {/* Call Back Button */}
        <Button
          variant="ghost"
          className="inline-flex items-center gap-2.5 p-1.5 absolute top-[59px] left-[42px] bg-[#4f5d8024] rounded"
        >
          <span className="relative w-fit mt-[-1.00px] font-semibold text-[#b1ceff] text-sm underline whitespace-nowrap tracking-[0] leading-normal">
            Перезвоните мне
          </span>
        </Button>

        {/* Email */}
        <div className="inline-flex items-center gap-[18px] absolute top-[123px] left-0">
          <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
            <MailIcon className="w-[15px] h-[15px] text-white" />
          </div>
          <a
            href="mailto:info@mobile-tent.ru"
            className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
          >
            <span className="relative w-fit font-normal text-white text-sm tracking-[0] leading-normal whitespace-nowrap">
              info@mobile-tent.ru
            </span>
            <div className="relative w-5 h-5">
              <img
                className="absolute w-4 h-4 top-0.5 left-0.5"
                alt="Group"
                src="/element9-group-6.png"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="absolute w-full h-[46px] top-[300px] left-0">
        <div className="relative w-full h-[46px] bg-[#4f5d8008]">
          <p className="absolute top-[11px] left-12 font-normal text-[#4f5d8094] text-[10px] tracking-[0] leading-normal">
            Предложения на сайте не является публичной офертой.
            <br />
            Цена может быть скорректирована в связи со сменой рыночных цен
          </p>
          <p className="absolute top-[21px] left-[462px] font-normal text-[#4f5d8094] text-[10px] tracking-[0] leading-normal whitespace-nowrap">
            © ООО mobile-ten
          </p>
          <a
            href="#"
            className="absolute top-[21px] left-[960px] font-normal text-[#4f5d8094] text-[10px] whitespace-nowrap tracking-[0] leading-normal hover:text-[#b1ceff] transition-colors"
          >
            Политика конфиденциальности
          </a>
          <a
            href="#"
            className="absolute top-[21px] left-[1193px] font-normal text-[#4f5d8094] text-[10px] whitespace-nowrap tracking-[0] leading-normal hover:text-[#b1ceff] transition-colors"
          >
            Пользовательское соглашение
          </a>
        </div>
      </div>
    </footer>
  );
};
