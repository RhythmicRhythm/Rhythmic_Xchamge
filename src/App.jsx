import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Sellcrypto from "./pages/Sellcrypto";
import Sellgiftcard from "./pages/Sellgiftcard";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/dashboard/sellcrypto" element={<Sellcrypto />} />
        <Route
          exact
          path="/dashboard/sellgiftcard"
          element={<Sellgiftcard />}
        />
      </Routes>
    </>
  );
}

export default App;
