import React, { useState } from 'react'
import {Button, Input} from "@nextui-org/react";
import { auth } from '../utils/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { db } from '../utils/Firebase';
import { collection , addDoc } from 'firebase/firestore';


// console.log(db);

function SighUp(){
  const navgate = useNavigate()

  const [isVisible, setIsVisible] = useState(false);
  const [Email , SetEmail] = useState('')
  const [User , SetUser] = useState('')
  const [Password , SetPassword] = useState('')
  const [loder , setloder] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible);


  function handleSignUp(){
    setloder(true)

    createUserWithEmailAndPassword(auth, Email, Password)
  .then(async (userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user===>',user);
    setloder(false)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Account has Created",
      showConfirmButton: false,
      timer: 1500
    });

    try{
      const docRef = await addDoc(collection(db, "Users data"), {
        Name: `${User}`,
        email: `${Email}`,
        Password: `${Password}`
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
      
    }
    // navgate('/SignIn')
    SetEmail('')
    SetPassword('')
    SetUser('')
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log('errorCode===>',errorCode);

    const errorMessage = error.message;
    console.log('errorMessage===>',errorMessage);
    setloder(false)
    Swal.fire({
      title: "Oops...",
      text: `ErrorMessage : ${errorMessage}` ,
      icon: "error"
    });

    SetEmail('')
    SetPassword('')
    SetUser('')


    // ..
  });
  }
  

  function Clear(){
    SetUser('')
  }
  
  function ClearEmail(){
    SetEmail('')
  }
    return(

        <>
           <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Create Your Account
        </h2>
        
          {/* Full Name */}
          <div>
            <Input
             isClearable
             type="text"
             label="text"
             value={User}
             onChange={(e)=>{SetUser(e.target.value)}}
             variant="bordered"
             placeholder="Enter your email"
             defaultValue=""
             onClear={Clear}
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
             onClear={ClearEmail}
             className=" w-full px-3 py-2 mt-1"
             />
          </div>

          {/* Password */}
          <div>
          <Input
             isClearable
             type={isVisible ? "text" : "password"}
             label="password"
             value={Password}
             onChange={(e)=>{SetPassword(e.target.value)}}
             variant="bordered"
             placeholder="********"
             defaultValue=""
             endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                  <span className='mx-1 text-sm'>Hide</span>
                ) : (
                  // <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  <span className='mx-1 text-sm'>Show</span>
                  
                )}
              </button>
            }
             
             className=" w-full px-3 py-2 mt-1"
             />
          </div>


          {/* Sign Up Button */}
          <div className="pt-4">
            <Button
              isLoading={loder}
              onClick={handleSignUp}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </Button>
          </div>

      </div>
    </div>
  

        </>
    )
}

export default SighUp;