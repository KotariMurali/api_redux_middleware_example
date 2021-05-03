import "./styles.css";
import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exactpath="/" component={Dashboard} />
          <Route exactpath="/users" component={Users} />
          <Users />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
