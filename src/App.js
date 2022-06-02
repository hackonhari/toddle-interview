import OTP from "./otp";
import { useState } from "react";

const App = () => {
  const [otp, setOtp] = useState([]);

  const handleInputChange = (val, otpIndex) => {
    console.log(val, otpIndex);
    let OTPCopy = [...otp];
    console.log(OTPCopy[otpIndex]);
    if (OTPCopy[otpIndex] === undefined) {
      OTPCopy.push(val);
    } else {
      OTPCopy.forEach((input, index, array) => {
        console.log(input, index, array);
        if (index === otpIndex) {
          array[otpIndex] = val;
        }
      });
    }
    setOtp(OTPCopy);
    console.log(OTPCopy);
  };

  const handleClear = () => {
    setOtp([]);
  };

  return (
    <div>
      <OTP
        handleInputChange={handleInputChange}
        value={otp}
        handleClear={handleClear}
      />
    </div>
  );
};

export default App;
