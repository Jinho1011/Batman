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

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuText = styled.span``;

const MenuButton = styled.div<{ current: boolean }>`
  padding: 8px 10px;
  border-radius: 4px;
  background-color: ${(props) => (props.current ? "#D9D9D9" : "none")};
  cursor: pointer;

  ${MenuText} {
    font-weight: ${(props) => (props.current ? 600 : 400)};
    color: ${(props) => (props.current ? "#585858" : "#979797")};
  }
`;

export { NavContainer, LogoContainer, MenuContainer, MenuButton, MenuText };
