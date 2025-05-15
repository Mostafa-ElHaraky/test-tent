import { PlayIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupByAnima1 = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 bg-[url(/rectangle-27.svg)] bg-cover">
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Background gradient */}
        <div className="absolute right-0 top-0 w-[807px] h-full overflow-hidden">
          <div className="relative h-[807px] -top-24 rounded-[403.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)]" />
        </div>

        {/* Content container */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-[358px] px-12 py-10">
          {/* Text content */}
          <div className="flex flex-col w-full md:w-[362px] items-start gap-6">
            <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-[#74a8ff]">Реальный</span>
              <span className="text-white"> пример</span>
            </h2>

            <p className="font-normal text-white text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
              <span>Наш каркас лежит</span>
              <span className="font-semibold">&nbsp;</span>
              <span className="font-semibold underline">
                всю зиму под слоем снега и ничего с ним не происходит
              </span>
            </p>
          </div>

          {/* Video card */}
          <Card className="w-full md:w-[618px] h-[394px] bg-[#e8edf7] rounded-[20px] overflow-hidden">
            <CardContent className="p-0 h-full flex items-center justify-center">
              <button
                className="relative w-[75px] h-[75px] bg-white rounded-full flex items-center justify-center"
                aria-label="Play video"
              >
                <PlayIcon className="h-7 w-7 ml-1" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
