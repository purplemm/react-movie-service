import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App(){
  return (
    <Router>
      {/* Route를 찾는다. */}
      <Switch>
        {/* Route는 각 url을 의미. */}
        <Route path="/hello"><h1>Hello</h1></Route>
        {/* url에 파라미터를 넣을 수 있고 앞에 :를 써주면 됨 */}
        <Route path="/movie/:id"><Detail /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App; 