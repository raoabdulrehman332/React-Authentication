import { signInWithPopup , GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../utils/Firebase';
import {Input} from "@nextui-org/react";



export default function SignIn() {

  
  
  const [Email , SetEmail] = useState('')
  const [Password , SetPassword] = useState('')
  
  
  const handleSignInWithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    
    signInWithPopup(auth, provider)
    .then((result) => {
      
    console.log('result==>',result);
    
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log('user==>',user);
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    console.log('error==>',error);
    
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorCode==>',errorCode);
    console.log('errorMessage==>',errorMessage);
    
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  return (
    <>
     
     <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Sign In 
        </h2>
        <form className="space-y-4">


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
             placeholder="Enter your email"
             defaultValue=""
             onClear={() => console.log("input cleared")}
             className=" w-full px-3 py-2 mt-1"
             />
          </div>


          {/* Sign Up Button */}
          <div className="pt-4">
            <button
              // type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>

          </div>
            <h1 className='my-auto mx-2'>OR</h1>

            {/* Sign Up Button */}
          <div className="pt-2">
            <button
              // type="submit"
              onClick={handleSignInWithGoogle}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in with Google
            </button>

          </div>

        </form>
      </div>
    </div>
    </>
  )
}
