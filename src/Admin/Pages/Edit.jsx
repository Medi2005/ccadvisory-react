import { useParams, useNavigate } from "react-router-dom";
import { axiosClient } from "../../api/axios";
import { useEffect, useState } from "react";

const Edit = () => {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isFormSent, setIsFormSent] = useState(false);
  const { ClientId } = useParams();
  const [statuses, setStatuses] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Remplacez l'URL par l'URL correcte de votre API
    axiosClient
      .get("/api/statuses")
      .then((responses) => {
        setStatuses(responses.data);
      })
      .catch((error) => {
        console.error("Il y a eu une erreur!", error);
      });
  }, []);
  useEffect(() => {
    fetchClient();
  }, [ClientId]);
  const fetchClient = async () => {
    try {
      const response = await axiosClient.get(`/api/client/${ClientId}`);
      console.log(response.data);
      if (response.data.length === 0) {
        console.log(`Aucun client trouvé pour cet ID : ${ClientId}`);
        return;
      }
      setNom(response.data.Nom);
      setPrenom(response.data.Prenom);
      setEmail(response.data.Email);
      setPhone(response.data.Phone);
      setPassword(response.data.Password);
      setRepassword(response.data.Password);
      setSelectedStatus(response.data.Status);
    } catch (error) {
      console.log(error);
    }
  };

  const updateClient = async (e) => {
    e.preventDefault();
    const status = selectedStatus;
    console.log(status);
    const Client = { Nom, Prenom, Email, Phone, Password, status };
    try {
      const response = await axiosClient.put(`/api/client/${ClientId}`, Client);
      console.log(response.data);
      setIsFormSent(true);
      setTimeout(() => {
        navigate("/admin/tousClients");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
      {isFormSent ? (
        <div
          className="bg-green-100 text-center rounded-lg w-[464px] py-3 px-4 text-base text-green-700 mb-3"
          role="alert"
        >
          Le client a été bien modifié.
        </div>
      ) : (
        ""
      )}
      <h1 className="font-Montserrat text-[24px] font-bold border-b-[1px] border-black">
        Modifier le client
      </h1>
      <div>
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={updateClient}
        >
          {/* onSubmit={} */}
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-col font-poppins capitalize">
              <label htmlFor="prenom">prenom</label>
              <input
                type="text"
                name="prenom"
                value={Prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="prenom"
                className="py-2 pl-7 outline-none border-0 bg-SPETROL rounded-md border-black border-solid placeholder:capitalize focus:border focus:placeholder:text-transparent placeholder:text-white"
              />
            </div>
            <div className="flex flex-col font-poppins capitalize">
              <label htmlFor="nom">nom</label>
              <input
                type="text"
                name="nom"
                value={Nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="nom"
                className="py-2 pl-7 outline-none border-0 bg-SPETROL rounded-md border-black border-solid placeholder:capitalize focus:border focus:placeholder:text-transparent placeholder:text-white"
              />
            </div>
          </div>
          <div className="flex flex-col capitalize">
            <label htmlFor="email">email</label>
            <input
              type="text"
              placeholder="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="py-2 pl-7 w-[464px] bg-SPETROL outline-none placeholder:text-white rounded-md border-0 border-black border-solid placeholder:capitalize focus:border"
            />
          </div>
          <div className="flex flex-col capitalize">
            <label htmlFor="phone">numero de telephone</label>
            <input
              type="tel"
              name="phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="numero de telephone"
              className="py-2 pl-7 w-[464px] bg-SPETROL outline-none placeholder:text-white rounded-md border-0 border-black border-solid placeholder:capitalize focus:border"
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-col font-poppins capitalize">
              <label htmlFor="password">mot de passe</label>
              <input
                type="password"
                name="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="mdp"
                className="py-2 pl-7 outline-none border-0 bg-SPETROL rounded-md border-black border-solid placeholder:capitalize focus:border focus:placeholder:text-transparent placeholder:text-white"
              />
            </div>
            <div className="flex flex-col font-poppins capitalize">
              <label htmlFor="repassword">confirmer mot de passe</label>
              <input
                type="password"
                placeholder="confirmer mdp"
                name="repassword"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
                className="py-2 pl-7 outline-none border-0 bg-SPETROL rounded-md border-black border-solid placeholder:capitalize focus:border focus:placeholder:text-transparent placeholder:text-slate-100"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-col font-poppins capitalize">
              <select
                id="status"
                name="status"
                className="py-2 pl-7 w-[222px] outline-none border-0 bg-SPETROL rounded-md border-black border-solid placeholder:capitalize focus:border focus:placeholder:text-transparent placeholder:text-white"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">Sélectionnez un statut</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col font-poppins capitalize">
              <input
                type="submit"
                value="Enregistrer"
                className="bg-SFPETROL py-2 pl-7 w-[222px] text-center leading-[1.5] cursor-pointer rounded-lg text-white uppercase font-poppins font-semibold"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
