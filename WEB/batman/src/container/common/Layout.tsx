import styled from "styled-components";

import HeaderContainer from "./HeaderContainer";

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const ChildrenWrapper = styled.div`
  flex: 1;

  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <HeaderContainer />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </LayoutContainer>
  );
};

export default Layout;
