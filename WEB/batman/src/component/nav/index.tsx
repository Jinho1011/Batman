import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../public/assets/logo.svg";
import {
  LogoContainer,
  MenuButton,
  MenuContainer,
  MenuText,
  NavContainer,
} from "./styles";

const Nav = () => {
  const navigation = useLocation();
  const history = useHistory();

  const routes = [
    {
      path: "/",
      name: "Dashboard",
    },
    {
      path: "/statistics",
      name: "Statistics",
    },
    {
      path: "/settings",
      name: "Settings",
    },
  ];

  return (
    <NavContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuContainer>
        {routes.map((route) => {
          return (
            <MenuButton
              key={route.path}
              onClick={() => history.push(route.path)}
              current={navigation.pathname === route.path}
            >
              <MenuText>{route.name}</MenuText>
            </MenuButton>
          );
        })}
      </MenuContainer>
    </NavContainer>
  );
};

export default Nav;
