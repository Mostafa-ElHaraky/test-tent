import { DivSferaTent5 } from "./DivSferaTent5/DivSferaTent5";
import { DivWrapperSferaTent5 } from "./DivWrapperSferaTent5/DivWrapperSferaTent5";
import { FrameSferaTent5 } from "./FrameSferaTent5/FrameSferaTent5";
import { FrameWrapperSferaTent5 } from "./FrameWrapperSferaTent5/FrameWrapperSferaTent5";
import { GroupSferaTent5 } from "./GroupSferaTent5/GroupSferaTent5";
import { GroupWrapperSferaTent5 } from "./GroupWrapperSferaTent5/GroupWrapperSferaTent5";
import { OverlapGroupWrapperSferaTent5 } from "./OverlapGroupWrapperSferaTent5/OverlapGroupWrapperSferaTent5";
import { OverlapWrapperSferaTent5 } from "./OverlapWrapperSferaTent5/OverlapWrapperSferaTent5";

export const SferaTent5 = (): JSX.Element => {
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
        <GroupSferaTent5 />
        <FrameSferaTent5 />
        <OverlapWrapperSferaTent5 />
        <OverlapGroupWrapperSferaTent5 />
        <FrameWrapperSferaTent5 />
        <GroupWrapperSferaTent5 />
        <DivWrapperSferaTent5 />
        <DivSferaTent5 />
      </div>
  );
};
