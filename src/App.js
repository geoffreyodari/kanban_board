import AddColumn from "./components/AddColumn";
import Column from "./components/Column";

function App() {
 let data =[
              {
                id:1,
                name:"to-do",
                tasks:[{ id:1,name:"to use redux"},{ id:2,name:"to complete task tomorrow"}]
              },{
                id:2,
                name:"In Progress",
                tasks:[{ id:1,name:"to complete absenteeism report"},{ id:2,name:"to complete task tomorrow"}]
              }
          ]

  return (
    <div className="container-fluid row bg-light vh-100">
      {data.map(col=><Column data={col} key={col.id}/>)}
      <AddColumn/>
    </div>
  );
}

export default App;
