import OTP from "./otp";
import { useState } from "react";

const App = () => {
  const [otp, setOtp] = useState([]);
  const handleInputChange = (val, otpIndex) => {
    let OTPCopy = [...otp];
    if (OTPCopy[otpIndex] === undefined) {
      OTPCopy.push(val);
    } else {
      OTPCopy.forEach((input, index, array) => {
        if (index === otpIndex) {
          array[otpIndex] = val;
        }
      });
    }
    setOtp(OTPCopy);
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
