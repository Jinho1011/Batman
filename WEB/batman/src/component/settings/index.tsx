import { Grid } from "@mui/material";
import React from "react";
import Block from "../../container/common/Block";
import { useAirstrip } from "../../hooks/useAirstrip";
import Loading from "../home/Loading";
import UpdateAirstrip from "./UpdateAirstrip";
import UpdateSectors from "./UpdateSectors";

const Settings = () => {
  const airstripQuery = useAirstrip(1);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "20px",
      }}
    >
      <Grid item xs={4}>
        <Block title="활주로 수정">
          {airstripQuery.data ? (
            <UpdateAirstrip data={airstripQuery.data} />
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
      <Grid item xs={4}>
        <Block title="섹터 수정">
          <UpdateSectors />
        </Block>
      </Grid>
    </Grid>
  );
};

export default Settings;
