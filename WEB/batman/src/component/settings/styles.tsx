import styled from "styled-components";

const UpdateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UpdateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const UpdateLabel = styled.span``;

const UpdateInput = styled.input`
  padding: 8px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
`;

const UpdateButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UpdateButton = styled.button``;

export {
  UpdateContainer,
  UpdateInputContainer,
  UpdateLabel,
  UpdateInput,
  UpdateButtons,
  UpdateButton,
};
