import { DivMobilnye5 } from "./DivMobilnye5/DivMobilnye5";
import { DivWrapperMobilnye5 } from "./DivWrapperMobilnye5/DivWrapperMobilnye5";
import { FrameMobilnye5 } from "./FrameMobilnye5/FrameMobilnye5";
import { FrameWrapperMobilnye5 } from "./FrameWrapperMobilnye5/FrameWrapperMobilnye5";
import { GroupMobilnye5 } from "./GroupMobilnye5/GroupMobilnye5";
import { GroupWrapperMobilnye5 } from "./GroupWrapperMobilnye5/GroupWrapperMobilnye5";
import { OverlapGroupWrapperMobilnye5 } from "./OverlapGroupWrapperMobilnye5/OverlapGroupWrapperMobilnye5";
import { OverlapWrapperMobilnye5 } from "./OverlapWrapperMobilnye5/OverlapWrapperMobilnye5";

export const Mobilnye5 = (): JSX.Element => {
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
        <GroupMobilnye5 />
        <FrameMobilnye5 />
        <OverlapWrapperMobilnye5 />
        <OverlapGroupWrapperMobilnye5 />
        <FrameWrapperMobilnye5 />
        <GroupWrapperMobilnye5 />
        <DivWrapperMobilnye5 />
        <DivMobilnye5 />
      </div>
  );
};
