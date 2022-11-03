import React from "react";
import styled from "styled-components";

const BlockContainer = styled.div`
  background: #ffffff;
  border-radius: 6px;
  padding: 20px;
  height: 400px;
`;

const Block = ({ children }: { children: React.ReactNode }) => {
  return <BlockContainer>{children}</BlockContainer>;
};

export default Block;
