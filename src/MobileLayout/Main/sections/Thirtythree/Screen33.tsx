import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen33 = (): JSX.Element => {
  // Client links data
  const clientLinks = [
    "Отзывы",
    "Готовые решения",
    "Вопросы и ответы",
    "Контакты",
  ];

  // Catalog links data
  const catalogLinks = ["Шатры", "Тентовые ангары", "Оснащение"];

  // About company links data
  const aboutLinks = ["Компания", "Команда", "Производство", "Проектирование"];

  // PhoneIcon numbers
  const phoneNumbers = ["+7 (499) 113-36-60", "8 (800) 302-46-31"];

  return (
    <div className="relative bg-[#171c29] min-h-screen w-full max-w-[375px] mx-auto">
      <div className="flex flex-col items-center gap-[30px] pt-[30px]">
        <div className="w-[327px]">
          <div className="flex flex-col items-start gap-[30px]">
            {/* Logo and company description */}
            <div className="flex flex-col w-[157px] items-start gap-3">
              <img
                className="w-[156px] h-[17.05px]"
                alt="Mobile tent ru"
                src="/mobile-tent-ru.png"
              />
              <p className="w-[156px] font-['Raleway',Helvetica] text-white text-[7px]">
                Производство и продажа тентовых конструкций и шатров по всей
                России и СНГ
              </p>
            </div>

            {/* Client and Catalog sections */}
            <div className="w-[264px] flex justify-between">
              {/* Client section */}
              <div className="flex flex-col items-start gap-6">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-white text-base">
                  Клиентам
                </h3>
                <div className="flex flex-col items-start gap-3.5">
                  {clientLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-['Raleway',Helvetica] font-normal text-white text-[11px]"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Catalog section */}
              <div className="flex flex-col items-start gap-6">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-white text-base">
                  Каталог
                </h3>
                <div className="flex flex-col items-start gap-3.5">
                  {catalogLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-['Raleway',Helvetica] font-normal text-white text-[11px]"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* About company and Social media sections */}
            <div className="w-[309px] flex justify-between">
              {/* About company section */}
              <div className="flex flex-col items-start gap-6">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-white text-base">
                  О компании
                </h3>
                <div className="flex flex-col items-start gap-3.5">
                  {aboutLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-['Raleway',Helvetica] font-normal text-white text-[11px]"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social media section */}
              <div className="w-[138px]">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-white text-base">
                  Социальные сети
                </h3>
                <div className="flex items-center gap-3 mt-[37px]">
                  <div className="relative w-[27px] h-[27px]">
                    <div className="relative w-[25px] h-[18px] top-[5px] left-px">
                      <div className="absolute w-3 h-3 top-[3px] left-[7px] bg-white rounded-[6.21px]" />
                      <img
                        className="absolute w-[25px] h-[18px] top-0 left-0"
                        alt="Vector"
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="relative w-[25px] h-[25px]">
                    <img
                      className="absolute w-[25px] h-3.5 top-[5px] left-0"
                      alt="Group"
                      src="/group.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact and CTA section */}
            <div className="w-[327px]">
              <div className="flex justify-between">
                {/* Working hours */}
                <div className="flex items-start gap-2">
                  <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                    <div className="relative w-[21px] h-[21px]">
                      <div className="relative w-[13px] h-[13px] top-1 left-1 bg-[url(/group-3.png)] bg-[100%_100%]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <p className="font-['Raleway',Helvetica] font-normal text-white text-[11px]">
                      с 09:00 - 22:00 МСК
                    </p>
                    <p className="font-['Raleway',Helvetica] font-semibold text-white text-sm">
                      с ПН - ПТ
                    </p>
                  </div>
                </div>

                {/* Contact buttons */}
                <div className="flex items-center justify-between w-[155px]">
                  <Button variant="ghost" className="p-1.5 h-auto">
                    <span className="font-['Raleway',Helvetica] font-semibold text-[#b1ceff] text-[11px]">
                      Написать
                    </span>
                  </Button>
                  <div className="flex items-start gap-[15px]">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-[21px] h-[18px] top-[3px] left-0.5"
                        alt="Group"
                        src="/group-1.png"
                      />
                    </div>
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-5 h-5 top-0.5 left-0.5"
                        alt="Group"
                        src="/group-2.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="w-full h-[53px] mt-[30px] rounded-2xl shadow-[0px_15px_20px_#1f7cfe24] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                <span className="font-['Raleway',Helvetica] font-semibold text-white text-sm">
                  Рассчитать стоимость под нужный размер
                </span>
              </Button>
            </div>

            {/* PhoneIcon numbers section */}
            <div className="w-[327px]">
              <div className="flex items-start gap-2">
                <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                  <div className="relative w-[21px] h-[21px]">
                    <img
                      className="absolute w-3 h-3 top-1 left-1"
                      alt="Group"
                      src="/group-4.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  {phoneNumbers.map((phone, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 mt-[-2px]"
                    >
                      {index > 0 && (
                        <div className="w-[25px] h-[25px] rounded-[50px]" />
                      )}
                      <a
                        href={`tel:${phone.replace(/\D/g, "")}`}
                        className="font-['Raleway',Helvetica] font-normal text-white text-[11px]"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                className="p-1.5 ml-[27px] mt-[10px] bg-[#4f5d8024] h-auto"
              >
                <span className="font-['Raleway',Helvetica] font-semibold text-[#b1ceff] text-[11px] underline">
                  Перезвоните мне
                </span>
              </Button>
            </div>

            {/* Email section */}
            <div className="flex items-center gap-2 ml-[174px]">
              <div className="flex w-[25px] h-[25px] items-center justify-center rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
                <div className="relative w-[21px] h-[21px]">
                  <div className="relative w-[15px] h-[15px] top-[3px] left-[3px]">
                    <img
                      className="absolute w-[15px] h-[11px] top-0.5 left-0"
                      alt="Group"
                      src="/group-5.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <a
                  href="mailto:info@mobile-tent.ru"
                  className="font-['Raleway',Helvetica] font-normal text-white text-[11px]"
                >
                  info@mobile-tent.ru
                </a>
                <div className="relative w-[11px] h-[11px]">
                  <img
                    className="absolute w-[9px] h-[9px] top-px left-px"
                    alt="Group"
                    src="/group-6.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer disclaimer */}
        <Card className="bg-[#4f5d8008] border-none w-full">
          <CardContent className="flex flex-col items-center gap-[18px] px-[22px] py-2.5">
            <p className="font-['Raleway',Helvetica] font-normal text-[#4f5d8094] text-[10px] text-center">
              Предложения на сайте не является публичной офертой.
              <br />
              Цена может быть скорректирована в связи со сменой рыночных цен
            </p>
            <div className="flex items-start gap-[19px]">
              <a
                href="#"
                className="font-['Raleway',Helvetica] font-normal text-[#4f5d8094] text-[10px]"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="font-['Raleway',Helvetica] font-normal text-[#4f5d8094] text-[10px]"
              >
                Пользовательское соглашение
              </a>
            </div>
            <p className="font-['Raleway',Helvetica] font-normal text-[#4f5d8094] text-[10px]">
              © ООО mobile-ten
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
