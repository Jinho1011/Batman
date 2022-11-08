import { useRef, useEffect } from "react";
import { ISector } from "..";
import { TargetContainer } from "./styles";

const Target = ({
  sector,
  setTargetRefs,
  containerSize,
}: {
  sector: ISector;
  setTargetRefs: React.Dispatch<React.SetStateAction<any[]>>;
  containerSize: { width: number; height: number };
}) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      setTargetRefs((prev) => [...prev, targetRef]);
    }
  }, [targetRef]);

  return (
    <TargetContainer
      ref={targetRef}
      className={`target ${sector.name}`}
      style={{
        transform: `translate(${
          Number(sector.x) * (containerSize.width - 30)
        }px, ${Number(sector.y) * (containerSize.height - 30)}px)`,
      }}
    >
      {sector.name}
    </TargetContainer>
  );
};

export default Target;
