import axios from 'axios';
import React, { useState } from 'react'
const Input = ({name, title, type = "text", onChange}) => {
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      width:"calc(50% - 20px)",
      marginBottom:"1rem"
    }}>
      <label style={{
        marginBottom:"5px"
      }} htmlFor={name}>
        {title}
      </label>
      <input onChange={onChange} name={name} style={{
        height:"2.5rem",
        padding:"0 1rem ",
        outline:"var(--gray)",
        borderRadius:"5px",
        border:"solid var(--gray) 1px"
      }} id={name} type={type}/>
    </div>
  ) 
}
const NewAdmin = ({onBack}) => {
  // State for form fields
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if passwords match
    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match!");
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Prepare the payload
    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
      phone: formData.phone
    };

    try {
      const response = await axios.post('https://tech-bus-egy.vercel.app/api/admin/store', payload, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        alert('Admin added successfully!');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password_confirmation: '',
          phone: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('There was an error while adding the admin.');
      }
    }
  };

  const styles = {
    main: {
      padding: '20px'
    },
    button: {
      borderRadius: '5px',
      background: 'none',
      border: 'none',
      fontWeight: 'bold',
      padding: '10px',
      width: '150px',
    }
  };

  return (
    <div style={styles.main}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '40px' }}>
          <Input name={"first_name"} title={"First Name"} value={formData.first_name} onChange={handleChange} />
          <Input name={"last_name"} title={"Last Name"} value={formData.last_name} onChange={handleChange} />
        </div>
        <div style={{ display: 'flex', gap: '40px' }}>
          <Input name={"email"} title={"Email"} value={formData.email} onChange={handleChange} type="email" />
          <Input name={"password"} title={"Password"} value={formData.password} onChange={handleChange} type="password" />
        </div>
        <div style={{ display: 'flex', gap: '40px' }}>
          <Input name={"password_confirmation"} title={"Confirm Password"} value={formData.password_confirmation} onChange={handleChange} type="password" />
          <Input name={"phone"} title={"Phone"} value={formData.phone} onChange={handleChange} type="tel" />
        </div>
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', margin: '16px' }}>
          <button
            style={{
              ...styles.button,
              backgroundColor: 'var(--main)',
              color: 'white'
            }}
            type="submit"
          >
            Add
          </button>
          <button
            style={{
              ...styles.button,
              border: 'solid 1px var(--red)',
              color: 'var(--red)'
            }}
            type="button"
            onClick={() => setFormData({
              first_name: '',
              last_name: '',
              email: '',
              password: '',
              password_confirmation: '',
              phone: ''
            })}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};


export default NewAdmin