import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Users from "./pages/Users";
import User from "./pages/User";
import Albums from "./pages/Albums";
import {useLoading} from "../hooks/queries/useUI";

function App() {
  const loading = useLoading();

  return (
      <Router>
        <div>
          <ul>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/albums">Albums</Link></li>
          </ul>
          <hr />

          {loading && <h2>Loading...</h2>}

          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/albums" component={Albums} />

          <Redirect path={"/"} to={"/users"}/>
        </div>
      </Router>
  );
}

export default App;
