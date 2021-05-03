import "./styles.css";
import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";
import Userview from "./Components/Userview";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:name" component={Userview} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
