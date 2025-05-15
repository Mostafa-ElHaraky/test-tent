import { DivAngary5 } from "./DivAngary5/DivAngary5";
import { DivWrapperAngary5 } from "./DivWrapperAngary5/DivWrapperAngary5";
import { FrameAngary5 } from "./FrameAngary5/FrameAngary5";
import { FrameWrapperAngary5 } from "./FrameWrapperAngary5/FrameWrapperAngary5";
import { GroupAngary5 } from "./GroupAngary5/GroupAngary5";
import { GroupWrapperAngary5 } from "./GroupWrapperAngary5/GroupWrapperAngary5";
import { OverlapGroupWrapperAngary5 } from "./OverlapGroupWrapperAngary5/OverlapGroupWrapperAngary5";
import { OverlapWrapperAngary5 } from "./OverlapWrapperAngary5/OverlapWrapperAngary5";

export const Angary5 = (): JSX.Element => {
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
        <GroupAngary5 />
        <FrameAngary5 />
        <OverlapWrapperAngary5 />
        <OverlapGroupWrapperAngary5 />
        <FrameWrapperAngary5 />
        <GroupWrapperAngary5 />
        <DivWrapperAngary5 />
        <DivAngary5 />
      </div>
  );
};
