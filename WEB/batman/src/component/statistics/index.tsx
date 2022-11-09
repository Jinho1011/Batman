import { Grid } from "@mui/material";
import React from "react";
import Block from "../../container/common/Block";
import { useAirstrip } from "../../hooks/useAirstrip";
import { useLogByStrip, useLogInWeek } from "../../hooks/useLog";
import WeekStatistic from "../home/Graph/Statistics";
import Loading from "../home/Loading";
import AverageBySector from "./AverageBySector";
import Statistic from "./Statistic";

const Statistics = () => {
  const logInWeekQuery = useLogInWeek();
  const airstripQuery = useAirstrip(1);
  const logByAirstripQuery = useLogByStrip(1);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "20px",
      }}
    >
      <Grid item xs={6}>
        <Block title="요일별 출현횟수">
          {logInWeekQuery.data ? (
            <WeekStatistic data={logInWeekQuery.data} />
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
      <Grid item xs={6}>
        <Block title="한시간 별로 발생한 오늘 출현 횟수">
          {logByAirstripQuery.data ? (
            <Statistic
              label="한시간 별로 발생한 오늘 출현 횟수"
              labels={[...Array(24).keys()].map((i) => String(i + 1))}
              data={[...Array(24).keys()]
                .map((i) => String(i + 1))
                .map((t) => {
                  return logByAirstripQuery.data.result.filter(
                    (d) => Number(t) === new Date(d.logDate).getHours()
                  ).length;
                })}
            />
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
      <Grid item xs={12}>
        <Block title="시간대별 평균 출현 횟수">
          {airstripQuery.data ? (
            <AverageBySector data={airstripQuery.data} />
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
    </Grid>
  );
};

export default Statistics;
