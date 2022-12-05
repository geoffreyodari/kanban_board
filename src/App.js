import {Provider} from 'react-redux'
import ColumnContainer from './components/ColumnContainer';

import store from "./redux/store"


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
    
      <Provider store={store}>
        <ColumnContainer/>
      </Provider>
  );
}

export default App;
