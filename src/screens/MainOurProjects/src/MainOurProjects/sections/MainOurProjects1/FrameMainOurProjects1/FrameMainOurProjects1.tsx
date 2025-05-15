import { Button } from "../../../../../../../components/ui/button";
import { Checkbox } from "../../../../../../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../components/ui/select";

export const FrameMainOurProjects1 = (): JSX.Element => {
  // Data for construction options
  const constructionOptions = [
    { id: "tents", label: "Шатры" },
    { id: "hangars", label: "Ангары" },
  ];

  // Data for dropdown selectors
  const dropdownSelectors = [
    { id: "tent-type", label: "Тип шатра" },
    { id: "tent-area", label: "Площадь шатра" },
    { id: "event-type", label: "Для какого мероприятия" },
  ];

  return (
    <div className="relative w-full h-[899px] overflow-hidden">
      <div className="relative w-full h-[1196px] bottom-[350px]">
        <div className="relative w-full h-[643px]">
          <div className="relative w-full h-[643px]">


            <div className="absolute w-[1401px] h-[69px] top-0 left-[19px] bg-white rounded-[0px_0px_20px_20px]" />

            {/* Breadcrumb navigation */}
            <div className="inline-flex items-center justify-center gap-2.5 p-1 absolute top-[178px] left-[46px] bg-[#4f5d801a] rounded">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="[font-family:'Raleway',Helvetica] font-normal text-[#394355] text-xs tracking-[0]">
                  Главная &gt;{"  "}
                </span>
                <span className="font-medium underline">Портфолио</span>
              </div>
            </div>

            {/* Construction section */}
            <div className="inline-flex flex-col items-start gap-4 absolute top-[446px] left-[50px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-semibold text-[#232c42] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                Конструкция
              </div>

              <div className="inline-flex flex-col items-start gap-[26px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                  {constructionOptions.map((option) => (
                    <div
                      key={option.id}
                      className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
                    >
                      <Checkbox
                        id={option.id}
                        className="w-[33px] h-[33px] rounded-lg border-2 border-solid border-[#dddddd]"
                      />
                      <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                        <label
                          htmlFor={option.id}
                          className="relative w-fit mt-[-1.00px] font-medium text-[#394355] text-base leading-6 whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dropdown selectors */}
            <div className="inline-flex items-start gap-3 absolute top-[446px] left-[485px]">
              {dropdownSelectors.map((selector) => (
                <div
                  key={selector.id}
                  className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]"
                >
                  <Select>
                    <SelectTrigger className="w-[294px] h-12 p-3 rounded-lg border-2 border-solid border-[#dddddd] font-medium text-[#394355] text-base [font-family:'Raleway',Helvetica]">
                      <SelectValue placeholder={selector.label} />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Dropdown options would go here */}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </div>

          {/* Reset filter button */}
          <Button
            variant="link"
            className="absolute top-[521px] left-[1253px] font-bold text-[#527dc5] text-base leading-6 underline whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0] p-0 h-auto"
          >
            Сбросить фильтр
          </Button>
        </div>

      </div>
    </div>
  );
};
