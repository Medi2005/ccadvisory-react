// import { Navigate } from "react-router-dom";
// import { useUserContext } from "../Context/contextUser"; // Adjust the import path if needed

// const ProtectedRoute = ({ element, restricted, ...rest }) => {
//   const { authenticated } = useUserContext();

//   // Redirect authenticated users away from restricted routes (e.g., login page)
//   if (restricted && authenticated) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   // Redirect unauthenticated users away from non-restricted routes (e.g., dashboard)
//   if (!restricted && !authenticated) {
//     return <Navigate to="/login" />;
//   }

//   return element;
// };

// export default ProtectedRoute;