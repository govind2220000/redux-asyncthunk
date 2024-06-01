import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/slices/userdetails.js";

const Update = () => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.app.users);
  const [updatedData, setUpdatedData] = useState();
  const { id } = useParams();
  const currentData = selector.filter((user) => user.id === id);
  const dispatch = useDispatch();
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [age, setAge] = useState(0);
  //   const [gender, setGender] = useState("");
  console.log(currentData);

  useEffect(() => {
    if (id) {
      setUpdatedData(currentData[0]);
      //console.log(currentData);
    }
  }, []);

  console.log(updatedData);
  //console.log(name);

  const newData = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser(updatedData));
    navigate("/read");
  };

  return (
    <div>
      <h4 className="text-4xl m-5">Edit the data</h4>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            onChange={newData}
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={updatedData?.name}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onChange={newData}
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={updatedData?.email}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your age
          </label>
          <input
            onChange={newData}
            type="number"
            id="age"
            name="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={updatedData?.age}
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="mx-1">Gender</label>
          <input
            onChange={newData}
            id="default-radio-1"
            type="radio"
            value="MALE"
            name="gender"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2"
            checked={updatedData?.gender === "MALE"}
          />
          <label
            htmlFor="default-radio-1"
            className=" text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Male
          </label>
          <input
            onChange={newData}
            id="default-radio-2"
            type="radio"
            value="FEMALE"
            name="gender"
            checked={updatedData?.gender === "FEMALE"}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2"
          />
          <label
            htmlFor="default-radio-2"
            className=" text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Female
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
