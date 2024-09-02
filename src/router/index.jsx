import { createBrowserRouter } from "react-router-dom";
import Services from "../Admin/Pages/Services";
import Layout from "../Admin/Layout/Layout";
import Dashboard from "../Admin/Pages/Dashboard";
import Parametres from "../Admin/Pages/Parametres";
import Assistance from "../Admin/Pages/assistance";
import NouveauClient from "../Admin/Pages/NouveauClient";
import TousClient from "../Admin/Pages/TousClients";
import ImportFile from "../Admin/Pages/importerFichier";
import SuiviFichier from "../Admin/Pages/SuiviFichier";
import Login from "../Admin/Pages/login";
import Edit from "../Admin/Pages/Edit";
import AjouterUser from "../Admin/Pages/AjouterUser";
import ImporterFichier from "../Admin/Pages/importerFichier";
import GuestLayout from "../Admin/Layout/GuestLayout";
// import ProtectedRoute from "./protectedRoutes";
import ClientLayout from "../Client/Layout/ClientLayout";
import Home from "../Client/Pages/Home";
import EnvoyerDemande from '../Client/Pages/EnvoyerDemande';
import SuiviDemande from "../Client/Pages/SuiviDemande";
import AssistanceClient from "../Client/Pages/AssistanceClient";
import ClientParameters from "../Client/Pages/ClientParameters";
import ClientNotFound from "../Client/Pages/ClientNotFound";
import NotFound from "../Admin/Pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <ClientLayout />,
    children: [
      {
        path: "*",
        element: <ClientNotFound />,
      },
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/DemandeFichier",
        element: <EnvoyerDemande />,
      },
      {
        path: "/Suivi_MesDemandes",
        element: <SuiviDemande />,
      },
      {
        path: "assistance",
        element: <AssistanceClient />,
      },
      {
        path: "/parametres",
        element: <ClientParameters />,
      },
    ],
  },

  {
    element: <Layout />,
    children: [
      {
        path: "/admin/dashboard",
        element:  <Dashboard /> ,
      },
      {
        path: "/admin/services",
        element:  <Services /> ,
      },
      {
        path: "/admin/parametres",
        element:  <Parametres /> ,
      },
      {
        path: "/admin/assistance",
        element:  <Assistance /> ,
      },
      {
        path: "/admin/nouveauClient",
        element: (
           <NouveauClient /> 
        ),
      },
      {
        path: "/admin/tousClients",
        element:  <TousClient /> ,
      },
      {
        path: "/admin/importerFichier",
        element:  <ImportFile /> ,
      },
      {
        path: "/admin/SuiviFichier",
        element: (
           <SuiviFichier /> 
        ),
      },
      {
        path: "/admin/SuiviFichier/edit",
        element: (
           <ImporterFichier /> 
        ),
      },
      {
        path: `/admin/Edit-client/:ClientId`,
        element:  <Edit /> ,
      },
      {
        path: "/admin/add-client",
        element: (
           <AjouterUser /> 
        ),
      },
    ],
  },
]);
