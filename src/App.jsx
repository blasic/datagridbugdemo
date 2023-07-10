import './App.css';
import {useMemo} from "react";
import {DataGridPro, GridToolbarContainer, GridToolbarExport} from "@mui/x-data-grid-pro";


const rows = [
    {id: 1, SalesOrder: 123, isExport: true},
    {id: 2, SalesOrder: 123, isExport: false},
    {id: 3, SalesOrder: 123, isExport: false},
    {id: 4, SalesOrder: 123, isExport: false},
    {id: 5, SalesOrder: 123, isExport: true},
    {id: 6, SalesOrder: 123, isExport: false},
    {id: 7, SalesOrder: 123, isExport: false},
    {id: 8, SalesOrder: 123, isExport: false},
    {id: 9, SalesOrder: 123, isExport: false},
    {id: 10, SalesOrder: 123, isExport: false},
    {id: 11, SalesOrder: 123, isExport: true},
    {id: 12, SalesOrder: 123, isExport: false},
    {id: 13, SalesOrder: 123, isExport: false},
    {id: 14, SalesOrder: 123, isExport: false},
    {id: 15, SalesOrder: 123, isExport: false},
    {id: 16, SalesOrder: 123, isExport: false},
    {id: 17, SalesOrder: 123, isExport: false},
    {id: 18, SalesOrder: 123, isExport: false},
    {id: 19, SalesOrder: 123, isExport: false},
    {id: 20, SalesOrder: 123, isExport: false},
    {id: 21, SalesOrder: 123, isExport: true},
    {id: 22, SalesOrder: 123, isExport: false},
    {id: 23, SalesOrder: 123, isExport: false},
    {id: 24, SalesOrder: 123, isExport: false},
    {id: 25, SalesOrder: 123, isExport: false},
    {id: 26, SalesOrder: 123, isExport: false},
    {id: 27, SalesOrder: 123, isExport: false},
    {id: 28, SalesOrder: 123, isExport: false},
    {id: 29, SalesOrder: 123, isExport: false},
    {id: 30, SalesOrder: 123, isExport: false},
    {id: 31, SalesOrder: 123, isExport: false},
    {id: 32, SalesOrder: 123, isExport: false},
    {id: 33, SalesOrder: 123, isExport: false},
    {id: 34, SalesOrder: 123, isExport: false},
    {id: 35, SalesOrder: 123, isExport: false},
    {id: 36, SalesOrder: 123, isExport: false},
    {id: 37, SalesOrder: 123, isExport: false},
    {id: 38, SalesOrder: 123, isExport: false},
    {id: 39, SalesOrder: 123, isExport: false},
    {id: 40, SalesOrder: 123, isExport: false},
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
        return param.row.isExport ? "yellow100" : ""
    }
    const columns = useMemo(() => {
        return [
            {
                field: 'SalesOrder',
                type: "number",
                cellClassName: exportColor
            },
        ]
    }, [])

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
