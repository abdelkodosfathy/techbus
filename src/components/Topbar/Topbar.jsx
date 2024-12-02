import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {  FaSearch } from "react-icons/fa";

const TopBar = () => {
  return (
    <header style={styles.topbar}>
      {/* Date Range Picker */}
      <div style={styles.datePicker}>
         <span>June - August 2024</span>
        <div style={styles.dropdownArrow}>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>

      {/* Search Box */}
      <div style={styles.searchBox}>
        <FaSearch style={styles.icon} />
        <input
          type="text"
          placeholder="Search..."
          style={styles.searchInput}
        />
      </div>

      {/* User Info */}
      <div style={styles.userInfo}>
        <div style={styles.userDetails}>
          <span style={styles.userName}>Seif Hossam</span>
          <span style={styles.userRole}>Manager</span>
        </div>
        <img
          src="https://via.placeholder.com/40" // Replace with actual profile image URL
          alt="User"
          style={styles.userAvatar}
        />
        <div style={styles.dropdownArrow}>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
const styles = {
  topbar: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#ffffff",
    // boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
    width: "100%",
    height:"100%"
  },
  datePicker: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    fontSize: "14px",
    color: "#1f2937",
    cursor: "pointer",
  },
  icon: {
    marginRight: "10px",
    color: "var(--main)", // Icon color
  },
  dropdownArrow: {
    color: "var(--main)", // Icon color
    marginLeft: "auto",
    fontSize: "1rem",
    with:"10px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    flex: "1",
    margin: "0 20px",
  },
  searchInput: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "14px",
    color: "#6b7280", // Placeholder color
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  userDetails: {
    textAlign: "right",
    display:"flex",
    flexDirection:"column"
  },
  userName: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#1f2937", // Dark text
  },
  userRole: {
    fontSize: "12px",
    color: "#6b7280", // Light gray
  },
  userAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};
