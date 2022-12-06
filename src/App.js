import {Provider} from 'react-redux'
import ColumnContainer from './components/ColumnContainer';

import store from "./redux/store"


function App() {

  return (
      <Provider store={store}>
        <ColumnContainer/>
      </Provider>
  );
}

export default App;
