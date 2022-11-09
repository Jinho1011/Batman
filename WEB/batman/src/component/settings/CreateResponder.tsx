import React, { useState } from "react";
import { useResponderMutation } from "../../hooks/useResponder";
import {
  UpdateButton,
  UpdateButtons,
  UpdateContainer,
  UpdateInput,
  UpdateInputContainer,
  UpdateInputs,
  UpdateLabel,
} from "./styles";

const CreateResponder = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [detail, setDetial] = useState("");
  const [dest, setDest] = useState("");

  const responderMutation = useResponderMutation("post");

  const createResponder = () => {
    responderMutation.mutate({
      type,
      name,
      detail,
      dest,
      airStripId: 1,
    });
  };

  return (
    <UpdateContainer>
      <UpdateInputs>
        <UpdateInputContainer>
          <UpdateLabel>Name</UpdateLabel>
          <UpdateInput
            placeholder={"Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </UpdateInputContainer>
        <UpdateInputContainer>
          <UpdateLabel>Type</UpdateLabel>
          <UpdateInput
            placeholder={"Type"}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </UpdateInputContainer>
        <UpdateInputContainer>
          <UpdateLabel>Detail</UpdateLabel>
          <UpdateInput
            placeholder={"Detail"}
            value={detail}
            onChange={(e) => setDetial(e.target.value)}
          />
        </UpdateInputContainer>
        <UpdateInputContainer>
          <UpdateLabel>Dest</UpdateLabel>
          <UpdateInput
            placeholder={"Dest"}
            value={dest}
            onChange={(e) => setDest(e.target.value)}
          />
        </UpdateInputContainer>
      </UpdateInputs>
      <UpdateButtons>
        <UpdateButton onClick={createResponder}>추가</UpdateButton>
      </UpdateButtons>
    </UpdateContainer>
  );
};

export default CreateResponder;
