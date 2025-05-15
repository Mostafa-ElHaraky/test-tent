import { DivTuristicheskie5 } from "./DivTuristicheskie5/DivTuristicheskie5";
import { DivWrapperTuristicheskie5 } from "./DivWrapperTuristicheskie5/DivWrapperTuristicheskie5";
import { FrameTuristicheskie5 } from "./FrameTuristicheskie5/FrameTuristicheskie5";
import { FrameWrapperTuristicheskie5 } from "./FrameWrapperTuristicheskie5/FrameWrapperTuristicheskie5";
import { GroupTuristicheskie5 } from "./GroupTuristicheskie5/GroupTuristicheskie5";
import { GroupWrapperTuristicheskie5 } from "./GroupWrapperTuristicheskie5/GroupWrapperTuristicheskie5";
import { OverlapGroupWrapperTuristicheskie5 } from "./OverlapGroupWrapperTuristicheskie5/OverlapGroupWrapperTuristicheskie5";
import { OverlapWrapperTuristicheskie5 } from "./OverlapWrapperTuristicheskie5/OverlapWrapperTuristicheskie5";

export const Turisticheskie5 = (): JSX.Element => {
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
        <GroupTuristicheskie5 />
        <FrameTuristicheskie5 />
        <OverlapWrapperTuristicheskie5 />
        <OverlapGroupWrapperTuristicheskie5 />
        <FrameWrapperTuristicheskie5 />
        <GroupWrapperTuristicheskie5 />
        <DivWrapperTuristicheskie5 />
        <DivTuristicheskie5 />
      </div>
  );
};
