import React from "react";
import { useSelector } from "react-redux";

const UserDetailsPop = ({ id, users, setShowPopup }) => {
  //const selector = useSelector((state) => state.app.users);
  //console.log(users);
  const currentData = users.filter((user) => user.id === id);
  //console.log(currentData);
  return (
    <div className="fixed z-40 w-1/2 h-1/2 inset-0 bg-neutral-500 m-auto rounded-lg shadow-2xl ">
      <button
        onClick={() => setShowPopup(false)}
        className="flex items-center m-auto"
      >
        Close
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path
            fill="#F44336"
            d="M21.5 4.5H26.501V43.5H21.5z"
            transform="rotate(45.001 24 24)"
          ></path>
          <path
            fill="#F44336"
            d="M21.5 4.5H26.5V43.501H21.5z"
            transform="rotate(135.008 24 24)"
          ></path>
        </svg>
      </button>
      <h2>Name: {currentData[0].name}</h2>
      <h2>Age: {currentData[0].age}</h2>
      <h2>Gender: {currentData[0].gender}</h2>
      <h2>Email: {currentData[0].email}</h2>
    </div>
  );
};

export default UserDetailsPop;
