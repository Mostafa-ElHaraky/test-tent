import { DivDlyaTorgestva5 } from "./DivDlyaTorgestva5/DivDlyaTorgestva5";
import { DivWrapperDlyaTorgestva5 } from "./DivWrapperDlyaTorgestva5/DivWrapperDlyaTorgestva5";
import { FrameDlyaTorgestva5 } from "./FrameDlyaTorgestva5/FrameDlyaTorgestva5";
import { FrameWrapperDlyaTorgestva5 } from "./FrameWrapperDlyaTorgestva5/FrameWrapperDlyaTorgestva5";
import { GroupDlyaTorgestva5 } from "./GroupDlyaTorgestva5/GroupDlyaTorgestva5";
import { GroupWrapperDlyaTorgestva5 } from "./GroupWrapperDlyaTorgestva5/GroupWrapperDlyaTorgestva5";
import { OverlapGroupWrapperDlyaTorgestva5 } from "./OverlapGroupWrapperDlyaTorgestva5/OverlapGroupWrapperDlyaTorgestva5";
import { OverlapWrapperDlyaTorgestva5 } from "./OverlapWrapperDlyaTorgestva5/OverlapWrapperDlyaTorgestva5";

export const DlyaTorgestva5 = (): JSX.Element => {
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
        <GroupDlyaTorgestva5 />
        <FrameDlyaTorgestva5 />
        <OverlapWrapperDlyaTorgestva5 />
        <OverlapGroupWrapperDlyaTorgestva5 />
        <FrameWrapperDlyaTorgestva5 />
        <GroupWrapperDlyaTorgestva5 />
        <DivWrapperDlyaTorgestva5 />
        <DivDlyaTorgestva5 />
      </div>
  );
};
