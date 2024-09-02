import { axiosClient } from "../../api/axios";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AjouterUser = () => {
  const nomField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  const repasswordField = useRef();
  const prenomField = useRef();
  const phoneField = useRef();
  const [errors, setErrors] = useState([]);
  const [isFormSent, setIsFormSent] = useState(false);

  const [statuses, setStatuses] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");

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
  const navigate = useNavigate();

  const validateForm = async () => {
    const nameValue = nomField.current.value;
    const emailValue = emailField.current.value;
    const passwordValue = passwordField.current.value;
    const repasswordValue = repasswordField.current.value;
    const prenomValue = prenomField.current.value;
    const phoneValue = phoneField.current.value;

    let isFormValid = true;

    if (prenomValue.trim() === "") {
      setErrors((prevState) => {
        return [...prevState, "prenom required"];
      });
      isFormValid = false;
    }

    if (nameValue.trim() === "") {
      setErrors((prevState) => {
        return [...prevState, "Name required"];
      });
      isFormValid = false;
    }

    if (emailValue.trim() === "") {
      setErrors((prevState) => {
        return [...prevState, "Email required"];
      });
      isFormValid = false;
    } else if (!emailValue.match(/^\S+@\S+\.\S+$/)) {
      setErrors((prevState) => {
        return [...prevState, "L'adresse e-mail saisie est incorrecte."];
      });
      isFormValid = false;
    }

    if (phoneValue.trim() === "") {
      setErrors((prevState) => {
        return [...prevState, "phone required"];
      });
      isFormValid = false;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (passwordValue.trim() === "") {
      setErrors((prevState) => {
        return [...prevState, "Le mot de passe required"];
      });
      isFormValid = false;
    } else if (!passwordPattern.test(passwordValue)) {
      setErrors((prevState) => {
        return [
          ...prevState,
          "Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre et un chiffre.",
        ];
      });
      isFormValid = false;
    }

    if (passwordValue !== repasswordValue) {
      setErrors((prevState) => {
        return [
          ...prevState,
          "Veuillez vérifier que les deux mots de passe sont identiques.",
        ];
      });
      isFormValid = false;
    }
    if (repasswordValue.trim() === "") {
      setErrors((prevState) => {
        return [...prevState, "Confirmer le mot de passe required"];
      });
      isFormValid = false;
    }

    return isFormValid;
  };

  const clairForm = () => {
    nomField.current.value = "";
    emailField.current.value = "";
    passwordField.current.value = "";
    repasswordField.current.value = "";
    prenomField.current.value = "";
    phoneField.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (!validateForm()) {
      return;
    } else {
      const Client = {
        Nom: nomField.current.value.trim(),
        Prenom: prenomField.current.value.trim(),
        Email: emailField.current.value.trim(),
        Phone: phoneField.current.value.trim(),
        Password: passwordField.current.value.trim(),
        status: selectedStatus,
      };
      try {
        const response = await axiosClient.post("/api/client", Client);
        console.log(response.data);
        clairForm();
        setIsFormSent(true);
        setTimeout(() => {
          navigate("/admin/tousClients");
        }, 2000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors(["An error occurred while submitting the form."]);
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
      {errors.length > 0 ? (
        <div
          className="bg-red-100 border w-[464px]  border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <h2 className="text-center font-Montserrat font-bold text-xl">
            Message!
          </h2>
          <div className="flex flex-row gap-4">
            <ul>
              {errors.map((error, key) => (
                <li key={key}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      {isFormSent ? (
        <div
          className="bg-green-100 rounded-lg w-[464px] py-3 px-4 text-base text-green-700 mb-3"
          role="alert"
        >
          A simple success alert - check it out!
        </div>
      ) : (
        ""
      )}
      <h1 className="font-Montserrat text-[24px] font-bold border-b-[1px] border-black">
        Ajouter un client
      </h1>
      <div className="">
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-col font-poppins capitalize">
              <label htmlFor="prenom" className="">
                prenom
              </label>
              <input
                ref={prenomField}
                type="text"
                name="prenom"
                placeholder="prenom"
                className="py-2 pl-7 outline-none border-0 bg-SPETROL rounded-md border-black border-solid placeholder:capitalize focus:border focus:placeholder:text-transparent placeholder:text-white"
              />
            </div>
            <div className="flex flex-col font-poppins capitalize">
              <label htmlFor="nom" className="nom">
                nom
              </label>
              <input
                type="text"
                ref={nomField}
                name="nom"
                placeholder="nom"
                className="py-2 pl-7 outline-none border-0 bg-SPETROL rounded-md border-black border-solid placeholder:capitalize focus:border focus:placeholder:text-transparent placeholder:text-white"
              />
            </div>
          </div>
          <div className="flex flex-col capitalize">
            <label htmlFor="" className="">
              email
            </label>
            <input
              type="text"
              ref={emailField}
              placeholder="email"
              name="email"
              className="py-2 pl-7 w-[464px]  bg-SPETROL outline-none placeholder:text-white rounded-md border-0 border-black border-solid placeholder:capitalize focus:border"
            />
          </div>
          <div className="flex flex-col capitalize">
            <label htmlFor="phone" className="">
              numero de telephone
            </label>
            <input
              type="tel"
              ref={phoneField}
              name="phone"
              placeholder="numero de telephone"
              className="py-2 pl-7 w-[464px] bg-SPETROL outline-none placeholder:text-white rounded-md border-0 border-black border-solid placeholder:capitalize focus:border"
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-col font-poppins capitalize">
              <label htmlFor="password" className="">
                mot de passe
              </label>
              <input
                type="password"
                ref={passwordField}
                name="password"
                placeholder="mdp"
                className="py-2 pl-7 outline-none border-0 bg-SPETROL rounded-md border-black border-solid placeholder:capitalize focus:border focus:placeholder:text-transparent placeholder:text-white"
              />
            </div>
            <div className="flex flex-col font-poppins capitalize">
              <label htmlFor="repassword" className="">
                confirmer mot de passe
              </label>
              <input
                type="password"
                ref={repasswordField}
                placeholder="confirmer mdp"
                name="repassword"
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
          {/* <input
            type="submit"
            value="Enregistrer"
            className="bg-SFPETROL py-2 pl-7 w-[464px] cursor-pointer rounded-lg text-white uppercase font-poppins font-semibold"
          /> */}
          {/* <p className="font-poppins uppercase underline pb-1 underline-offset-1 cursor-pointer">
            clair
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default AjouterUser;
