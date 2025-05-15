import { CopyIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Badge } from "../../../../../../components/ui/badge";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Checkbox } from "../../../../../../components/ui/checkbox";
import { Input } from "../../../../../../components/ui/input";
import { Textarea } from "../../../../../../components/ui/textarea";

export const QA2 = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <PhoneIcon className="h-3 w-3 text-white" />,
      text: "+7 (499) 113-36-60",
    },
    {
      icon: <PhoneIcon className="h-3 w-3 text-white" />,
      text: "8 (800) 302-46-31",
    },
    {
      icon: <MailIcon className="h-3 w-3 text-white" />,
      text: "info@mobile-tent.ru",
      hasClipboard: true,
    },
  ];

  return (
    <div className="relative w-full max-w-[1440px] h-[916px] bg-white mx-auto">
      <div className="relative h-[1499px] top-[-630px]">
        <Card className="relative w-full max-w-[1440px] h-[869px] top-[630px] rounded-[30px] overflow-hidden shadow-[var(--)] backdrop-blur-[79px]">
          <CardContent className="p-0">
            <div className="relative h-[883px] top-[7px]">
              <div className="absolute w-full h-[793px] top-[90px] left-0 rounded-[30px] bg-gradient-to-b from-[rgba(245,246,255,1)] to-[rgba(245,246,255,0)]" />

              {/* Decorative images */}
              <img
                className="absolute w-[302px] h-[322px] top-[285px] left-0"
                alt="Overgrown green grass"
                src="/QA2-vecteezy-overgrown-green-grass-generative-ai-generated-24190129-.png"
              />

              <img
                className="absolute w-[498px] h-[565px] top-[130px] left-[942px]"
                alt="Event tent"
                src="/QA2-event-tent-i02-1.png"
              />

              {/* Main heading section */}
              <div className="inline-flex flex-col items-start gap-6 absolute top-[173px] left-[63px]">
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                  <h1 className="relative w-[707px] mt-[-1.00px] font-semibold text-4xl leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]">
                    <span className="text-[#527dc5]">Не нашли ответ</span>
                    <span className="text-[#232c42]"> на свой вопрос?</span>
                  </h1>
                </div>

                <p className="relative w-fit font-normal text-[#394355] text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-lg tracking-[0] leading-6">
                    Задайте и{" "}
                  </span>
                  <span className="font-medium">
                    получите ответ в течении 30 минут
                  </span>
                </p>
              </div>

              {/* Businessman image */}
              <img
                className="absolute w-[676px] h-[862px] top-0 left-[704px]"
                alt="Confident young businessman"
                src="/QA2-confident-young-businessman-in-blue-shirt-and-glasses-smiling-at.png"
              />

              {/* Expert badge */}
              <Badge className="inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute top-[378px] left-[738px] rounded-2xl bg-gradient-to-br from-[rgba(36,48,87,1)] to-[rgba(55,66,85,1)]">
                <div className="inline-flex flex-col items-center justify-center gap-1.5">
                  <div className="relative w-fit mt-[-1.00px] font-semibold text-white text-lg text-center leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    Евгений Петров
                  </div>
                  <div className="relative w-fit font-medium text-white text-base text-center leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    Эксперт по тентовым конструкциям
                  </div>
                </div>
              </Badge>

              {/* Bottom decorative image */}
              <img
                className="absolute w-[359px] h-[322px] top-[540px] left-[1081px]"
                alt="Overgrown green grass"
                src="/QA2-vecteezy-overgrown-green-grass-generative-ai-generated-24190129--1.png"
              />

              {/* Contact form */}
              <form className="flex flex-col w-[575px] items-start justify-end gap-4 absolute top-[295px] left-[63px]">
                <Card className="flex flex-col w-[575px] h-[67px] items-start gap-4 relative rounded-2xl overflow-hidden border border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px]">
                  <CardContent className="p-0 w-full">
                    <div className="h-[67px] items-center pl-3 pr-2 py-2 flex gap-2 relative self-stretch w-full bg-white rounded-2xl overflow-hidden">
                      <Input
                        className="border-none shadow-none [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px]"
                        placeholder="Ваш телефон на который хотите получить ответ"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex flex-col w-[575px] h-[184px] items-start gap-4 relative rounded-2xl overflow-hidden border border-solid border-neutral-200 shadow-[var(--)] backdrop-blur-[79px]">
                  <CardContent className="p-0 w-full h-full">
                    <div className="h-[184px] items-start pl-3 pr-2 pt-[22px] pb-2 flex gap-2 relative self-stretch w-full bg-white rounded-2xl overflow-hidden">
                      <Textarea
                        className="border-none shadow-none resize-none h-full [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px]"
                        placeholder="Ваш вопрос"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Button className="relative w-[575px] h-[68px] rounded-2xl border-[none] shadow-2 bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
                  <span className="font-semibold text-white text-base text-center leading-[normal] whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                    Задать вопрос
                  </span>
                </Button>

                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="flex w-[33px] h-[33px] items-center justify-center p-3 relative rounded-lg bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
                    <Checkbox
                      id="terms"
                      className="w-[17px] h-[13px] data-[state=checked]:bg-transparent border-none"
                    />
                  </div>

                  <div className="flex flex-col w-[453px] items-start gap-3 relative">
                    <label
                      htmlFor="terms"
                      className="relative w-[529px] mt-[-1.00px] mr-[-76.00px] font-medium text-[#4f5d80cc] text-xs leading-[normal] [font-family:'Raleway',Helvetica] tracking-[0]"
                    >
                      Нажимая на кнопку, вы даете согласие на обработку
                      персональных данных и соглашаетесь с Пользовательским
                      соглашение
                    </label>
                  </div>
                </div>
              </form>

              {/* Contact information section */}
              <div className="inline-flex flex-col items-start gap-6 absolute top-[727px] left-[63px]">
                <h2 className="relative w-fit mt-[-1.00px] font-semibold text-[#394355] text-lg leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
                  Или свяжитесь по контактам
                </h2>

                <div className="inline-flex items-start gap-[69px] relative flex-[0_0_auto]">
                  {/* Social media icons */}
                  <div className="inline-flex items-start gap-[18px] relative flex-[0_0_auto]">
                    <div className="relative w-7 h-7">
                      <img
                        className="absolute w-6 h-5 top-1 left-0.5"
                        alt="Telegram icon"
                        src="/QA2-group-1.png"
                      />
                    </div>

                    <div className="relative w-7 h-7">
                      <img
                        className="absolute w-[23px] h-[23px] top-[3px] left-[3px]"
                        alt="WhatsApp icon"
                        src="/QA2-group-2.png"
                      />
                    </div>
                  </div>

                  {/* Contact information */}
                  <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                    {contactInfo.slice(0, 2).map((contact, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]"
                      >
                        <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
                          {contact.icon}
                        </div>

                        <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                              {contact.text}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Email contact */}
                  <div className="inline-flex items-center gap-[18px] relative flex-[0_0_auto]">
                    <div className="flex w-[25px] h-[25px] items-center justify-center gap-2.5 p-1.5 relative rounded-[50px] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)]">
                      <MailIcon className="h-3 w-3 text-white" />
                    </div>

                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit [font-family:'Raleway',Helvetica] font-normal text-[#232c42] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                        info@mobile-tent.ru
                      </div>

                      <div className="relative w-5 h-5">
                        <CopyIcon className="absolute w-4 h-4 top-0.5 left-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
