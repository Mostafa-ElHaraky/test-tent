import { Card, CardContent } from "../../../../../../components/ui/card";

export const TeamSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col gap-3">
            <Card className="w-fit rounded-lg [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)] border-none">
              <CardContent className="px-3 py-1.5">
                <h2 className="font-normal text-white text-lg leading-6 [font-family:'Raleway',Helvetica] tracking-[0]">
                  Эксперты воплотят ваши мечты
                </h2>
              </CardContent>
            </Card>

            <p className="text-[#394355] text-lg leading-6 font-normal [font-family:'Raleway',Helvetica] tracking-[0]">
              об идеальном тентовой конструкции для вашего бизнеса
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
