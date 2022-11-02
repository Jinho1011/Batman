import { Grid } from "@mui/material";
import Block from "../../container/common/Block";
import Cam from "../../container/home/Cam";
import Log from "../../container/home/Log";
import Runway from "../../container/home/Runway";
import GraphBlock from "./Graph/GraphBlock";

const Home = () => {
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
          <Cam />
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
