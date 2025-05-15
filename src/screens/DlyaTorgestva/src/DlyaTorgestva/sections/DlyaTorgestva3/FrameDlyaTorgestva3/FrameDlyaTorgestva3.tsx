import { Button } from "../../../../../../../components/ui/button";

export const FrameDlyaTorgestva3 = (): JSX.Element => {
  return (
    <section className="absolute w-[1440px] h-[334px] left-0 top-0 rounded-[30px] bg-gradient-to-br from-[#243057] to-[#374255] flex">
      <div className="flex-1 py-16 px-[85px]">
        <div className="flex flex-col gap-6 mb-[46px]">
          <h2 className="w-full font-['Raleway',Helvetica] text-4xl tracking-[0]">
            <span className="font-medium text-white">Нет времени искать </span>
            <span className="font-bold text-[#9ec2ff]">шатер </span>
            <span className="font-medium text-white">на сайте?</span>
          </h2>
          <p className="w-full font-['Raleway',Helvetica] font-medium text-white text-lg tracking-[0] leading-6">
            Получите каталог шатров и посмотрите в удобное для вас время
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Button className="w-[412px] h-[68px] rounded-2xl shadow-[0px_22px_44px_0px_rgba(32,124,254,0.4)] bg-gradient-to-b from-[rgba(115,168,255,1)] via-[rgba(111,167,255,1)] to-[rgba(60,108,236,1)] font-['Raleway',Helvetica] font-semibold text-white text-base">
            Смотреть каталог
          </Button>
        </div>
      </div>

      <div className="flex-1 relative bg-[url(/fields-at-mountain-valley-1.png)] bg-cover">
        <img
          className="absolute w-[442px] h-[334px] right-0 top-0"
          alt="Tent with curtains"
          src="/Shatry3-tent-with-curtains-i08-1.png"
        />
      </div>
    </section>
  );
};
