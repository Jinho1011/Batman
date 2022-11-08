import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as pages from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={pages.home} />
        <Route exact path="/statistics" component={pages.statistics} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
