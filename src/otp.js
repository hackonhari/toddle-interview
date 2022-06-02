import React, { useRef } from "react";

const OTP = (props) => {
  const {
    value,
    noOfInputs,
    separator,
    placeholder,
    isDisabled,
    isInputSecure,
    isInputNum,
    handleInputChange,
    handleClear,
  } = props;

  const inputRef = useRef([]);

  const handler = (idx) => (e) => {
    console.log(idx, e);
    handleInputChange(e.target.value, idx);
    const next = inputRef.current[idx + 1];
    console.log(next, "next");
    if (e.target.value !== "" && next) {
      next.focus();
    }
  };

  console.log(inputRef);

  return (
    <div>
      <p>Enter the received code</p>
      <div>
        {Array.from(Array(noOfInputs).keys()).map((input) => {
          return (
            <input
              title={input}
              ref={(el) => {
                inputRef.current[input] = el;
              }}
              key={input}
              onChange={handler(input)}
              maxLength={"1"}
              placeholder={"0"}
              value={value[input]}
              type={isInputSecure ? "password" : "text"}
              disabled={isDisabled ? true : false}
            />
          );
        })}
      </div>
      <div>
        <button onClick={handleClear}>Clear</button>
        <button>Verify</button>
      </div>
    </div>
  );
};

OTP.defaultProps = {
  value: ["1", "2", "3", "4"],
  noOfInputs: 4,
  separator: "-",
  placeholder: ["0", "0", "0", "0"],
  isDisabled: false,
  hasError: false,
  isInputNum: false,
  isInputSecure: false,
};

export default OTP;
