import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Dashboard from "./pages/dashboard/Dashboard.jsx";
import "./index.css";
import Dashboard from "./pages/dashboard/Dashborad";
import Admin from "./pages/admin/Admin";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/Topbar/Topbar";
// import Congrates from './pages/Congrats/Congrates'
import { Sign } from './pages/Signin/Sign.jsx'
import { Congratulations } from './pages/Congratulations/Congratulations .jsx';
import { Forgetpassword } from './pages/Forgetpasword/Forgetpassword.jsx'
import { Resetpassword } from './pages/Resetpassword/Resetpassword.jsx'
import { Verifycode } from './pages/Verifycode/Verifycode.jsx'

function App() {
  console.log("im here");
  
  return (
    <BrowserRouter>
      <Routes >
        {/* Nested Routes */}
        <Route element={<AuthedLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* <Route element={<Congrates/>}/> */}
        <Route path="/" element={<Sign/>} />
        <Route path="/congratulations" element={<Congratulations/>} />
        <Route path="/forgetpassword" element={<Forgetpassword/>} />
        <Route path="/resetpassword" element={<Resetpassword/>} />
        <Route path="/verifycode" element={<Verifycode/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const styles = {
  dashboard: {
    display: "grid",
    gridTemplateColumns: "240px 1fr", // Sidebar takes 250px, main takes remaining space
    gridTemplateRows: "70px 1fr",
    height: "100vh", // Full height of the viewport
    overflow: "hidden",
    width:"100%",
  },
}

const AuthedLayout = () => (
  <div style={styles.dashboard}>
    <Sidebar />
    <TopBar />
    <Outlet /> {/* Render nested routes here */}
  </div>
);