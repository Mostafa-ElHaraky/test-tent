import { DivDlyaVremennyh5 } from "./DivDlyaVremennyh5/DivDlyaVremennyh5";
import { DivWrapperDlyaVremennyh5 } from "./DivWrapperDlyaVremennyh5/DivWrapperDlyaVremennyh5";
import { FrameDlyaVremennyh5 } from "./FrameDlyaVremennyh5/FrameDlyaVremennyh5";
import { FrameWrapperDlyaVremennyh5 } from "./FrameWrapperDlyaVremennyh5/FrameWrapperDlyaVremennyh5";
import { GroupDlyaVremennyh5 } from "./GroupDlyaVremennyh5/GroupDlyaVremennyh5";
import { GroupWrapperDlyaVremennyh5 } from "./GroupWrapperDlyaVremennyh5/GroupWrapperDlyaVremennyh5";
import { OverlapGroupWrapperDlyaVremennyh5 } from "./OverlapGroupWrapperDlyaVremennyh5/OverlapGroupWrapperDlyaVremennyh5";
import { OverlapWrapperDlyaVremennyh5 } from "./OverlapWrapperDlyaVremennyh5/OverlapWrapperDlyaVremennyh5";

export const DlyaVremennyh5 = (): JSX.Element => {
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
        <GroupDlyaVremennyh5 />
        <FrameDlyaVremennyh5 />
        <OverlapWrapperDlyaVremennyh5 />
        <OverlapGroupWrapperDlyaVremennyh5 />
        <FrameWrapperDlyaVremennyh5 />
        <GroupWrapperDlyaVremennyh5 />
        <DivWrapperDlyaVremennyh5 />
        <DivDlyaVremennyh5 />
      </div>
  );
};
