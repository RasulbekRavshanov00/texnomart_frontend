import './App.css';
import Home from './routes/home/Home';
import { Switch, Route } from "react-router-dom"
import Admin from './routes/admin/Admin';




function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" >
            <Home/>
        </Route>
      </Switch>
        <Route path="/admin" exact>
          <Admin/>
        </Route>
    </div>
  );
}

export default App;