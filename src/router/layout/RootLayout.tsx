// react router
import { Outlet } from "react-router-dom";

// components
import Navbar from "../../components/Navbar";

export default function RootLayout() {
  return (
    <div id="page-layout">
      <div className="wflex-1">
        <Outlet />
      </div>
      <div style={{width: '3rem'}}>
          <Navbar />
      </div>
    </div>
  );
}
