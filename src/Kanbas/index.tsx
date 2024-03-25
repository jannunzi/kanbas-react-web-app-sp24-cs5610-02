import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Courses from "./Courses";
import Account from "./Account";

function Kanbas() {
  return (
    <div className="d-flex">
      <div>
        <KanbasNavigation />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
