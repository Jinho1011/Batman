import { Grid } from "@mui/material";
import Block from "../../container/common/Block";
import Log from "../../container/home/Log";
import { IAirstrip, useAirstrip } from "../../hooks/useAirstrip";
import CCTV from "./CCTV";
import GraphBlock from "./Graph/GraphBlock";
import Loading from "./Loading";
import Runway from "./Runway";

const Home = () => {
  const airstripQuery = useAirstrip(1);

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
          {airstripQuery.data ? (
            <CCTV sectors={airstripQuery.data.sectorList} />
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
      <Grid item xs={4}>
        <Block title="Runway">
          {airstripQuery.data ? (
            <Runway airstrip={airstripQuery.data} />
          ) : (
            <Loading />
          )}
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
