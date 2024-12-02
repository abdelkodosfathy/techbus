
export default function Circle({styles, radius}) {
    return <div style={{
      position:"absolute",
      width:`${radius}px`,
      height:`${radius}px`,
      borderRadius:"50%",
      backgroundColor:"rgba(255, 255, 255, 0.11)",
      ...styles
    }} className="circle">
    </div>
  }