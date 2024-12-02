import axios from 'axios';

export const fetchAdmins = async () => {
  const response = await axios.get('https://tech-bus-egy.vercel.app/api/admin/all');
  return response.data;
};
export const deleteAdmin = async (adminId) => {
  const response = await axios.delete(`https://tech-bus-egy.vercel.app/api/admin/delete/${adminId}`);
  return response.data;
};
