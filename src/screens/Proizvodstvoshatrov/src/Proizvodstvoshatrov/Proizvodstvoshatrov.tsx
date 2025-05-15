import { Card, CardContent } from "../../../../components/ui/card";
import { DivProizvodstvoshatrov } from "./sections/DivProizvodstvoshatrov/DivProizvodstvoshatrov";
import { DivWrapperProizvodstvoshatrov } from "./sections/DivWrapperProizvodstvoshatrov";
import { Frame1Proizvodstvoshatrov } from "./sections/Frame1Proizvodstvoshatrov";
import { Frame2Proizvodstvoshatrov } from "./sections/Frame2Proizvodstvoshatrov";
import { Frame3Proizvodstvoshatrov } from "./sections/Frame3Proizvodstvoshatrov/Frame3Proizvodstvoshatrov";
import { Frame4Proizvodstvoshatrov } from "./sections/Frame4Proizvodstvoshatrov/Frame4Proizvodstvoshatrov";
import { Frame5Proizvodstvoshatrov } from "./sections/Frame5Proizvodstvoshatrov/Frame5Proizvodstvoshatrov";
import { FrameProizvodstvoshatrov } from "./sections/FrameProizvodstvoshatrov";
import { FrameWrapperProizvodstvoshatrov } from "./sections/FrameWrapperProizvodstvoshatrov";
import { OverlapGroupWrapperProizvodstvoshatrov } from "./sections/OverlapGroupWrapperProizvodstvoshatrov";
import { OverlapWrapperProizvodstvoshatrov } from "./sections/OverlapWrapperProizvodstvoshatrov";
import { SectionComponentNodeProizvodstvoshatrov } from "./sections/SectionComponentNodeProizvodstvoshatrov/SectionComponentNodeProizvodstvoshatrov";
import { FrameNew } from "./sections/FrameNew/FrameNew";
import { FrameWrapperNew } from "./sections/FrameWrapperNew/FrameWrapperNew";
import { Footer } from "./sections/Footer/Footer";

export const Proizvodstvoshatrov = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center">

        {/* Hero Section */}
        <FrameWrapperProizvodstvoshatrov />

        {/* Top header and search */}
        <FrameProizvodstvoshatrov />

        {/* Products */}
        <OverlapWrapperProizvodstvoshatrov />

        {/* Full Production Process Section */}
        <DivProizvodstvoshatrov />

        {/* Production Capabilities */}
        <DivWrapperProizvodstvoshatrov />
        {/* Software Feature Section */}
        <section className="w-full px-[50px] mt-[50px]">
          <div className="flex w-[1340px] items-center justify-between">
            <h2 className="w-[658px] font-semibold text-4xl leading-normal [font-family:'Raleway',Helvetica]">
              <span className="text-[#527dc5]">Проектируем </span>
              <span className="text-[#232c42]">
                все конструкции в самой крутой программе в РФ и СНГ
              </span>
            </h2>
            <Card className="rounded-[10px] bg-gradient-to-br from-[#243057] to-[#374255] border-none">
              <CardContent className="px-5 py-4">
                <div className="font-semibold text-white text-[55px] leading-normal [font-family:'Raleway',Helvetica]">
                  Dlubal RFEM + MPanel
                </div>
              </CardContent>
            </Card>
          </div>
          <img
            className="w-full h-[572px] mt-[50px] object-cover"
            alt="Software Example"
            src="/rectangle-95.png"
          />
        </section>



        {/* Advanced Equipment */}
        <SectionComponentNodeProizvodstvoshatrov />


        {/* Consulting, Quality Control, Final Models */}
        <Frame1Proizvodstvoshatrov />
        <OverlapGroupWrapperProizvodstvoshatrov />
        <Frame2Proizvodstvoshatrov />

        {/* Guarantees + Key Values */}
        <Frame3Proizvodstvoshatrov />

        {/* Company Team Section */}
        <Frame4Proizvodstvoshatrov />

        {/* Additional Gallery or CTA */}
        <img
          className="w-full h-[510px] object-cover"
          alt="Gallery"
          src="/rectangle-99.png"
        />

        {/* FAQ or Final CTA */}
        <Frame5Proizvodstvoshatrov />


        <div className="flex flex-col items-center bg-white min-h-screen w-full">
      <div className="w-full max-w-[1440px]">
        <div className="w-full rounded-[20px] [background:linear-gradient(180deg,rgba(245,246,255,1)_0%,rgba(232,232,232,0.31)_100%)]">
          <div className="w-full pt-[45px]">
            <FrameNew />
            <FrameWrapperNew />
          </div>
        </div>
      </div>
    </div>

    <Footer />

      </div>
    </main>
  );
};
