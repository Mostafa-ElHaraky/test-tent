import { PlayIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Screen19 = (): JSX.Element => {
  // Video data
  const videoData = {
    title: {
      highlighted: "Реальный",
      regular: " пример",
    },
    description:
      "Наш каркас лежит всю зиму под слоем снега и ничего с ним не происходит",
  };

  return (
    <div className="relative w-full max-w-[375px] h-[402px] bg-white">
      <div className="relative h-[342px] mt-[30px]">
        <div className="relative w-full h-[342px]">
          {/* Background with gradient overlay */}
          <div className="absolute w-full h-full top-0 left-0 bg-[url(/rectangle-27.svg)] bg-cover bg-center">
            <div className="relative w-[210px] h-[342px] mx-auto overflow-hidden">
              <div className="relative w-[807px] h-[807px] -top-24 rounded-[403.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(82,125,197,1)_0%,rgba(82,125,197,0)_100%)]" />
            </div>
          </div>

          {/* Title and description */}
          <div className="flex flex-col w-[327px] items-start gap-3 absolute top-6 left-6">
            <h2 className="w-fit font-semibold text-2xl leading-normal whitespace-nowrap [font-family:'Raleway',Helvetica] tracking-[0]">
              <span className="text-[#74a8ff]">
                {videoData.title.highlighted}
              </span>
              <span className="text-white">{videoData.title.regular}</span>
            </h2>

            <div className="flex w-[296px] items-start gap-3">
              <p className="w-full font-normal text-white text-[11px] leading-[11px] [font-family:'Raleway',Helvetica] tracking-[0]">
                <span className="leading-4">Наш каркас лежит</span>
                <span className="font-semibold leading-4">&nbsp;</span>
                <span className="font-semibold leading-4 underline">
                  всю зиму под слоем снега и ничего с ним не происходит
                </span>
              </p>
            </div>
          </div>

          {/* Video player card */}
          <Card className="absolute w-[327px] h-[196px] top-[120px] left-6 bg-[#e8edf7] rounded-[20px] border-none">
            <CardContent className="flex items-center justify-center h-full p-0">
              <Button
                variant="outline"
                size="icon"
                className="w-[50px] h-[50px] bg-white rounded-full border-none shadow-none hover:bg-white/90"
                aria-label="PlayIcon video"
              >
                <PlayIcon className="h-4 w-4 fill-current" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
