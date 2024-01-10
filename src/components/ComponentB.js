import React from 'react';
import { useDispatch } from 'react-redux';
import { updateValue } from '../redux/actions/inputActions';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    dispatch(updateValue(inputValue));
  };

  const divStyle = {
    marginTop: "150px",
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
    marginBottom: "50px",
    paddingBottom: "30px"
  };

  return (
    <div style={divStyle}>
      <h3>Author: Harsh Varmora</h3>
      <label style={lableStyle}>Input Value</label>
      <br></br>
      <input type="text" onChange={(e) => handleInputChange(e)} />
    </div>
  );
};

export default ComponentB;
