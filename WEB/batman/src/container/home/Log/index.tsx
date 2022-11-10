import { ILogs } from "../../../hooks/useLog";
import { LogContainer } from "./styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Log = ({ data }: { data: ILogs }) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "objectName", headerName: "Object", flex: 2 },
    { field: "date", headerName: "Time", flex: 4 },
    {
      field: "sectorId",
      headerName: "Sector ID",
      flex: 2,
    },
    {
      field: "captureURL",
      headerName: "Capture URL",
      flex: 4,
      renderCell: (params) => {
        console.log(params);
        return <a href={params.row.captureURL}>{params.row.captureURL}</a>;
      },
    },
  ];

  const rows = data.result.map((log) => {
    return {
      id: log.id,
      objectName: log.objectName,
      date: log.logDate,
      sectorId: log.sectorId,
      captureURL: log.captureURL,
    };
  });

  return (
    <LogContainer>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </LogContainer>
  );
};

export default Log;
