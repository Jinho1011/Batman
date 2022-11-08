import React from "react";
import styled from "styled-components";

const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #ffffff;
  border-radius: 6px;
  padding: 20px;
  height: 100%;
`;

const BlockTitle = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 14px;
`;

const Block = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <BlockContainer>
      <BlockTitle>{title}</BlockTitle>
      {children}
    </BlockContainer>
  );
};

export default Block;
