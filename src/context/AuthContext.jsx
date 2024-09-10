import { Spinner } from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../utils/Firebase";



const AuthContext = createContext()


 function AuthContextProvider({childern}){

    const [User , setUser] = useState({
        islogin : false,
        userInfo : {},

    })

    const [loder , setloder] = useState(true)
    // Handle user state changes
  function onAuthhanged(user) {
    setUser(user);
    console.log("user===>",user);
    
   setloder(false)
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth,onAuthhanged);
    // console.log("subscriber===>",subscriber);
    
    return subscriber; // unsubscribe on unmount
  }, []);


   return (
    <AuthContext.Provider value={{User,setUser}}>
      {
        loder ? (
          <div className="text-center flex items-center justify-center w-full h-full">
            <Spinner />
          </div>
        ) :

        (childern)
          
      }
    </AuthContext.Provider>
   )


}

export default AuthContextProvider;