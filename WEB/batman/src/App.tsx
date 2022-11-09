import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as pages from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={pages.home} />
        <Route exact path="/statistics" component={pages.statistics} />
        <Route exact path="/settings" component={pages.settings} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
