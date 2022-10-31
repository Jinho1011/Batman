import {
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const mainListItems = (
  <>
    <ListItemButton>
      {/* <ListItemIcon><DashboardIcon /></ListItemIcon> */}
      <ListItemText primary="홈" />
    </ListItemButton>
    <ListItemButton>
      {/* <ListItemIcon><ShoppingCartIcon /></ListItemIcon> */}
      <ListItemText primary="통계실" />
    </ListItemButton>
    <ListItemButton>
      {/* <ListItemIcon><PeopleIcon /></ListItemIcon> */}
      <ListItemText primary="상황실" />
    </ListItemButton>
    <ListItemButton>
      {/* <ListItemIcon><BarChartIcon /></ListItemIcon> */}
      <ListItemText primary="통제실" />
    </ListItemButton>
  </>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <LayoutContainer>
      <AppBar position="absolute" sx={{ bgcolor: theme.palette.grey[900] }}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Batman
          </Typography>
          <IconButton color="inherit">
            {/* <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          {/* <IconButton>
              <ChevronLeftIcon />
            </IconButton> */}
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {/* {secondaryListItems} */}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Layout;
