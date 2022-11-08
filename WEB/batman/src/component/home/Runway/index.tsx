import React, { useEffect, useRef, useState } from "react";
import { IAirstrip } from "../../../hooks/useAirstrip";
import Airstrip from "./Airstrip";
import MoveableTarget from "./MoveableTarget";
import {
  Button,
  ButtonsContainer,
  MoveableContainer,
  RunwayContainer,
} from "./styles";
import Target from "./Target";

const Runway = ({ airstrip }: { airstrip: IAirstrip }) => {
  const [targetRefs, setTargetRefs] = useState<any[]>([]);
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });
  const [flipped, setFlipped] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });
    }
  }, [containerRef]);

  return (
    <RunwayContainer className="runway__container">
      <MoveableContainer ref={containerRef} className="moveable__container">
        <Airstrip
          startZone={airstrip.startZone}
          endZone={airstrip.endZone}
          flipped={flipped}
        />
        {airstrip.sectorList.map((sector) => (
          <Target
            sector={sector}
            setTargetRefs={setTargetRefs}
            containerSize={containerSize}
            key={sector.id}
          />
        ))}
        {targetRefs.map((target, idx) => (
          <MoveableTarget
            target={target}
            sector={airstrip.sectorList[idx]}
            containerSize={containerSize}
            key={idx}
          />
        ))}
      </MoveableContainer>
      <ButtonsContainer>
        <Button color="#2499EF">Start</Button>
        <Button color="#293046" onClick={() => setFlipped(!flipped)}>
          Flip
        </Button>
        <Button color="#FF9777">Pause</Button>
      </ButtonsContainer>
    </RunwayContainer>
  );
};

export default Runway;
