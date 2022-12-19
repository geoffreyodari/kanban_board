import ColumnForm from "./redux/column/ColumnForm";
import { useSelector } from "react-redux";
import Column from "./components/Column";


function App() {
  const columns = useSelector(state=>state.columns)

  return (
   <div className="container-fluid row  vh-100">
    {columns.columns.map(child=><Column key={child.id} {...child}/>)}
      <ColumnForm/>
    </div>
  );
}

export default App;
