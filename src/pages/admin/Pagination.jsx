const Button = ({ text, styles}) => {
  const buttonStyles = {
    padding: "10px 15px",
    margin: "0 5px",
    backgroundColor: "white",
    color:"var(--main)",
    border: "1px solid #ddd",
    borderRadius: "13px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s, transform 0.2s",
  };

  const activeButtonStyles = {
    backgroundColor: "var(--main)",
    color: "white",
    borderColor: "#007bff",
  };

  const disabledButtonStyles = {
    color: "#ccc",
    cursor: "not-allowed",
    borderColor: "#ccc",
  };


    return (
      <button
        style={{ ...buttonStyles, ...styles }}
      >
        {text}
      </button>
    );
  };
const Pagination = () => {
  
  const handlePageClicked = () => {

  }
  return (
    <div style={{ 
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
      alignSelf:"flex-end",
      margin:" auto 5px 10px"
      }}>
        <Button text="Previous"/>
        <Button onClick={handlePageClicked} text="1"
          styles={{
            backgroundColor:"var(--main)",
            color:"white"
          }}
        />
        <Button onClick={handlePageClicked} text="2"/>
        <Button onClick={handlePageClicked} text="3"/>
        <Button text="..."/>
        <Button text="Next"/>
    </div>
  );
};
  
  export default Pagination;
  