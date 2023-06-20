import './App.css';
import {useMemo} from "react";
import {DataGridPro, GridToolbarContainer, GridToolbarExport} from "@mui/x-data-grid-pro";


const rows = [
  {id: 1, SalesOrder: 123, isExport: true},
  {id: 2, SalesOrder: 123, isExport: false},
]

const CustomToolbar = () => {

    return (
        <GridToolbarContainer sx={{displayPrint: 'none'}}>
               <GridToolbarExport printOptions={{}}/>
        </GridToolbarContainer>
    );
}



function App() {

  const exportColor = (param) => {
      console.log(param)
      return param.row.isExport ? "yellow100": ""
  }
const columns = useMemo(()=> {
  return [
    {
      field: 'SalesOrder',
      type: "number",
      cellClassName: exportColor
    },
  ]
},[])



  return (
    <div className="App">
      <header className="App-header">
      </header>


      <DataGridPro
          //   sx={}
slots={{
    toolbar: CustomToolbar
}}
          columns={columns}
          density={"compact"}

          rowCount={rows.length || 0}
          rows={rows}
      />
    </div>
  );
}

export default App;
