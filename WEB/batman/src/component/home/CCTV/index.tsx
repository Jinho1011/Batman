import { Grid } from "@mui/material";
import React from "react";
import StreamedianPlayer from "../../stream/StreamedianPlayer";

interface ISector {
  sector_id: number;
  sector_name: string;
  sector_cam_url: string;
  sector_x: string;
  sector_y: string;
}

const Sector = ({ sector }: { sector: ISector }) => {
  return (
    <Grid item xs={4}>
      <StreamedianPlayer
        id={sector.sector_name}
        src="rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4"
      />
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
