import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtRobotoBold18: "font-bold font-roboto",
  txtInterBold14: "font-bold font-inter",
  txtInterBold25: "font-bold font-inter",
  txtInterBold16: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtRobotoBold40: "font-bold font-roboto",
  txtInterBold40: "font-bold font-inter",
  txtInterBold30: "font-bold font-inter",
  txtRobotoRegular14: "font-normal font-roboto",
  txtInterExtraBold24: "font-extrabold font-inter",
  txtInterBold70: "font-bold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtRobotoBold24: "font-bold font-roboto",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
