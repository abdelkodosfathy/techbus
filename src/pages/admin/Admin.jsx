import { useState, useEffect } from 'react';
import { fetchAdmins } from '@/services/adminService';
import AdminTable from './AdminTable';
import Pagination from './Pagination';
import NewAdmin from './NewAdmin';

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState(false);
  useEffect(() => {
    const getAdmins = async () => {
      try {
        const response = await fetchAdmins();
        setAdmins(response.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    getAdmins();
  }, []);

  const handleAddNew = () => {
    
  }
  
  return (
    <div style={styles.admin}>
      {newAdmin ? 
          <NewAdmin/>
            :
            <>
            <div style={styles.header}>
            <h1 style={styles.h1}>Admin's list</h1>
            <button onClick={() => setNewAdmin(true)} style={styles.addNew}>
              + Add New
            </button>
          </div>
          <AdminTable data={admins}/>
          <Pagination/>
            </>
      } 
    </div>
  )
}
const styles = {
    admin:{
      display:"flex",
      flexDirection:"column",
      borderRadius:"16px",
      gridColumn: "2 / 3",
      margin:"20px",
      width:"calc(100% - 40px)",
      height:"calc(100% - 40px)",
      boxShadow: "0 0px 4px rgba(0, 0, 0, 0.1)",
    },
    header:{
      padding:"16px",
      width:"100%",
      display:"flex",
      justifyContent:"space-between",
    },
    h1:{
      fontSize:"1.5rem",
      fontWeight:"500"
    },
    addNew: {
      cursor:"pointer",
      border:"none",
      color:"white",
      outline:"none",
      borderRadius:"8px",
      backgroundColor:"var(--main)",
      padding:"0px 16px",

    }
}

export default Admin
