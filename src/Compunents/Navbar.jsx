import React, { useContext } from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem,  Button, Avatar} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth/web-extension";
import { auth } from "../utils/Firebase";
import Swal from "sweetalert2";





export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function App() {

 const {User , setUser } = useContext(AuthContext)

 async function handleLogOut(){

 await Swal.fire({
    title: "You sure",
    
    icon: "question",
    showCancelButton: true
  }).then((result)=>{
    if(result.isConfirmed){
      Swal.fire("Account has Sign Out", "", "success");
      signOut(auth)
    }
  });

  }
  
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to={'/'} aria-current="page" color="warning">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
       
      <NavbarContent justify="end">
       {
        User?.islogin ?
        <div className="my-2 flex items-center justify-center">
          <h1 >{User?.userInfo.email}</h1>
        </div>
        :

        <NavbarItem className="hidden lg:flex">
          <Link to={'/SignIn'}>Login</Link>
        </NavbarItem>

       }

        {
          User?.islogin ?
          <Avatar src={User?.userInfo.Photo}  size="md"/>
          :

        <NavbarItem>
          <Button to={'/Signup'} as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        }

        {
          User?.islogin ?
          <Button color="primary" variant="light" onClick={handleLogOut}>
           Log Out
           </Button>
          :
          ''
        }
        </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
