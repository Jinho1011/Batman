import { useEffect, useState } from "react";
import Moveable from "react-moveable";
import { ISector } from "..";
import useDidMountEffect from "../../../hooks/useDidMountEffect";

const MoveableTarget = ({
  target,
  sector,
  containerSize,
}: {
  target: any;
  sector: ISector;
  containerSize: { width: number; height: number };
}) => {
  const [coord, setCoord] = useState({
    x: Number(sector.x),
    y: Number(sector.y),
  });
  const frame = {
    translate: [0, 0],
  };

  useDidMountEffect(() => {
    // mutate airstrips
    console.log(coord);
  }, [coord]);

  return (
    <Moveable
      target={target.current}
      draggable={true}
      snappable={true}
      bounds={{ position: "css", left: 0, right: 0, top: 0, bottom: 0 }}
      throttleDrag={0}
      zoom={0}
      origin={true}
      padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
      onDragOriginStart={(e) => {
        console.log(e);
        e.dragStart && e.dragStart.set(frame.translate);
      }}
      onDragOrigin={(e) => {
        frame.translate = e.drag.beforeTranslate;
      }}
      onDrag={(e) => {
        frame.translate = e.beforeTranslate;
      }}
      onRender={(e) => {
        const { translate } = frame;
        e.target.style.transform = `translate(${translate[0]}px, ${translate[1]}px)`;
      }}
      onDragEnd={(e) => {
        const xDistance = e.lastEvent.beforeDist[0];
        const yDistance = e.lastEvent.beforeDist[1];
        const xRatio = xDistance / (containerSize.width - 30);
        const yRatio = yDistance / (containerSize.height - 30);
        setCoord((prev) => ({
          x: Number(prev.x) + xRatio,
          y: Number(prev.y) + yRatio,
        }));
      }}
    />
  );
};

export default MoveableTarget;
