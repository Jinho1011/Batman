import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Block from "../../container/common/Block";
import Log from "../../container/home/Log";
import { useAirstrip } from "../../hooks/useAirstrip";
import { ILog, useLogByStrip, useLogInWeek } from "../../hooks/useLog";
import toast, { Toaster } from "react-hot-toast";
import CCTV from "./CCTV";
import WeekStatistic from "./Graph/Statistics";
import Loading from "./Loading";
import Runway from "./Runway";

const Home = () => {
  const [refetch, setRefetch] = useState(true);
  const airstripQuery = useAirstrip(1);
  const logInWeekQuery = useLogInWeek();
  const [lastCriticalLog, setLastCriticalLog] = useState<ILog | null>(null);
  const logByAirstripQuery = useLogByStrip({
    id: 1,
    size: 1000,
    options: {
      refetchInterval: refetch ? 1000 : false,
    },
  });

  useEffect(() => {
    if (
      logByAirstripQuery.data &&
      logByAirstripQuery.data.result[0].isCritical &&
      (!lastCriticalLog ||
        lastCriticalLog.id !== logByAirstripQuery.data.result[0].id)
    ) {
      toast.error("Bird Alert");
      setLastCriticalLog(logByAirstripQuery.data.result[0]);
    }
  }, [logByAirstripQuery]);

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
            <Runway airstrip={airstripQuery.data} setRefetch={setRefetch} />
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
      <Toaster />
    </Grid>
  );
};

export default Home;
