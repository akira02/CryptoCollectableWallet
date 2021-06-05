import { Route, HashRouter } from "react-router-dom";

// styles
import "antd/dist/antd.css";

// pages
import List from "./pages/list.js";
import Detail from "./pages/detail.js";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={List} />
      <Route path="/detail/:contractid/:token" component={Detail} />
    </HashRouter>
  );
}

export default App;
