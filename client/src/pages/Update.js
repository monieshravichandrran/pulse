import React,{useState} from "react";
import Navbar from "../components/Navbar";
import Select from 'react-select';
import axios from "axios"

const Update = () => {
  let x;
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  const [type, setType] = useState("Email");
  const [newValue,setNew]=useState("")
  const formHandler = async(event) => {
    event.preventDefault();
    setError("")
    if (username.length === 0) {
      setError("Enter Username")
    }
    else if (newValue.length==0) {
      setError("Enter the New "+type)
    }
    else {
      const config = {
        body: {
          "Content-Type": "application/json"
        }
      }
      const obj = {
        username: username,
        type: type,
        newValue:newValue
      }
      await axios.post("http://localhost:8000/update", obj, config)
    }
  }
  return (
      <>
        <div className="text-white bg-grey-lighter min-h-screen flex flex-col" style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))",
        }}>
          <Navbar />
          <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="px-6 py-8 rounded shadow-md w-full text-black">
              <h1 className="mb-8 text-3xl text-center text-white">Update Sub-Agent</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="Username"
                onChange={
                  (event) => {
                    setUsername(event.target.value)
                  }
                }
              placeholder="Username" />
              <select class="form-select block w-full mt-1 height-20 p-3 mb-3" onChange={(event)=>{setType(event.target.value)}}>
                <option>Email</option>
                <option>Sub-Agent Name</option>
                <option>Contact Number</option>
              </select>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="New Value"
              onChange={
                (event) => {
                  setNew(event.target.value)
                }
              }
              placeholder="New Value" />
            <div className="flex justify-center text-red-500 text-lg mb-2">
              {error}
            </div>
              <button
                type="submit"
                onClick={formHandler}
                className="w-full text-center py-3 bg-red-500 rounded text-white hover:bg-green-500 focus:outline-none my-1"
              >Update Account</button>
            </div>
          </div>
        </div>
      </>
    )
}

export default Update;