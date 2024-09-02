// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Login from "../Pages/login";
// import { useUserContext } from "../../Context/contextUser";


const GuestLayout = () => {
  // const navigate = useNavigate();
  // const context = useUserContext();

  // useEffect(() => {
  //   // if (window.localStorage.getItem("ACCESS_TOKEN")) {
  //   //   navigate("/");
  //   // }
  //   if (context.authenticated) {
  //     navigate("/");
  //   }
  // });
  return (
    <>
      <Login />
    </>
  );
};

export default GuestLayout;
