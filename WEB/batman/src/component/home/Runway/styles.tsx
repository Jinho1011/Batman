import styled from "styled-components";

const RunwayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ButtonsContainer = styled.div``;

const Button = styled.button<{ color: string }>``;

const AirStripContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 100%;
  padding: 10px 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #293046;
`;

const AirStripZone = styled.span<{ strong: boolean }>`
  font-weight: ${(props) => (props.strong ? 800 : 400)};
  font-size: 12px;
  line-height: 9px;
  color: #ffffff;
`;

const MoveableContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
`;

const TargetContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  border-radius: 50%;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export {
  RunwayContainer,
  ButtonsContainer,
  Button,
  AirStripContainer,
  AirStripZone,
  MoveableContainer,
  TargetContainer,
};
