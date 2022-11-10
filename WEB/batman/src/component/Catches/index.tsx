import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Block from "../../container/common/Block";
import { useLogByStrip } from "../../hooks/useLog";
import Loading from "../home/Loading";

const Catches = () => {
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
      <Grid item xs={16}>
        <Block title="Recent Catches">
          {logByAirstripQuery.data ? (
            <ImageList
              sx={{ width: "100%", height: "80vh" }}
              cols={3}
              //   rowHeight={164}
            >
              {logByAirstripQuery.data.result.map((item) => (
                <ImageListItem key={item.id}>
                  <img src={item.captureURL} alt={item.result} loading="lazy" />
                  <ImageListItemBar
                    title={item.id}
                    subtitle={<span>{item.logDate}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          ) : (
            <Loading />
          )}
        </Block>
      </Grid>
    </Grid>
  );
};

export default Catches;
