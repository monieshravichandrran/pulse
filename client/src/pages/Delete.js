import React,{useState} from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Delete = () => {
    const [username, setUsername] = useState("")
    const [password, setPswd] = useState("")
    const [error, setError] = useState("")
    const formHandler = async (event) => {
        event.preventDefault();
        setError("")
        if (username.length === 0) {
            setError("Enter Username")
        }
        else if (password.length === 0) {
            setError("Enter Password")
        }
        else {
            const config = {
                body: {
                    "Content-Type": "application/json"
                }
            }
            const obj = {
                username: username,
                password: password
            }
            await axios.post("http://localhost:8000/delete", obj, config)
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
              <h1 className="mb-8 text-3xl text-center text-white">Delete Sub-Agent</h1>
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
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                onChange={
                  (event) => {
                    setPswd(event.target.value)
                  }}
                placeholder="Password" />
              <button
                type="submit"
                onClick={formHandler}
                className="w-full text-center py-3 bg-red-500 rounded text-white hover:bg-green-500 focus:outline-none my-1"
              >Delete Account</button>
              <div className="flex justify-center">
                {error}
              </div>
            </div>
          </div>
        </div>
            
      </>
    )
}

export default Delete;