import { Grid } from "@mui/material";
import Block from "../../container/common/Block";
import Log from "../../container/home/Log";
import { IAirstrip } from "../../hooks/useAirstrip";
import CCTV from "./CCTV";
import GraphBlock from "./Graph/GraphBlock";
import Runway from "./Runway";

const Home = () => {
  const airstrip: IAirstrip = {
    id: 0,
    name: "name",
    startZone: "startZone",
    endZone: "endZone",
    sectorList: [
      {
        id: 1,
        name: "A",
        camURL:
          "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov",
        x: "0",
        y: "0",
        airStripId: 0,
      },
      {
        id: 2,
        name: "B",
        camURL:
          "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
        x: "1",
        y: "0",
        airStripId: 0,
      },
      {
        id: 3,
        name: "C",
        camURL: "rtsp://freja.hiof.no:1935/rtplive/definst/hessdalen02.stream",
        x: "0",
        y: "0.5",
        airStripId: 0,
      },
      {
        id: 4,
        name: "D",
        camURL:
          "http://archive.org/download/SampleMpeg4_201307/sample_mpeg4.mp4",
        x: "1",
        y: "0.5",
        airStripId: 0,
      },
      {
        id: 5,
        name: "E",
        camURL:
          "http://assets.appcelerator.com.s3.amazonaws.com/video/media.m4v",
        x: "0",
        y: "1",
        airStripId: 0,
      },
      {
        id: 6,
        name: "F",
        camURL:
          "rtsp://freja.hiof.no:1935/rtplive/_definst_/hessdalen03.stream",
        x: "1",
        y: "1",
        airStripId: 0,
      },
    ],
  };

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
          <CCTV sectors={airstrip.sectorList} />
        </Block>
      </Grid>
      <Grid item xs={4}>
        <Block title="Runway">
          <Runway airstrip={airstrip} />
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
