import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the icon

const StatsCard = ({ title, value, icon, percentage, isPositive }) => (
  <div className="stats-card" style={styles.card}>
    <div style={{
      position:"absolute",
      top:"10px",
      right:"10px",
    }}>        
      {/* {icon && icon} */}
      {icon && <img src={icon} alt="" style={{
        width:"30px",
        top:"10px",
        right:"10px"
      }} />}
    </div>

    <div style={styles.valueContainer}>
      <span style={styles.value}>{value}</span>
      <h4>{title}</h4>

      <p className={isPositive ? "positive" : "negative"} style={{...styles.percentage, 
        color : isPositive ? "var(--green)" : "var(--red)",
        backgroundColor : isPositive ? "var(--transparent-green)" : "var(--transparent-red)"
        }}>
        <FontAwesomeIcon 
          icon={faArrowRight} 
          style={{
            ...styles.arrowIcon, 
            transform: isPositive ? "rotate(-45deg)" : "rotate(45deg)"
          }}
        />
        {percentage}%
      </p>
    </div>
  </div>
);

const styles = {
  card: {
    position:"relative",
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius:"24px",
    boxShadow: "0 0px 4px rgba(0, 0, 0, 0.2)",
    minWidth: '200px',
    width: 'calc(25% - 20px)',
    marginBottom: '16px',
  },
  valueContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    // margin: '10px 0',
    // height:"100%",  
    gap:"10px",
    flexDirection:"column",
    width:"fit-content"
  },
  value: {
    fontSize: '24px',
    fontWeight: '400',
    marginRight: '8px',
  },
  icon: {
    fontSize: '20px',
    color: '#007BFF',
  },
  percentage: {
    // fontSize: '16px',
    // marginTop: '8px',
    color:"#22956B",
    backgroundColor:"#22956B14",
    padding:"5px 10px",
    borderRadius:"10px"
  },
  arrowIcon: {
    fontSize: '18px',
     marginRight: '5px',
  }
};

export default StatsCard;
