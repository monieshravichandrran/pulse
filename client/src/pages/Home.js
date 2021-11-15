import React from "react"
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen" style={{
        background:
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))",
      }}>
        <Navbar />
      </div> 
    </>
    )
}

export default Home;