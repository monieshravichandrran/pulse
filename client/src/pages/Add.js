import React, { useState } from "react"
import Navbar from "../components/Navbar";
import axios from "axios"

const Add = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
    const [confirmpswd, setConfirmpswd] = useState("")
    const [subagent, setSubagent] = useState("")
    const [phone, setPhone] = useState("")
    const [error, setError] = useState("")
    const formHandler = async(event) => {
        event.preventDefault()
        setError("")
        if (username.length === 0) {
            setError("Enter Username")
        }
        else if (email.length === 0) {
            setError("Enter Email")
        }
        else if (pswd.length === 0) {
            setError("Enter Password")
        }
        else if (confirmpswd.length === 0) {
            setError("Confirm your Password")
        }
        else if (subagent.length === 0) {
            setError("Enter Sub-Agent")
        }
        else if (phone.length === 0) {
            setError("Enter Contact Number")
        }
        else if (pswd !== confirmpswd) {
            setError("Passwords don't match")
        }
        else {
            const config = {
                body: {
                    "Content-Type": "application.json"
                }
            }
            const obj = {
                username: username,
                email: email,
                password: pswd,
                subagent: subagent,
                phone: phone
            }
            await axios.post("http://localhost:8000/add",obj,config)
        }
    }
    return (
        <>
            <div className="text-white bg-grey-lighter min-h-screen flex flex-col" style={{
                background:
                    "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))",
            }}>
                <Navbar/>
                <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="px-6 py-8 rounded shadow-md w-full text-black">
                        <h1 className="mb-8 text-3xl text-center text-white">Create Sub-Agent</h1>
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
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="mail"
                            onChange={
                                (event) => {
                                    setEmail(event.target.value)
                                }
                            }
                            placeholder="Email" />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            onChange={
                                (event) => {
                                    setPswd(event.target.value)
                                }}
                            placeholder="Password" />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            onChange={
                                (event) => {
                                    setConfirmpswd(event.target.value)
                                }
                            }
                            placeholder="Confirm Password" />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="subagent"
                            onChange={
                                (event) => {
                                    setSubagent(event.target.value)
                                }
                            }
                            placeholder="Sub-Agent Name" />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="phone"
                            onChange={
                                (event) => {
                                    setPhone(event.target.value)
                                }
                            }
                            placeholder="Contact Number" />
                        <div className="flex justify-center text-red-500 text-lg mb-2">
                            {error}
                        </div>
                        <button
                            type="submit"
                            onClick={formHandler}
                            className="w-full text-center py-3 bg-red-500 rounded text-white hover:bg-green-500 focus:outline-none my-1"
                        >Create Account</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add;