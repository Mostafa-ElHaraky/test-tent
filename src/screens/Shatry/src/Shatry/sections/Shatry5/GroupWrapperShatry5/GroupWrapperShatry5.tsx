import { PlayIcon } from "lucide-react";
import { Card, CardContent } from "../../../../../../../components/ui/card";

export const GroupWrapperShatry5 = (): JSX.Element => {
  return (
    <section className="relative w-full h-[516px]">
      <div className="relative h-full">
        <div className="w-full h-full bg-[url(/rectangle-27.svg)] bg-[100%_100%]">
          <div className="relative w-[807px] h-full mx-auto overflow-hidden">
            <div className="relative h-[807px] -top-24 rounded-[403.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)]" />
          </div>
        </div>

        <div className="flex justify-between items-center absolute top-[60px] left-12 right-12">
          <div className="flex flex-col w-[362px] items-start gap-6">
            <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-[#74a8ff]">Реальный</span>
              <span className="text-white"> пример</span>
            </h2>

            <div className="flex items-start gap-3">
              <p className="font-normal text-white text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="[font-family:'Raleway',Helvetica] font-normal text-white text-lg tracking-[0] leading-6">
                  Наш каркас лежит
                </span>
                <span className="font-semibold">&nbsp;</span>
                <span className="font-semibold underline">
                  всю зиму под слоем снега и ничего с ним не происходит
                </span>
              </p>
            </div>
          </div>

          <Card className="relative w-[618px] h-[394px] bg-[#e8edf7] rounded-[20px]">
            <CardContent className="p-0 h-full flex items-center justify-center">
              <div className="w-[75px] h-[75px] bg-white rounded-[37.5px] flex items-center justify-center">
                <PlayIcon className="w-[25px] h-[29px] ml-1" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
