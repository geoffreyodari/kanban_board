import ColumnForm from "./redux/column/ColumnForm";
import { useSelector } from "react-redux";
import Column from "./components/Column";


function App() {
  const columns = useSelector(state=>state.columns)

  return (
   <div className="container-fluid bg-light vh-100">
    {columns.columns.map(row=><Column key={row.id}/>)}
    {console.log(columns.columns)}
      <ColumnForm/>
    </div>
  );
}

export default App;
