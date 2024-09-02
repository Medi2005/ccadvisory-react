import Image from "../../assets/client.jpg";
import Image1 from "../../assets/client1.jpg";
import Image2 from "../../assets/client2.jpg";
import PendingCard from "../Components/PendingCard";
import Card from "../Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/contextUser";
import clientApi from "../../Services/Client/clientApi";

const Dashboard = () => {
  const context = useUserContext();
  const navigate = useNavigate();

  // useEffect(() => {
  // //   if (context.authenticated) {
  // //     clientApi.getCsrf().then(() => {
  // //       axiosClient.get("/api/user")
  // //         .then(({ data }) => {
  // //           context.setUser(data);
  // //         })
  // //         .catch((err) => console.log(err));
  // //     });
  // //   } else {
  // //     navigate("/login"); // Redirect to login if not authenticated
  // //   }
  // // }, [context.authenticated]);

  useEffect(() => {
    console.log("Authenticated status:", context.authenticated);
    clientApi.getUser().then(({ data }) => {
      context.setUser(data);
      context.setAuthenticated(true);
      console.log("Authenticated status:", context.authenticated);
      console.log(data);
    }).catch((reason) => {
      context.logout();
      navigate('/login')
    });
  }, []);

  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);
  const fetchClients = async () => {
    try {
      const response = await axiosClient.get("/api/clientActif");
      setClients(response.data);
    } catch (error) {
      setError("Erreur lors du chargement des clients.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);
  const users = [
    {
      image: Image,
      fullName: "Ahmed Rabi",
      subject: "attestations de régularité fiscale.",
      service: "Fiscal",
      requestDate: "02-07-2024",
      status: "Expédier",
      file: "demande.PDF",
    },
    {
      image: Image1,
      fullName: "Fatima El Amrani",
      subject: "établissement de conventions",
      service: "Juridiques",
      requestDate: "01-07-2024",
      status: "Expédier",
      file: "demande1.PDF",
    },
    {
      image: Image2,
      fullName: "Mohamed Najib",
      subject: "Stratégie d'Entreprise",
      service: "Consulting",
      requestDate: "23-06-2024",
      status: "Expédier",
      file: "demande2.PDF",
    },
  ];
  const Cards = [
    {
      iIcon: <FontAwesomeIcon icon={faUserTie} className="size-8 text-white" />,
      title: "Nombre des utilisateurs",
      number: clients.length,
      color: `bg-conton`,
    },
    {
      iIcon: (
        <FontAwesomeIcon
          icon={faFileCircleQuestion}
          className="size-8 text-white"
        />
      ),
      title: "Nombre des fichiers expedier",
      number: 12,
      color: `bg-conton`,
    },
    {
      iIcon: (
        <FontAwesomeIcon
          icon={faFileCircleCheck}
          className="size-8 text-white"
        />
      ),
      title: "Nombre des fichiers traiter",
      number: 11,
      color: `bg-conton`,
    },
  ];
  return (
    <>
      <div className="py-5 flex flex-row items-center justify-evenly">
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
      <div className="font-poppins font-normal px-32 py-12 text-xl block">
        <h2>Les dernières demandes :</h2>
      </div>
      <div className="w-full flex flex-col items-center gap-5">
        {users.map((user, index) => (
          <PendingCard
            key={index}
            image={user.image}
            fullName={user.fullName}
            subject={user.subject}
            service={user.service}
            requestDate={user.requestDate}
            status={user.status}
            file={user.file}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
