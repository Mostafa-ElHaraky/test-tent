import { DivClasicTent5 } from "./DivClasicTent5/DivClasicTent5";
import { DivWrapperClasicTent5 } from "./DivWrapperClasicTent5/DivWrapperClasicTent5";
import { FrameClasicTent5 } from "./FrameClasicTent5/FrameClasicTent5";
import { FrameWrapperClasicTent5 } from "./FrameWrapperClasicTent5/FrameWrapperClasicTent5";
import { GroupClasicTent5 } from "./GroupClasicTent5/GroupClasicTent5";
import { GroupWrapperClasicTent5 } from "./GroupWrapperClasicTent5/GroupWrapperClasicTent5";
import { OverlapGroupWrapperClasicTent5 } from "./OverlapGroupWrapperClasicTent5/OverlapGroupWrapperClasicTent5";
import { OverlapWrapperClasicTent5 } from "./OverlapWrapperClasicTent5/OverlapWrapperClasicTent5";

export const ClasicTent5 = (): JSX.Element => {
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
        <GroupClasicTent5 />
        <FrameClasicTent5 />
        <OverlapWrapperClasicTent5 />
        <OverlapGroupWrapperClasicTent5 />
        <FrameWrapperClasicTent5 />
        <GroupWrapperClasicTent5 />
        <DivWrapperClasicTent5 />
        <DivClasicTent5 />
      </div>
  );
};
