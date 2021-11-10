import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./Nav";
import Posts from "./Posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <main id="main" className="App">
      <Router>
        <Nav />
        <Switch>
            <Route exact path="/">
                <Posts posts={posts} setPosts={setPosts}/>
            </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
