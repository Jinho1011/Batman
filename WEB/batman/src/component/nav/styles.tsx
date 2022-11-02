import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  min-width: 200px;
  border-right: 1px solid #dedede;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: auto;
`;

const MenuContainer = styled.div``;

const MenuText = styled.span``;

const MenuButton = styled.div<{ current: boolean }>`
  background-color: ${(props) => (props.current ? "#000" : "#fff")};

  ${MenuText} {
    color: ${(props) => (props.current ? "#000" : "#fff")};
  }
`;

export { NavContainer, LogoContainer, MenuContainer, MenuButton, MenuText };
