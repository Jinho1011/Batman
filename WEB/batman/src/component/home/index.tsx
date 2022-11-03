import { Grid } from "@mui/material";
import Block from "../../container/common/Block";
import Log from "../../container/home/Log";
import CCTV from "./CCTV";
import GraphBlock from "./Graph/GraphBlock";
import Runway from "./Runway";

const Home = () => {
  const sectors = [
    {
      sector_id: 1,
      sector_name: "A",
      sector_cam_url:
        "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov",
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
        "rtsp://freja.hiof.no:1935/rtplive/definst/hessdalen02.stream",
      sector_x: "0",
      sector_y: "0.5",
    },
    {
      sector_id: 4,
      sector_name: "D",
      sector_cam_url:
        "http://archive.org/download/SampleMpeg4_201307/sample_mpeg4.mp4",
      sector_x: "1",
      sector_y: "0.5",
    },
    {
      sector_id: 5,
      sector_name: "E",
      sector_cam_url:
        "http://assets.appcelerator.com.s3.amazonaws.com/video/media.m4v",
      sector_x: "0",
      sector_y: "1",
    },
    {
      sector_id: 6,
      sector_name: "F",
      sector_cam_url:
        "rtsp://freja.hiof.no:1935/rtplive/_definst_/hessdalen03.stream",
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
        <Block title="CCTV">
          <CCTV sectors={sectors} />
        </Block>
      </Grid>
      <Grid item xs={4}>
        <Block title="Runway">
          <Runway />
        </Block>
      </Grid>
      <Grid item xs={4}>
        <Block title="Statistics">
          <GraphBlock />
        </Block>
      </Grid>
      <Grid item xs={8}>
        <Block title="Recent Logs">
          <Log />
        </Block>
      </Grid>
    </Grid>
  );
};

export default Home;
