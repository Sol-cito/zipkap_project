import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const RegistrationSuccess = () => {
  const [second, setSecond] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setSecond(second - 1);
    }, 1000);
  }); //

  if (second == 0) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <br/>
      <h1> 회원가입을 축하드립니다!</h1>
      <h5> {second} 초 후 Redirect 됩니다...</h5>
    </div>
  );
};

export default RegistrationSuccess;
