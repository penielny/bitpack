import { DashUiProvider } from "./context/dashui";
import Main from "./pages/main";

const { BrowserRouter, Switch, Route } = require("react-router-dom");

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <DashUiProvider>
          <Route path={"/wallet"} component={Main} />
          </DashUiProvider>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
