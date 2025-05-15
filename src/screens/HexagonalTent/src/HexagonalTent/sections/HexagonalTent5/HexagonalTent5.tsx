import { DivHexagonalTent5 } from "./DivHexagonalTent5/DivHexagonalTent5";
import { DivWrapperHexagonalTent5 } from "./DivWrapperHexagonalTent5/DivWrapperHexagonalTent5";
import { FrameHexagonalTent5 } from "./FrameHexagonalTent5/FrameHexagonalTent5";
import { FrameWrapperHexagonalTent5 } from "./FrameWrapperHexagonalTent5/FrameWrapperHexagonalTent5";
import { GroupHexagonalTent5 } from "./GroupHexagonalTent5/GroupHexagonalTent5";
import { GroupWrapperHexagonalTent5 } from "./GroupWrapperHexagonalTent5/GroupWrapperHexagonalTent5";
import { OverlapGroupWrapperHexagonalTent5 } from "./OverlapGroupWrapperHexagonalTent5/OverlapGroupWrapperHexagonalTent5";
import { OverlapWrapperHexagonalTent5 } from "./OverlapWrapperHexagonalTent5/OverlapWrapperHexagonalTent5";

export const HexagonalTent5 = (): JSX.Element => {
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
        <GroupHexagonalTent5 />
        <FrameHexagonalTent5 />
        <OverlapWrapperHexagonalTent5 />
        <OverlapGroupWrapperHexagonalTent5 />
        <FrameWrapperHexagonalTent5 />
        <GroupWrapperHexagonalTent5 />
        <DivWrapperHexagonalTent5 />
        <DivHexagonalTent5 />
      </div>
  );
};
