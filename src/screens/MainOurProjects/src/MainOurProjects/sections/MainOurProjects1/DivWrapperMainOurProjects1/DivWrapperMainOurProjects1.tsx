import { Button } from "../../../../../../../components/ui/button";
import { Input } from "../../../../../../../components/ui/input";

export const DivWrapperMainOurProjects1 = (): JSX.Element => {
  return (
    <div className="relative w-full top-[60px] py-6 px-12">
      <div className="flex justify-between items-center ">
        {/* Logo and tagline */}
        <div className="flex flex-col items-start gap-3">
          <img
            className="w-[206px] h-[22.26px]"
            alt="Mobile tent ru"
            src="/mobile-tent-ru.png"
          />
          <div className="w-[217px] font-normal text-[#394355] text-[10px] leading-normal font-['Raleway',Helvetica] tracking-[0]">
            Производство и продажа тентовых конструкций и шатров по всей России
            и СНГ
          </div>
        </div>

        {/* SearchIcon and help section */}
        <div className="flex items-center gap-3.5">
          <div className="flex w-[473px] items-start relative rounded-[50px] overflow-hidden">
            {/* Catalog button */}
            <div className="inline-flex items-center gap-1.5 px-4 py-3 bg-[#f2f4f7] rounded-[50px_0px_0px_50px] overflow-hidden">
              <div className="relative w-[22px] h-[22px]">
                <img
                  className="absolute w-[15px] h-[15px] top-1 left-1"
                  alt="Group"
                  src="/group-3.png"
                />
              </div>
              <div className="font-semibold text-[#232c42] text-base leading-normal whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                Каталог
              </div>
            </div>

            {/* SearchIcon input */}
            <div className="flex w-[349px] h-[46px] items-center">
              <div className="flex w-full h-full items-center gap-2 pl-3 pr-2 py-2 bg-white rounded-[0px_50px_50px_0px]">
                <Input
                  className="border-none shadow-none font-['Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px] h-full"
                  placeholder="Поиск по 1000+ товарам"
                />
                <Button
                  size="icon"
                  className="w-8 h-8 bg-[#4f5d80] rounded-[50px] flex items-center justify-center"
                >
                  <div className="w-[15.99px] h-4 bg-[url(/group-4.png)] bg-[100%_100%]" />
                </Button>
              </div>
            </div>
          </div>

          <div className="font-normal text-[#394355] text-sm leading-normal whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
            или
          </div>

          <Button
            variant="outline"
            className="h-[46px] px-4 py-[13px] bg-white rounded-[50px] font-semibold text-[#232c42] text-sm leading-normal whitespace-nowrap font-['Raleway',Helvetica] tracking-[0] border-none"
          >
            Помочь с подбором
          </Button>
        </div>

        {/* Contact information */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-[17px]">
            <div className="flex w-[25px] h-[25px] items-center justify-center p-1.5 rounded-[50px] [background:linear-gradient(180deg,rgba(115,168,255,1)_0%,rgba(111,167,255,1)_37%,rgba(60,108,236,1)_100%)]">
              <div className="relative w-[21px] h-[21px] mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px]">
                <img
                  className="absolute w-3 h-3 top-1 left-1"
                  alt="Group"
                  src="/group-5.png"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-1.5">
              <div className="flex items-center gap-1">
                <div className="font-['Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0] leading-normal whitespace-nowrap">
                  +7 (499) 113-36-60
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="font-['Raleway',Helvetica] font-normal text-[#394355] text-sm tracking-[0] leading-normal whitespace-nowrap">
                  8 (800) 302-46-31
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[190px] items-center gap-5">
            <Button
              variant="outline"
              className="w-[190px] h-[46px] flex items-center justify-center gap-2.5 pl-6 pr-3 py-2.5 bg-white rounded-[50px] shadow-[inset_0px_0px_20px_#ffffff40] border-none"
            >
              <span className="font-semibold text-[#232c42] text-sm leading-normal whitespace-nowrap font-['Raleway',Helvetica] tracking-[0]">
                Перезвоните мне
              </span>
              <img
                className="flex-[0_0_auto]"
                alt="Frame"
                src="/frame-44.svg"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
