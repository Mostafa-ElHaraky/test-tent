import { DivMembrannye5 } from "./DivMembrannye5/DivMembrannye5";
import { DivWrapperMembrannye5 } from "./DivWrapperMembrannye5/DivWrapperMembrannye5";
import { FrameMembrannye5 } from "./FrameMembrannye5/FrameMembrannye5";
import { FrameWrapperMembrannye5 } from "./FrameWrapperMembrannye5/FrameWrapperMembrannye5";
import { GroupMembrannye5 } from "./GroupMembrannye5/GroupMembrannye5";
import { GroupWrapperMembrannye5 } from "./GroupWrapperMembrannye5/GroupWrapperMembrannye5";
import { OverlapGroupWrapperMembrannye5 } from "./OverlapGroupWrapperMembrannye5/OverlapGroupWrapperMembrannye5";
import { OverlapWrapperMembrannye5 } from "./OverlapWrapperMembrannye5/OverlapWrapperMembrannye5";

export const Membrannye5 = (): JSX.Element => {
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
        <GroupMembrannye5 />
        <FrameMembrannye5 />
        <OverlapWrapperMembrannye5 />
        <OverlapGroupWrapperMembrannye5 />
        <FrameWrapperMembrannye5 />
        <GroupWrapperMembrannye5 />
        <DivWrapperMembrannye5 />
        <DivMembrannye5 />
      </div>
  );
};
