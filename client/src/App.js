import logo from './logo.svg';
import { CamScreen, FormScreen, MapScreen } from './screens'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom';
import Layout from './layout/layout.jsx';

function App() {
  return (
    <BrowserRouter>
    <Layout />
      <Switch>
        <Route path="/" exact component={CamScreen}  />
        <Route path="/form" exact component={MapScreen}  />
        <Route path="/map" exact component={FormScreen}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
