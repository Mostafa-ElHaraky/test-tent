import { DivSportAngary5 } from "./DivSportAngary5/DivSportAngary5";
import { DivWrapperSportAngary5 } from "./DivWrapperSportAngary5/DivWrapperSportAngary5";
import { FrameSportAngary5 } from "./FrameSportAngary5/FrameSportAngary5";
import { FrameWrapperSportAngary5 } from "./FrameWrapperSportAngary5/FrameWrapperSportAngary5";
import { GroupSportAngary5 } from "./GroupSportAngary5/GroupSportAngary5";
import { GroupWrapperSportAngary5 } from "./GroupWrapperSportAngary5/GroupWrapperSportAngary5";
import { OverlapGroupWrapperSportAngary5 } from "./OverlapGroupWrapperSportAngary5/OverlapGroupWrapperSportAngary5";
import { OverlapWrapperSportAngary5 } from "./OverlapWrapperSportAngary5/OverlapWrapperSportAngary5";

export const SportAngary5 = (): JSX.Element => {
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
        <GroupSportAngary5 />
        <FrameSportAngary5 />
        <OverlapWrapperSportAngary5 />
        <OverlapGroupWrapperSportAngary5 />
        <FrameWrapperSportAngary5 />
        <GroupWrapperSportAngary5 />
        <DivWrapperSportAngary5 />
        <DivSportAngary5 />
      </div>
  );
};
