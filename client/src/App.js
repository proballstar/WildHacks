import logo from './logo.svg';
import { CamScreen, FormScreen, MapScreen } from './screens'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CamScreen}  />
        <Route path="/form" exact component={MapScreen}  />
        <Route path="/map" exact component={FormScreen}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
