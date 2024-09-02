import Card from "../Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../../style/style.css";
import ClientsTable from "../Components/ClientsTable";
import Btn from "../Components/Btn";
import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
// import { Pagination } from "@mui/material";

const TousClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectAll, setSelectAll] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} | ${hours}:${minutes}`;
  };

  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
  };

  const fetchClients = async () => {
    try {
      const response = await axiosClient.get("/api/clientActif");
      setClients(response.data);
      console.log(response.data);
    } catch (error) {
      setError("Erreur lors du chargement des clients.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleDeleteSuccess = () => {
    fetchClients(); // Recharger les clients après la suppression
  };

  const Cards = [
    {
      iIcon: <FontAwesomeIcon icon={faUserTie} className="size-8 text-white" />,
      title: "Nombre des utilisateurs",
      number: clients.length, // Dynamique selon le nombre de clients
      color: "bg-conton",
    },
  ];

  if (loading)
    return (
      <p className="flex items-center font-poppins text-xl justify-center w-full h-full">
        Chargement...
      </p>
    );
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="py-5 flex flex-row items-center justify-start pl-32">
        {Cards.map((card, index) => (
          <Card
            key={index}
            color={card.color}
            ico={card.iIcon}
            title={card.title}
            number={card.number}
          />
        ))}
      </div>
      <div className="ml-32 mt-12 w-[950px] flex flex-col gap-1.5">
        <div className="flex flex-row justify-between font-poppins text-white text-base">
          <p className="text-black">Total des Clients</p>
          <span className="w-8 h-8 rounded-full flex items-center justify-center bg-Orochimaru cursor-pointer">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="size-4 text-white"
            />
          </span>
        </div>
        <div className="w-[950px] h-[1px] bg-black"></div>
      </div>
      <div className="flex flex-row ml-32 justify-end gap-6 pt-7 pr-24">
        <Btn id="2" />
      </div>
      <table className="my-7 ml-32">
        <thead className="capitalize">
          <tr>
            <td>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
            </td>
            <td>id</td>
            <td>nom complet</td>
            <td>email</td>
            <td>num telephone</td>
            <td>date Inscription</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <ClientsTable
              key={client.id}
              id={client.id}
              nomComplet={`${client.prenom} ${client.nom}`}
              email={client.email}
              numTelephone={client.phone}
              dateInscription={formatDate(client.created_at)}
              onDeleteSuccess={handleDeleteSuccess}
              selectAll={selectAll} // Passer la fonction de rappel
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TousClients;
