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
import Paymentoptions from "./pages/Paymentoptions";
import Contact from "./pages/Contact";
import Changepassword from "./pages/Changepassword";

import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/SIgnup";
import Forgotpassword from "./pages/auth/Forgotpassword";


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
        {/* AUTH ROUTES */}
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/forgotpassword" element={<Forgotpassword />} />

        {/* DASHBOARD ROUTES  */}
        <Route exact path="/dashboard/home" element={<Dashboard />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/paymentoptions" element={<Paymentoptions />} />
        <Route exact path="/dashboard/sellcrypto" element={<Sellcrypto />} />
        <Route exact path="/settings/contact" element={<Contact />} />
        <Route exact path="/settings/changepassword" element={<Changepassword />} />
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
