import { Switch, Route } from "react-router-dom";
import { Discography } from "../Pages/Discography";
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Discography />
      </Route>
    </Switch>
  );
};
