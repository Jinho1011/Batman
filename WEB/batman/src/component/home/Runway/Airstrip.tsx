import { AirStripContainer, AirStripZone } from "./styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface IAirStrip {
  startZone: string;
  endZone: string;
  flipped: boolean;
}

const Airstrip = ({ startZone, endZone, flipped }: IAirStrip) => {
  return (
    <AirStripContainer>
      <AirStripZone strong={flipped}>{endZone}</AirStripZone>
      <ArrowUpwardIcon
        style={{
          color: "white",
          transform: `rotate(${flipped ? "180deg" : "0"})`,
        }}
      />
      <AirStripZone strong={!flipped}>{startZone}</AirStripZone>
    </AirStripContainer>
  );
};

export default Airstrip;
