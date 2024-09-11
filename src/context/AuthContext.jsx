import { Spinner } from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../utils/Firebase";



export const AuthContext = createContext()


 function AuthContextProvider({children}){

    const [User , setUser] = useState({
        islogin : false,
        userInfo : {},

    })

    

    const [loder , setloder] = useState(true)
    // Handle user state changes
  function onAuthhanged(user) {
    // console.log('user==>',user);
    
    if(user){
      setUser({islogin : true , userInfo : {
        name : user?.displayName,
        email : user?.email,
        Photo : user?.photoURL
      }})
    }else{
      setUser({islogin : false , userInfo :  ''})

    }
    
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
          <div className="text-center flex items-center justify-center w-full h-96">
            <Spinner />
          </div>
        ) :

        (children)
          
      }
    </AuthContext.Provider>
   )


}

export default AuthContextProvider;