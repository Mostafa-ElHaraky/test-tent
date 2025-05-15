import { Card, CardContent } from "../../../../../../../components/ui/card";

export const DivMainOurProjects1 = (): JSX.Element => {
  return (
    <main className= "relative w-full mx-auto top-[50px]">
    <section className="flex justify-between w-full gap-8 py-8">
      <div className= "relative left-[50px]">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-4xl text-[#394355] font-['Raleway',Helvetica]">
            Выполненные работы
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="inline-flex flex-col gap-2.5 px-3 py-1.5 rounded-lg [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
              <div className="flex items-center gap-2">
                <p className="font-normal text-white text-lg leading-6 font-['Raleway',Helvetica]">
                  Для наших инженеров нет сложных задач
                </p>
              </div>
            </div>

            <p className="font-normal text-[#394355] text-lg leading-6 font-['Raleway',Helvetica]">
              Посмотрите, как мы решаем задачи клиентов
            </p>
          </div>
        </div>
      </div>
      </div>
<div className="relative right-[50px]">
<Card 
  className="w-[351px] h-[131px] rounded-[20px] shadow-2 bg-transparent"
  style={{
    background: 'linear-gradient(165.06deg, #73A8FF 10.53%, #6FA7FF 47.69%, #3C6CEC 112.35%)'
  }}
>
          <CardContent className="p-0">
          <div className="flex flex-col gap-3 p-6">
            <h3 className="font-bold text-4xl text-white font-['Raleway',Helvetica] whitespace-nowrap">
              1 500 000+ м2
            </h3>
            <p className="font-medium text-white text-base font-['Raleway',Helvetica] max-w-[275px]">
              площадь произведенных тентовых конструкций
            </p>
          </div>
        </CardContent>
      </Card>
      </div>
    </section>
  </main>
  );
};
