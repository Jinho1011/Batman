import { Box, Button, Drawer, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Logo } from "../../public/assets/logo.svg";

import {
  LogoContainer,
  MenuButton,
  MenuContainer,
  MenuText,
  NavContainer,
} from "./styles";

const Nav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuContainer>
        <MenuButton current={true}>
          <MenuText>Dashboard</MenuText>
        </MenuButton>
        <MenuButton current={false}>
          <MenuText>Statistics</MenuText>
        </MenuButton>
      </MenuContainer>
    </NavContainer>
  );
};

export default Nav;
