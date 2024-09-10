import React, { useState } from 'react'
import {Input} from "@nextui-org/react";

function SighUp(){

  const [Email , SetEmail] = useState('')
  const [user , SetUser] = useState('')
  const [Password , SetPassword] = useState('')

    return(

        <>
           <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Create Your Account
        </h2>
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <Input
             isClearable
             type="text"
             label="text"
             value={user}
             onChange={(e)=>{SetUser(e.target.value)}}
             variant="bordered"
             placeholder="Enter your email"
             defaultValue=""
             onClear={() => console.log("input cleared")}
             className=" w-full px-3 py-2 mt-1"
             />
          </div>

          {/* Email */}
          <div>
          <Input
             isClearable
             type="email"
             label="Email"
             value={Email}
             onChange={(e)=>{SetEmail(e.target.value)}}
             variant="bordered"
             placeholder="Enter your email"
             defaultValue=""
             onClear={() => console.log("input cleared")}
             className=" w-full px-3 py-2 mt-1"
             />
          </div>

          {/* Password */}
          <div>
          <Input
             isClearable
             type="password"
             label="password"
             value={Password}
             onChange={(e)=>{SetPassword(e.target.value)}}
             variant="bordered"
             placeholder="********"
             defaultValue=""
             onClear={() => console.log("input cleared")}
             className=" w-full px-3 py-2 mt-1"
             />
          </div>


          {/* Sign Up Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  

        </>
    )
}

export default SighUp;