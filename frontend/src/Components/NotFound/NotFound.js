import React from "react";

const NotFound = () => {
  const winX = window.innerWidth + "px";
  const winY = window.innerHeight + "px";
  return (
    <div>
      <img
        width={winX}
        height={winY}
        style={{ alignSelf: "center" }}
        src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg?w=2000"
        alt="404"
      />
    </div>
  );
};

export default NotFound;
