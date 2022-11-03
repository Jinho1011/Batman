import styled from "styled-components";

const SectorFrameContainer = styled.div`
  position: relative;
  padding: 0;
  overflow: hidden;
  padding-top: 56.25%;
`;

/**
 * 1280 x 720
 * W x W/1.7777
 */
const SectorFrame = styled.iframe<{ ratio: number }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 1280px;
  height: 720px;

  -ms-transform: ${(props) => `scale(${props.ratio})`};
  -moz-transform: ${(props) => `scale(${props.ratio})`};
  -o-transform: ${(props) => `scale(${props.ratio})`};
  -webkit-transform: ${(props) => `scale(${props.ratio})`};
  transform: ${(props) => `scale(${props.ratio})`};

  -ms-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
`;

export { SectorFrameContainer, SectorFrame };
