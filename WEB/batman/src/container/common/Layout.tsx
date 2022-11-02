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
import Nav from "../../component/nav";

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
  return (
    <LayoutContainer>
      <Nav />
      <Box
        component="main"
        sx={{
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
  display: flex;
  min-height: 100%;
  overflow: hidden;
  background-color: #eeeeee;
`;

export default Layout;
