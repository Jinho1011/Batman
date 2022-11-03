import { Grid } from "@mui/material";
import { SectorFrame, SectorFrameContainer } from "./styles";

interface ISector {
  sector_id: number;
  sector_name: string;
  sector_cam_url: string;
  sector_x: string;
  sector_y: string;
}

const Sector = ({ sector }: { sector: ISector }) => {
  const SCREEN_WIDTH = window.innerWidth;
  const SECTOR_WIDTH = (SCREEN_WIDTH * 2 - 600) / 9;

  return (
    <Grid item xs={4}>
      <SectorFrameContainer>
        <SectorFrame
          ratio={SECTOR_WIDTH / 1280}
          src="http://117.16.136.172:5000/video_feed"
          frameBorder="0"
          allowFullScreen
        />
      </SectorFrameContainer>
    </Grid>
  );
};

const CCTV = ({ sectors }: { sectors: ISector[] }) => {
  return (
    <Grid container spacing={0}>
      {sectors.map((sector) => (
        <Sector sector={sector} key={sector.sector_id} />
      ))}
    </Grid>
  );
};

export default CCTV;