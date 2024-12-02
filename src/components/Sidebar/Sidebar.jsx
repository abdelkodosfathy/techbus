import { FiLogOut } from "react-icons/fi";
import './sidebar.css'
import { techBusIcon } from "@/assets/sidebarIcons";
import dashboard from "assets/sidebarIcons/dashboard.png";
import dashboardActive from "assets/sidebarIcons/dashboardActive.png";
import admin from "assets/sidebarIcons/user.svg";
import adminActive from "assets/sidebarIcons/userActive.svg";
import tickets from "assets/sidebarIcons/ticket.svg";
import ticketsActive from "assets/sidebarIcons/ticketActive.svg";
import buses from "assets/sidebarIcons/bus.svg";
import busesActive from "assets/sidebarIcons/busActive.svg";
import drivers from "assets/sidebarIcons/truck-driver.svg";
import driversActive from "assets/sidebarIcons/truck-driverActive.svg";
import passengers from "assets/sidebarIcons/passenger.svg";
import passengersActive from "assets/sidebarIcons/passengerActive.svg";
import reports from "assets/sidebarIcons/reports.svg";
import reportsActive from "assets/sidebarIcons/reportsActive.svg";
import routes from "assets/sidebarIcons/route.svg";
import routesActive from "assets/sidebarIcons/routeActive.svg";
import station from "assets/sidebarIcons/location.svg";
import stationActive from "assets/sidebarIcons/locationActive.svg";

import { useLocation, useNavigate } from "react-router-dom";

const NavItem = ({ icon, activeIcon, label }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === `/${label}`;
  const styles = {
    navItem: {
      display: "flex",
      gap:"10px",
      alignItems: "center",
      padding: "10px 20px",
      marginBottom: "10px",
      color: "var(--light-gray)", // Light gray text
      fontSize: "14px",
      cursor: "pointer",
      transition: "background 0.3s, color 0.3s",
    },
    navItemActive: {
      backgroundColor: "var(--transparent-green)", // Active background
      color: "var(--main)", // Active text color
    },
    navIcon: {
      marginRight: "15px", // Space between icon and text
      fontSize: "20px",
    },
  }

  const handleClick = () => {
    navigate(label);
  };
  const currentIcon = isActive ? activeIcon : icon 
  return (
    <li className="sidebar-item" style={{ ...styles.navItem, ...(isActive && styles.navItemActive) }} onClick={handleClick}>
      <img width={30} src={currentIcon} alt={label} style={styles.navIcon} />
      <span>{label}</span>
    </li>
  );
};
const Sidebar = () => {
  return (<div style={styles.sidebar}>
    <div style={styles.logo}>
      {/* <img src={techBusIcon} alt="TechBus Logo" style={styles.logoImg} /> */}
      {techBusIcon}
    </div>
    <nav>
    <ul style={styles.nav}>
      <NavItem activeIcon={dashboardActive} icon={dashboard} label="dashboard"/>
      <NavItem activeIcon={adminActive} icon={admin} label="admin" />
      <NavItem activeIcon={ticketsActive} icon={tickets} label="tickets"/>
      <NavItem activeIcon={busesActive} icon={buses} label="buses"/>
      <NavItem activeIcon={driversActive} icon={drivers} label="drivers"/>
      <NavItem activeIcon={passengersActive} icon={passengers} label="passengers"/>
      <NavItem activeIcon={reportsActive} icon={reports} label="reports"/>
      <NavItem activeIcon={routesActive} icon={routes} label="routes"/>
      <NavItem activeIcon={stationActive} icon={station} label="station"/>
    </ul>
    </nav>
    <div
      style={styles.logout}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#fdecea")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
    >
      <FiLogOut />
      <span>Log out</span>
    </div>
  </div>)
};

export default Sidebar;



const styles = {
    sidebar: {
      width: "100%",
      padding:"20px 0",
      height: "100vh",
      backgroundColor: "#ffffff", // White background
      color: "#1f2937", // Dark text
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRight: "1px solid var(--soft-gray)", // Light gray border
    },
    logo: {
      textAlign: "center",
      marginBottom: "30px",
    },
    logoImg: {
      maxWidth: "80%",
      height: "auto",
    },
    nav: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    
    logout: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 20px",
      fontSize: "14px",
      // color: "#e63946", // Red text
      color:"var(--red)",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    logoutHover: {
      backgroundColor: "var(--transparent-green)", // Light red hover
    },
  };
  