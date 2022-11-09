import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { LogContainer } from "../../container/home/Log/styles";
import { IResponder } from "../../hooks/useResponder";

const Responders = ({ responders }: { responders: IResponder[] }) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "airStripId", headerName: "Airstrip ID", flex: 2 },
    { field: "type", headerName: "Type", flex: 2 },
    {
      field: "name",
      headerName: "Name",
      flex: 3,
    },
    {
      field: "detail",
      headerName: "Detail",
      flex: 3,
    },
    {
      field: "dest",
      headerName: "Dest",
      flex: 3,
    },
  ];

  const rows = responders.map((responder) => {
    return {
      id: responder.id,
      airStripId: responder.airStripId,
      type: responder.type,
      name: responder.name,
      detail: responder.detail,
      dest: responder.dest,
    };
  });

  return (
    <LogContainer>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </LogContainer>
  );
};

export default Responders;
