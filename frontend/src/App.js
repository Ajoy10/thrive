import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./firebase";

import "./App.css";
import UI from "./page/UI";
import { AuthContext } from "./context/AuthContext";
import Topic from "./page/Topic";
import Threads from "./page/Threads";
import Navbar from "./components/Navbar";
import CreateTopic from "./page/CreateTopic";
import CreateThread from "./page/CreateThread";
import SearchPage from "./page/SearchPage";

function App() {
  const [userName, setUserName] = useState("");

  const { token, setToken, loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setToken(await user.getIdToken());
        setUserName(user.displayName);
      } else {
        setUserName("");
        setToken(null);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="loading">Loading</div>;
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar username={userName} />
                <Outlet />
              </>
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search/" element={<SearchPage />} />
            <Route path="/topics/new" element={<CreateTopic />} />
            <Route path="/topics/:id" element={<Topic />} />
            <Route path="/threads/new" element={<CreateThread />} />
            <Route path="/threads/:id" element={<Threads />} />
            <Route path="/ui" element={<UI />} />
            <Route path="/" element={<Home name={userName} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
