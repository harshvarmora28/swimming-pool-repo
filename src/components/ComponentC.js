import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const inputSelector = useSelector((state) => state.input);

  const divStyle = {
    marginTop: "100px",
    marginBottom: "50px",
    border: "2px solid black",
    padding: "50px",
    width: "50%",
    margin: "auto",
    borderRadius: "20px"
  };

  const lableStyle = {
    fontWeight: "600",
    fontSize: "25px",
    marginBottom: "50px"
  };


  return (
    <div style={divStyle}>
      <label style={lableStyle}>Value from Redux Store</label>
      <br></br>
      <div>{inputSelector.value}</div>
    </div>
  );
};

export default ComponentC;
