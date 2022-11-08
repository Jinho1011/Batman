import { ILogs } from "../../../hooks/useLog";
import { LogContainer } from "./styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Log = ({ data }: { data: ILogs }) => {
  console.log(data.result);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "date", headerName: "Time", flex: 4 },
    { field: "result", headerName: "Result", flex: 2 },
    {
      field: "sectorId",
      headerName: "Sector ID",
      flex: 1,
    },
    {
      field: "resultURL",
      headerName: "Result URL",
      flex: 4,
    },
  ];

  const rows = data.result.map((log) => {
    return {
      id: log.id,
      date: log.logDate,
      result: log.result,
      sectorId: log.sectorId,
      resultURL: log.resultURL,
    };
  });

  return (
    <LogContainer>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        // rowsPerPageOptions={[10]}
      />
    </LogContainer>
  );
};

export default Log;
