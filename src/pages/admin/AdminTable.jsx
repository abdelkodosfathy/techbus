import { deleteAdmin } from "@/services/adminService";
import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const AdminTable = ({ data }) => {
  const handleDeletAdmin = async (adminId) => {
    try {
      const data = await deleteAdmin(adminId);
      console.log('Admin deleted successfully:', data);
    } catch (error) {
      console.log('Failed to delete admin:', error);
    }
  }
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={styles.th}>ID</th>
          {/* <th style={styles.th}>Custom ID</th> */}
          <th style={styles.th}>First Name</th>
          <th style={styles.th}>Last Name</th>
          <th style={styles.th}>Email</th>
          <th style={styles.th}>Phone</th>
          <th style={styles.th}></th>
        </tr>
      </thead>
      <tbody>
        {data.map((admin) => (
          <tr key={admin.id}>
            {/* <td style={styles.td}>{admin.id}</td> */}
            <td style={styles.td}>{admin.custom_id}</td>
            <td style={styles.td}>{admin.first_name}</td>
            <td style={styles.td}>{admin.last_name}</td>
            <td style={styles.td}>{admin.email}</td>
            <td style={styles.td}>{admin.phone}</td>
            <td style={styles.td}>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                }}>
                    <button style={{...styles.actionsButton, color:"green"}}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button onClick={() => handleDeletAdmin(admin.id)} style={{...styles.actionsButton, color:"red"}}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button style={{...styles.actionsButton, color:"var(--main)"}}>
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  th: {
    // border: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
    padding: "16px 8px",
    textAlign: "center",
    color:"var(--gray)",
    fontWeight:"400",
    // backgroundColor: "#f4f4f4",
  },
  td: {
    fontWeight:"500",
    textAlign: "center",
    borderBottom: "1px solid #ddd",
    padding: "16px 8px",
  },
  actionsButton:{
    fontSize:"1.2rem",
    background:"none",
    border:"none",
    Outline:"none",
    width:"calc((100% - 10px)/ 3)",
    cursor:"pointer"  
  }
};

export default AdminTable;
