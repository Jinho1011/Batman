import { Grid } from "@mui/material";
import Block from "../../container/common/Block";
import Log from "../../container/home/Log";
import { useAirstrip } from "../../hooks/useAirstrip";
import { useLogByStrip, useLogInWeek } from "../../hooks/useLog";
import CCTV from "./CCTV";
import WeekStatistic from "./Graph/Statistics";
import Loading from "./Loading";
import Runway from "./Runway";

const Home = () => {
  const airstripQuery = useAirstrip(1);
  const logInWeekQuery = useLogInWeek();
  const logByAirstripQuery = useLogByStrip({
    id: 1,
    options: {
      refetchInterval: 1000,
    },
  });

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
          {logInWeekQuery.data ? (
            <WeekStatistic data={logInWeekQuery.data} />
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
      <Grid item xs={8}>
        <Block title="Recent Logs">
          {logByAirstripQuery.data ? (
            <Log data={logByAirstripQuery.data} />
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
    </Grid>
  );
};

export default Home;
