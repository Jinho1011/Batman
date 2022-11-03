import { Grid } from "@mui/material";
import Block from "../../container/common/Block";
import Log from "../../container/home/Log";
import Runway from "../../container/home/Runway";
import StreamedianPlayer from "../stream/StreamedianPlayer";
import CCTV from "./CCTV";
import GraphBlock from "./Graph/GraphBlock";

const Home = () => {
  const sectors = [
    {
      sector_id: 1,
      sector_name: "A",
      sector_cam_url:
        "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
      sector_x: "0",
      sector_y: "0",
    },
    {
      sector_id: 2,
      sector_name: "B",
      sector_cam_url:
        "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
      sector_x: "1",
      sector_y: "0",
    },
    {
      sector_id: 3,
      sector_name: "C",
      sector_cam_url:
        "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
      sector_x: "0",
      sector_y: "0.5",
    },
    {
      sector_id: 4,
      sector_name: "D",
      sector_cam_url:
        "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
      sector_x: "1",
      sector_y: "0.5",
    },
    {
      sector_id: 5,
      sector_name: "E",
      sector_cam_url:
        "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
      sector_x: "0",
      sector_y: "1",
    },
    {
      sector_id: 6,
      sector_name: "F",
      sector_cam_url:
        "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
      sector_x: "1",
      sector_y: "1",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "20px",
      }}
    >
      <Grid item xs={8}>
        <Block>
          <CCTV sectors={sectors} />
        </Block>
      </Grid>
      <Grid item xs={4}>
        <Block>
          <Runway />
        </Block>
      </Grid>
      <Grid item xs={4}>
        <Block>
          <GraphBlock />
        </Block>
      </Grid>
      <Grid item xs={8}>
        <Block>
          <Log />
        </Block>
      </Grid>
    </Grid>
  );
};

export default Home;
