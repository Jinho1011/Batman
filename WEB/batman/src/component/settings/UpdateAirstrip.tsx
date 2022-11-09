import React, { useState } from "react";
import { IAirstrip, useAirstripMutation } from "../../hooks/useAirstrip";
import {
  UpdateContainer,
  UpdateInput,
  UpdateButtons,
  UpdateButton,
  UpdateInputContainer,
  UpdateLabel,
  UpdateInputs,
} from "./styles";

const UpdateAirstrip = ({ data }: { data: IAirstrip }) => {
  const [name, setName] = useState(data.name);
  const [startZone, setStartZone] = useState(data.startZone);
  const [endZone, setEndZone] = useState(data.endZone);

  const updateAirStripMutation = useAirstripMutation("put");
  const deleteAirStripMutation = useAirstripMutation("delete", data.id);

  const updateAirstrip = () => {
    updateAirStripMutation.mutate({
      ...data,
      name,
      startZone,
      endZone,
    });
  };

  return (
    <UpdateContainer>
      <UpdateInputs>
        <UpdateInputContainer>
          <UpdateLabel>Name</UpdateLabel>
          <UpdateInput
            placeholder={data.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </UpdateInputContainer>
        <UpdateInputContainer>
          <UpdateLabel>startZone</UpdateLabel>
          <UpdateInput
            placeholder={data.startZone}
            value={startZone}
            onChange={(e) => setStartZone(e.target.value)}
          />
        </UpdateInputContainer>
        <UpdateInputContainer>
          <UpdateLabel>endZone</UpdateLabel>
          <UpdateInput
            placeholder={data.endZone}
            value={endZone}
            onChange={(e) => setEndZone(e.target.value)}
          />
        </UpdateInputContainer>
      </UpdateInputs>

      <UpdateButtons>
        <UpdateButton onClick={updateAirstrip}>수정</UpdateButton>
        <UpdateButton onClick={() => deleteAirStripMutation.mutate({})}>
          삭제
        </UpdateButton>
      </UpdateButtons>
    </UpdateContainer>
  );
};

export default UpdateAirstrip;
