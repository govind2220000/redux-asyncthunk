import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/slices/userdetails.js";
import UserDetailsPop from "./UserDetailsPop.jsx";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState();
  // useEffect(() => {
  //   dispatch(showUser());
  // }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  console.log(users);
  return (
    <div
      className={`bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg m-auto`}
    >
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          User database
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Details and informations about user.
        </p>
        {showPopup && (
          <UserDetailsPop
            id={id}
            users={users}
            setShowPopup={setShowPopup}
          ></UserDetailsPop>
        )}
      </div>
      {users &&
        users
          .filter((user) => {
            if (searchData.length === 0) {
              return user;
            } else {
              return user.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .map((user) => {
            return (
              <div
                className={`${
                  showPopup ? "blur-md" : "border-t-2 border-teal-800"
                }`}
                key={user.id}
              >
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {user.name}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {user.email}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Gender
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {user.gender}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {user.age}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Testing the Redux toolkit
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <a
                      className="m-2 hover:text-blue-500 cursor-pointer"
                      onClick={() => [setShowPopup(true), setId(user.id)]}
                    >
                      View
                    </a>
                    <Link
                      to={`/edit/${user.id}`}
                      className="m-2 hover:text-blue-500"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => dispatch(deleteUser(user.id))}
                      className="m-2 hover:text-blue-500"
                    >
                      Delete
                    </Link>
                  </div>
                </dl>
              </div>
            );
          })}
    </div>
  );
};

export default Read;
