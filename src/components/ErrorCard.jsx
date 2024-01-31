import React from "react";

const ErrorCard = ({ errorMsg }) => {
  return (
    <div className="flex flex-col">
      <img src="" alt="you ran into a problem" />
      <h2 className="text-center text-red-500 font-lg font-semibold">
        {errorMsg}
      </h2>
    </div>
  );
};

export default ErrorCard;
