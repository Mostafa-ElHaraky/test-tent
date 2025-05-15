import { DivDlyaZagorodnyh5 } from "./DivDlyaZagorodnyh5/DivDlyaZagorodnyh5";
import { DivWrapperDlyaZagorodnyh5 } from "./DivWrapperDlyaZagorodnyh5/DivWrapperDlyaZagorodnyh5";
import { FrameDlyaZagorodnyh5 } from "./FrameDlyaZagorodnyh5/FrameDlyaZagorodnyh5";
import { FrameWrapperDlyaZagorodnyh5 } from "./FrameWrapperDlyaZagorodnyh5/FrameWrapperDlyaZagorodnyh5";
import { GroupDlyaZagorodnyh5 } from "./GroupDlyaZagorodnyh5/GroupDlyaZagorodnyh5";
import { GroupWrapperDlyaZagorodnyh5 } from "./GroupWrapperDlyaZagorodnyh5/GroupWrapperDlyaZagorodnyh5";
import { OverlapGroupWrapperDlyaZagorodnyh5 } from "./OverlapGroupWrapperDlyaZagorodnyh5/OverlapGroupWrapperDlyaZagorodnyh5";
import { OverlapWrapperDlyaZagorodnyh5 } from "./OverlapWrapperDlyaZagorodnyh5/OverlapWrapperDlyaZagorodnyh5";

export const DlyaZagorodnyh5 = (): JSX.Element => {
  return (
<div 
  style={{ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '75px',
    padding: '60px 0',
    width: '1440px',
    margin: '1200px auto 0', /* Adds 100px top margin */
    background: '#FFFFFF',
    minHeight: '100vh',
  }}
>   
        <GroupDlyaZagorodnyh5 />
        <FrameDlyaZagorodnyh5 />
        <OverlapWrapperDlyaZagorodnyh5 />
        <OverlapGroupWrapperDlyaZagorodnyh5 />
        <FrameWrapperDlyaZagorodnyh5 />
        <GroupWrapperDlyaZagorodnyh5 />
        <DivWrapperDlyaZagorodnyh5 />
        <DivDlyaZagorodnyh5 />
      </div>
  );
};
