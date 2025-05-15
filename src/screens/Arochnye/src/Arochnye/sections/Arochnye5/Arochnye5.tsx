import { DivArochnye5 } from "./DivArochnye5/DivArochnye5";
import { DivWrapperArochnye5 } from "./DivWrapperArochnye5/DivWrapperArochnye5";
import { FrameArochnye5 } from "./FrameArochnye5/FrameArochnye5";
import { FrameWrapperArochnye5 } from "./FrameWrapperArochnye5/FrameWrapperArochnye5";
import { GroupArochnye5 } from "./GroupArochnye5/GroupArochnye5";
import { GroupWrapperArochnye5 } from "./GroupWrapperArochnye5/GroupWrapperArochnye5";
import { OverlapGroupWrapperArochnye5 } from "./OverlapGroupWrapperArochnye5/OverlapGroupWrapperArochnye5";
import { OverlapWrapperArochnye5 } from "./OverlapWrapperArochnye5/OverlapWrapperArochnye5";

export const Arochnye5 = (): JSX.Element => {
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
        <GroupArochnye5 />
        <FrameArochnye5 />
        <OverlapWrapperArochnye5 />
        <OverlapGroupWrapperArochnye5 />
        <FrameWrapperArochnye5 />
        <GroupWrapperArochnye5 />
        <DivWrapperArochnye5 />
        <DivArochnye5 />
      </div>
  );
};
