import { Grid } from "@mui/material";
import React from "react";
import Block from "../../container/common/Block";
import { useAirstrip } from "../../hooks/useAirstrip";
import { useResponder } from "../../hooks/useResponder";
import Loading from "../home/Loading";
import CreateResponder from "./CreateResponder";
import Responders from "./Responders";
import UpdateAirstrip from "./UpdateAirstrip";
import UpdateSectors from "./UpdateSectors";

const Settings = () => {
  const airstripQuery = useAirstrip(1);
  const respondersQuery = useResponder(1);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "20px",
      }}
    >
      <Grid item xs={6}>
        <Block title="활주로 수정">
          {airstripQuery.data ? (
            <UpdateAirstrip data={airstripQuery.data} />
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
      <Grid item xs={6}>
        <Block title="섹터 수정">
          {airstripQuery.data ? (
            <UpdateSectors sectors={airstripQuery.data.sectorList} />
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
      <Grid item xs={8}>
        <Block title="비상 연락망 조회">
          {respondersQuery.data ? (
            <Responders responders={respondersQuery.data} />
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
      <Grid item xs={4}>
        <Block title="비상 연락망 추가">
          <CreateResponder />
        </Block>
      </Grid>
    </Grid>
  );
};

export default Settings;
