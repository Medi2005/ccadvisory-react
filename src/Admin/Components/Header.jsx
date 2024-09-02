import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import user from "../../assets/user.jpg";
import { axiosClient } from "../../api/axios";
import { useState, useEffect } from "react";

const Header = () => {
  const [admin, setAdmin] = useState([]);
  const [nom, setNom] = useState();
  const [error, setError] = useState(null);
  const fetchAdmin = async () => {
    try {
      const response = await axiosClient.get("/api/admin");
      setAdmin(response.data);
      console.log(response.data)
    } catch (error) {
      setError("Erreur lors du chargement des clients.");
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAdmin();
  }, []);
  return (
    <header className="py-2.5 w-screen bg-white flex flex-row items-center justify-evenly overflow-hidden">
      <div className="text-xl font-medium uppercase">c&c advisory</div>
      <div className="w-128 h-50 bg-plaster rounded-2xl">
        <input
          type="search"
          name="search"
          placeholder="recherche"
          className="w-127 h-50 bg-plaster float-left outline-none rounded-l-2xl px-8 capitalize"
        />
        <span className="float-right w-50 h-50 flex items-center rounded-r-2xl justify-center cursor-pointer text-2xl">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="size-5" />
        </span>
      </div>
      <div className="flex flex-row items-center justify-evenly gap-4">
        <FontAwesomeIcon icon={faBell} className="size-6" />
        <div className="h-50 flex flex-row gap-2.5">
          <div className="max-w-52 max-h-50 flex flex-col overflow-hidden text-sm font-poppins">
            {admin.map((admin, index) => (
              <p key={index} className="capitalize">
                {`M. ${admin.Prenom_Admin} ${admin.Nom_Admin}`} <br /> admin
              </p>
            ))}
            {/* <p className="mb-1">{admin ? `${admin.prenom} ${admin.nom}` : 'Chargement...'}</p>
            <p className="mb-1">Admin</p> */}
          </div>
          <img
            src={user}
            alt=""
            className="w-50 h-50 rounded-full object-cover object-center"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
