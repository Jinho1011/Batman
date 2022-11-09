import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ISector } from "../../hooks/useAirstrip";
import { useSectorMutation } from "../../hooks/useSector";
import {
  UpdateContainer,
  UpdateInputContainer,
  UpdateLabel,
  UpdateInput,
  UpdateButtons,
  UpdateButton,
  UpdateInputs,
} from "./styles";

const UpdateSectors = ({ sectors }: { sectors: ISector[] }) => {
  const [sector, setSector] = useState(sectors[0]);
  const [name, setName] = useState("");
  const [camUrl, setCamUrl] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const updateSectorMutation = useSectorMutation("put");
  const deleteSectorMutation = useSectorMutation("delete", sector.id);

  const updateSector = () => {
    updateSectorMutation.mutate({
      ...sector,
      name: name || sector.name,
      camURL: camUrl || sector.camURL,
      x: x || sector.x,
      y: y || sector.y,
    });
  };

  return (
    <UpdateContainer style={{ paddingTop: "10px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sector</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sector.id}
          label="sector"
          onChange={(e) => {
            const selected = sectors.find(
              (s) => s.id === e.target.value
            ) as ISector;
            setSector(selected);
          }}
        >
          {sectors.map((v) => {
            return (
              <MenuItem key={v.id} value={v.id}>
                {v.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <UpdateInputs>
        <UpdateInputContainer>
          <UpdateLabel>Name</UpdateLabel>
          <UpdateInput
            placeholder={sector.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </UpdateInputContainer>
        <UpdateInputContainer>
          <UpdateLabel>CamURL</UpdateLabel>
          <UpdateInput
            placeholder={sector.camURL}
            value={camUrl}
            onChange={(e) => setCamUrl(e.target.value)}
          />
        </UpdateInputContainer>
        <UpdateInputContainer>
          <UpdateLabel>x</UpdateLabel>
          <UpdateInput
            placeholder={sector.x}
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
        </UpdateInputContainer>
        <UpdateInputContainer>
          <UpdateLabel>y</UpdateLabel>
          <UpdateInput
            placeholder={sector.y}
            value={y}
            onChange={(e) => setY(e.target.value)}
          />
        </UpdateInputContainer>
      </UpdateInputs>

      <UpdateButtons>
        <UpdateButton onClick={updateSector}>수정</UpdateButton>
        <UpdateButton onClick={() => deleteSectorMutation.mutate({})}>
          삭제
        </UpdateButton>
      </UpdateButtons>
    </UpdateContainer>
  );
};

export default UpdateSectors;
