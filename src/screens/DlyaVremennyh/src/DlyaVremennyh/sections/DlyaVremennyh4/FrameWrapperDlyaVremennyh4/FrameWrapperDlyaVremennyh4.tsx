import { Card, CardContent } from "../../../../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../components/ui/select";

export const FrameWrapperDlyaVremennyh4 = (): JSX.Element => {
  // Data for city names to enable mapping
  const cityNames = Array(24).fill("Название города");

  return (
    <section className="w-full p-6 bg-[#eef1f8] rounded-[20px]">
      <div className="flex flex-col gap-9 max-w-[1343px] mx-auto">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] text-[#232c42]">
            Работаем по всему миру
          </h2>

          <Select defaultValue="russia">
            <SelectTrigger className="w-auto h-auto px-4 py-2.5 rounded-[500px] border border-solid border-[#394355] bg-transparent">
              <SelectValue>
                <span className="[font-family:'Raleway',Helvetica] font-semibold text-[#232c42] text-3xl">
                  Россия
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="russia">Россия</SelectItem>
              {/* Additional countries would go here */}
            </SelectContent>
          </Select>
        </div>

        <Card className="bg-white rounded-[20px] shadow-[var(--)] backdrop-blur-[79px]">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-14 gap-y-3">
              {cityNames.map((cityName, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-normal text-[#394355] text-base leading-6 underline [font-family:'Raleway',Helvetica] tracking-[0]"
                >
                  {cityName}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
