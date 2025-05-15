import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";

export const FrameWrapperNew = (): JSX.Element => {
  // Contact information data
  const phoneNumbers = [
    { number: "+7 (499) 113-36-60", icon: "/group-6.png" },
    { number: "8 (800) 302-46-31", icon: "/group-7.png" },
  ];

  // Office locations data
  const officeLocations = [
    { name: "Офис г. Красногорск" },
    { name: "Производство г. Калуга" },
  ];

  // Social media icons
  const socialIcons = [
    { src: "/group-4.png", alt: "Social media icon" },
    { src: "/group-5.png", alt: "Social media icon" },
  ];

  return (
    <section className="w-full max-w-[1346px] mx-auto my-8">
      <div className="flex flex-col gap-[22px]">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-4xl leading-normal font-['Raleway',Helvetica]">
            <span className="text-[#527dc5]">Контакты </span>
            <span className="text-[#232c42]">компании</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-col gap-3">
                <div className="inline-flex flex-col gap-2.5 px-3 py-1.5 rounded-lg bg-gradient-to-br from-[#243057] to-[#374255]">
                  <div className="flex gap-2">
                    <p className="font-normal text-white text-lg leading-6 whitespace-nowrap font-['Raleway',Helvetica]">
                      Работаем с любыми городами России
                    </p>
                  </div>
                </div>

                <p className="font-normal text-[#394355] text-lg leading-6 font-['Raleway',Helvetica]">
                  По любым вопросам звоните и пишите по указанным контактам
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-14 mt-10">
        {/* Social media icons */}
        <div className="flex items-start gap-[18px]">
          {socialIcons.map((icon, index) => (
            <div key={index} className="relative w-7 h-7">
              <img
                className="absolute w-6 h-5 top-1 left-0.5"
                alt={icon.alt}
                src={icon.src}
              />
            </div>
          ))}
        </div>

        {/* Phone numbers */}
        <div className="flex flex-col gap-3">
          {phoneNumbers.map((phone, index) => (
            <div key={index} className="flex items-center gap-[17px]">
              <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 rounded-[50px] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
                <div className="relative w-[21px] h-[21px] -m-1">
                  <img
                    className="absolute w-3 h-3 top-1 left-1"
                    alt="Phone icon"
                    src={phone.icon}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <p className="font-normal text-[#394355] text-sm font-['Raleway',Helvetica]">
                  {phone.number}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Email */}
        <div className="flex items-center gap-[18px]">
          <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 rounded-[50px] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
            <div className="relative w-[21px] h-[21px] -m-1">
              <div className="relative w-[15px] h-[15px] top-[3px] left-[3px]">
                <img
                  className="absolute w-[15px] h-[11px] top-0.5 left-0"
                  alt="Email icon"
                  src="/group-8.png"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <p className="font-normal text-[#232c42] text-sm font-['Raleway',Helvetica]">
              info@mobile-tent.ru
            </p>

            <div className="relative w-5 h-5">
              <img
                className="absolute w-4 h-4 top-0.5 left-0.5"
                alt="Copy icon"
                src="/group-9.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Office locations card */}
      <Card className="mt-10 ml-auto w-fit bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px]">
        <CardContent className="p-[26px]">
          <div className="flex flex-col items-center gap-[26px]">
            <h3 className="font-semibold text-[#394355] text-lg leading-6 font-['Raleway',Helvetica]">
              Будем рады вас видеть в офисе или на производстве
            </h3>

            <div className="flex flex-col gap-[17px]">
              <div className="flex gap-4">
                {officeLocations.map((office, index) => (
                  <Button
                    key={index}
                    className="h-[49px] px-4 py-[7px] bg-[#527dc5] rounded-[10px] text-white font-bold text-lg font-['Raleway',Helvetica] shadow-[0px_4px_4px_#00000040]"
                  >
                    {office.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map and address section */}
      <div className="w-full h-[360px] mt-10 bg-[url(/rectangle-87.png)] bg-cover bg-[50%_50%]">
        <div className="flex flex-col gap-6 pt-[163px] pl-[26px]">
          <h3 className="font-semibold text-[#394355] text-lg leading-6 font-['Raleway',Helvetica]">
            Адрес офиса компании
          </h3>

          <div className="flex flex-col gap-6">
            <div className="relative h-[49px]">
              <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 absolute top-0 left-0 rounded-[50px] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
                <div className="relative w-[21px] h-[21px] -m-1">
                  <div className="relative w-[15px] h-[15px] top-[3px] left-[3px]">
                    <img
                      className="absolute w-[11px] h-[15px] top-0 left-0.5"
                      alt="Location icon"
                      src="/group-10.png"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 ml-[35px] mt-[5px]">
                <p className="font-normal text-[#232c42] text-sm font-['Raleway',Helvetica]">
                  Московская область, г. Красногорск, ул. Молодежная. д. 4
                </p>

                <a
                  href="#"
                  className="font-semibold text-[#527dc5] text-sm underline font-['Raleway',Helvetica]"
                >
                  Построить маршрут на Яндекс картах
                </a>
              </div>
            </div>

            <div className="relative h-[47px]">
              <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 absolute top-0 left-0 rounded-[50px] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
                <div className="relative w-[21px] h-[21px] -m-1">
                  <div className="relative w-[13px] h-[13px] top-1 left-1 bg-[url(/group-11.png)] bg-[100%_100%]" />
                </div>
              </div>

              <div className="ml-[35px]">
                <div className="flex gap-1.5 mt-1">
                  <span className="font-semibold text-[#232c42] text-sm font-['Raleway',Helvetica]">
                    ПН - ПТ
                  </span>
                  <span className="font-normal text-[#232c42] text-sm font-['Raleway',Helvetica]">
                    с 09:00 - 22:00 МСК
                  </span>
                </div>
                <p className="absolute top-[30px] font-semibold text-[#527dc5] text-sm underline font-['Raleway',Helvetica]">
                  По предварительной записи
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
