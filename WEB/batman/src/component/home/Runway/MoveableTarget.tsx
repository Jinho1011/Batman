import { useState } from "react";
import Moveable from "react-moveable";
import { ISector } from "..";

const MoveableTarget = ({
  target,
  sector,
}: {
  target: any;
  sector: ISector;
}) => {
  const [frame, setFrame] = useState({
    translate: [0, 0],
    // translate: [parseInt(sector.sector_x), parseInt(sector.sector_y)],
  });

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
    />
  );
};

export default MoveableTarget;
