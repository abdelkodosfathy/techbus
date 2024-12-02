import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Topbar from "../../components/Topbar/Topbar.jsx";
import StatsCard from "../../components/StatsCard/StatsCard.jsx";
// import BarChart from "../../components/BarChart/BarChart.jsx";
// import LineChart from "../../components/LineChart/LineChart.jsx";
// const bussState = <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M25.375 10.875V23.5625C25.375 23.8029 25.2795 24.0334 25.1096 24.2033C24.9396 24.3733 24.7091 24.4688 24.4688 24.4688C24.2284 24.4688 23.9979 24.3733 23.8279 24.2033C23.658 24.0334 23.5625 23.8029 23.5625 23.5625V10.875C23.5607 9.19309 22.8918 7.58057 21.7025 6.39128C20.5132 5.20198 18.9007 4.53305 17.2188 4.53125H11.7812C10.0993 4.53305 8.48682 5.20198 7.29753 6.39128C6.10823 7.58057 5.4393 9.19309 5.4375 10.875V23.5625C5.4375 23.8029 5.34202 24.0334 5.17207 24.2033C5.00211 24.3733 4.7716 24.4688 4.53125 24.4688C4.2909 24.4688 4.06039 24.3733 3.89043 24.2033C3.72048 24.0334 3.625 23.8029 3.625 23.5625V10.875C3.6274 8.71256 4.48749 6.63938 6.01656 5.11031C7.54563 3.58124 9.61881 2.72115 11.7812 2.71875H17.2188C19.3812 2.72115 21.4544 3.58124 22.9834 5.11031C24.5125 6.63938 25.3726 8.71256 25.375 10.875ZM20.8438 10.875V19.0312C20.8437 19.6596 20.6259 20.2686 20.2275 20.7545C19.8291 21.2405 19.2747 21.5734 18.6586 21.6968L18.9361 22.2507C18.9894 22.3572 19.0211 22.4732 19.0295 22.592C19.038 22.7108 19.023 22.83 18.9853 22.943C18.9476 23.056 18.8881 23.1604 18.8101 23.2504C18.732 23.3404 18.6371 23.4141 18.5305 23.4673C18.424 23.5206 18.3081 23.5524 18.1893 23.5608C18.0705 23.5692 17.9512 23.5542 17.8382 23.5165C17.7253 23.4789 17.6208 23.4193 17.5308 23.3413C17.4409 23.2633 17.3672 23.1683 17.3139 23.0618L16.6591 21.75H12.3409L11.6861 23.0618C11.5785 23.2769 11.3899 23.4405 11.1618 23.5165C10.9336 23.5926 10.6846 23.5749 10.4695 23.4673C10.2543 23.3598 10.0908 23.1712 10.0147 22.943C9.93865 22.7149 9.95635 22.4658 10.0639 22.2507L10.3414 21.6968C9.72528 21.5734 9.17086 21.2405 8.77248 20.7545C8.37409 20.2686 8.15634 19.6596 8.15625 19.0312V10.875C8.15625 10.1539 8.44269 9.46242 8.95255 8.95255C9.46242 8.44269 10.1539 8.15625 10.875 8.15625H18.125C18.8461 8.15625 19.5376 8.44269 20.0474 8.95255C20.5573 9.46242 20.8437 10.1539 20.8438 10.875ZM9.96875 10.875V16.3125H19.0312V10.875C19.0312 10.6346 18.9358 10.4041 18.7658 10.2342C18.5959 10.0642 18.3654 9.96875 18.125 9.96875H10.875C10.6346 9.96875 10.4041 10.0642 10.2342 10.2342C10.0642 10.4041 9.96875 10.6346 9.96875 10.875ZM13.5938 18.125V19.9375H15.4062V18.125H13.5938ZM10.875 19.9375H11.7812V18.125H9.96875V19.0312C9.96875 19.2716 10.0642 19.5021 10.2342 19.6721C10.4041 19.842 10.6346 19.9375 10.875 19.9375ZM19.0312 19.0312V18.125H17.2188V19.9375H18.125C18.3654 19.9375 18.5959 19.842 18.7658 19.6721C18.9358 19.5021 19.0312 19.2716 19.0312 19.0312Z" fill="#0F5A5F"/>
// </svg>
import Revenue from '../../assets/game-icons_pay-money.png'
import Late from '../../assets/Vector.png'
import Active from '../../assets/ph_subway.png'
import CustomLineChart from "../../components/LineChart/LineChart.jsx";
import CustomBarChart from "../../components/BarChart/BarChart.jsx";

const Dashboard = () => (
    <main style={styles.main}>
      <h1 style={styles.heading}>hello !</h1>
      <section style={{
        display:"flex",
        // gap:"20px"
        padding:"20px",
        justifyContent:"space-between",
        width:"100%",
      }}>
        <StatsCard icon={Active} title="Daily Trips" value="324" percentage="7.86" isPositive />
        <StatsCard icon={Active} title="Active Buses" value="132" percentage="7.86" isPositive />
        <StatsCard icon={Late} title="Late Buses" value="10" percentage="7.86" />
        <StatsCard icon={Revenue} title="Total Revenue" value="453" percentage="7.86" isPositive />
      </section>
      <section style={{
        display:"flex",
        gap:"20px",
        padding:"20px",
      }}>
        <div style={styles.mainCharts}>
        <CustomBarChart />
        </div>
        <div style={styles.mainCharts}>
        <CustomLineChart />

        </div>
      </section>
    </main>
);

export default Dashboard;
const styles = {

    heading: {
      margin:" 20px",
      fontWeight:"400"
    },
    sidebar: {
      gridColumn: "1 / 2",
      backgroundColor: "#ffffff",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      height: "100%",
    },
    main: {
      gridColumn: "2 / 3",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      overflow: "auto", // Allows scrolling in case content overflows
      backgroundColor: "#f9fafb", // Light background for main content
    },
    topbar: {
      padding: "10px 20px",
    //boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      width:"100%",
      backgroundColor: "#ffffff",
      zIndex: 1,
    },
    statsSection: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      margin: "20px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    chartsSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      padding: "20px",
      margin: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    mainCharts:{
      padding:"10px",
      width:"50%",
      height:"400px",
      borderRadius:"24px",
      boxShadow: "0 0px 4px rgba(0, 0, 0, 0.2)",
    }
  };
  