import { SearchIcon } from "lucide-react";
import { Button } from "../../../../../../components/ui/button";
import { Input } from "../../../../../../components/ui/input";

export const ContactSection = (): JSX.Element => {
  return (
    <div className="flex items-start relative rounded-[50px] overflow-hidden">
      <Button
        variant="secondary"
        className="flex items-center gap-1.5 px-4 py-3 h-auto bg-[#f2f4f7] rounded-[50px_0px_0px_50px] font-semibold text-[#232c42] text-base [font-family:'Raleway',Helvetica]"
      >
        <div className="relative w-[22px] h-[22px]">
          <img
            className="absolute w-[15px] h-[15px] top-1 left-1"
            alt="Catalog icon"
            src="/comanda-group-3.png"
          />
        </div>
        Каталог
      </Button>

      <div className="flex items-center relative bg-white rounded-[0px_50px_50px_0px] h-[46px]">
        <Input
          className="border-none h-full pl-3 w-[291px] [font-family:'Raleway',Helvetica] font-normal text-label-colorslc-l-secondary text-[17px] tracking-[-0.41px] leading-[22px] focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Поиск по 1000+ товарам"
        />
        <Button
          size="icon"
          className="h-8 w-8 rounded-[50px] bg-[#4f5d80] hover:bg-[#4f5d80]/90 mr-2"
        >
          <SearchIcon className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>
  );
};
