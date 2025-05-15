import { DivSportPergoly5 } from "./DivSportPergoly5/DivSportPergoly5";
import { DivWrapperSportPergoly5 } from "./DivWrapperSportPergoly5/DivWrapperSportPergoly5";
import { FrameSportPergoly5 } from "./FrameSportPergoly5/FrameSportPergoly5";
import { FrameWrapperSportPergoly5 } from "./FrameWrapperSportPergoly5/FrameWrapperSportPergoly5";
import { GroupSportPergoly5 } from "./GroupSportPergoly5/GroupSportPergoly5";
import { GroupWrapperSportPergoly5 } from "./GroupWrapperSportPergoly5/GroupWrapperSportPergoly5";
import { OverlapGroupWrapperSportPergoly5 } from "./OverlapGroupWrapperSportPergoly5/OverlapGroupWrapperSportPergoly5";
import { OverlapWrapperSportPergoly5 } from "./OverlapWrapperSportPergoly5/OverlapWrapperSportPergoly5";

export const SportPergoly5 = (): JSX.Element => {
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
        <GroupSportPergoly5 />
        <FrameSportPergoly5 />
        <OverlapWrapperSportPergoly5 />
        <OverlapGroupWrapperSportPergoly5 />
        <FrameWrapperSportPergoly5 />
        <GroupWrapperSportPergoly5 />
        <DivWrapperSportPergoly5 />
        <DivSportPergoly5 />
      </div>
  );
};
