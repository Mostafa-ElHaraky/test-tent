import { DivDlyaSport5 } from "./DivDlyaSport5/DivDlyaSport5";
import { DivWrapperDlyaSport5 } from "./DivWrapperDlyaSport5/DivWrapperDlyaSport5";
import { FrameDlyaSport5 } from "./FrameDlyaSport5/FrameDlyaSport5";
import { FrameWrapperDlyaSport5 } from "./FrameWrapperDlyaSport5/FrameWrapperDlyaSport5";
import { GroupDlyaSport5 } from "./GroupDlyaSport5/GroupDlyaSport5";
import { GroupWrapperDlyaSport5 } from "./GroupWrapperDlyaSport5/GroupWrapperDlyaSport5";
import { OverlapGroupWrapperDlyaSport5 } from "./OverlapGroupWrapperDlyaSport5/OverlapGroupWrapperDlyaSport5";
import { OverlapWrapperDlyaSport5 } from "./OverlapWrapperDlyaSport5/OverlapWrapperDlyaSport5";

export const DlyaSport5 = (): JSX.Element => {
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
        <GroupDlyaSport5 />
        <FrameDlyaSport5 />
        <OverlapWrapperDlyaSport5 />
        <OverlapGroupWrapperDlyaSport5 />
        <FrameWrapperDlyaSport5 />
        <GroupWrapperDlyaSport5 />
        <DivWrapperDlyaSport5 />
        <DivDlyaSport5 />
      </div>
  );
};
