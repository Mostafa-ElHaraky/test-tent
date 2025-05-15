import { DivShatry5 } from "./DivShatry5/DivShatry5";
import { DivWrapperShatry5 } from "./DivWrapperShatry5/DivWrapperShatry5";
import { FrameShatry5 } from "./FrameShatry5/FrameShatry5";
import { FrameWrapperShatry5 } from "./FrameWrapperShatry5/FrameWrapperShatry5";
import { GroupShatry5 } from "./GroupShatry5/GroupShatry5";
import { GroupWrapperShatry5 } from "./GroupWrapperShatry5/GroupWrapperShatry5";
import { OverlapGroupWrapperShatry5 } from "./OverlapGroupWrapperShatry5/OverlapGroupWrapperShatry5";
import { OverlapWrapperShatry5 } from "./OverlapWrapperShatry5/OverlapWrapperShatry5";

export const Shatry5 = (): JSX.Element => {
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
        <GroupShatry5 />
        <FrameShatry5 />
        <OverlapWrapperShatry5 />
        <OverlapGroupWrapperShatry5 />
        <FrameWrapperShatry5 />
        <GroupWrapperShatry5 />
        <DivWrapperShatry5 />
        <DivShatry5 />
      </div>
  );
};
