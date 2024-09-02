import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { axiosClient } from "../../api/axios";
import { useEffect, useRef, useState } from "react";
import { useUserContext } from "../../Context/contextUser";
import clientApi from "../../Services/Client/clientApi";
import { useNavigate } from "react-router-dom";
// import Logo from "../assets/logo.png";

const Login = () => {
  const [errors, setErrors] = useState([]);
  const emailField = useRef();
  const passwordField = useRef();
  const [isFormSent, setIsFormSent] = useState(false);
  const navigate = useNavigate();
  const context = useUserContext();

  useEffect(() => {
    if (context.authenticated) {
      navigate("/admin/dashboard");
    }
  }, [context.authenticated, navigate]);

  const validateForm = () => {
    const emailValue = emailField.current.value;
    const passwordValue = passwordField.current.value;
    let isFormValid = true;
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
    // const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (passwordValue.trim() === "") {
      setErrors((prevState) => {
        return [...prevState, "Le mot de passe required"];
      });
      isFormValid = false;
      // } else if (!passwordPattern.test(passwordValue)) {
      //   setErrors((prevState) => {
      //     return [
      //       ...prevState,
      //       "Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre et un chiffre.",
      //     ];
      //   });
      isFormValid = false;
    }
    return isFormValid;
  };
  const clairForm = () => {
    emailField.current.value = "";
    passwordField.current.value = "";
  };
  const sentForm = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setErrors([]);

        const email = emailField.current.value;
        const password = passwordField.current.value;

        await context
          .login(email, password)
          .then((result) => {
            if (result.status === 204) {
              // window.localStorage.setItem("ACCESS_TOKEN", "test");
              clientApi.getCsrf();
              context.setAuthenticated(true);
              navigate("/admin/dashboard");
            }
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
        await clientApi.getCsrf();
        setIsFormSent(true);
      } catch (error) {
        if (error.response) {
          setErrors([error.response.data.message || "An error occurred"]);
        } else {
          console.error(error);
        }
      }
    }
  };
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center gap-10">
      <div>
        <h1 className="font-IBMPlex text-[26px] tracking-[2px]">c&cadvisory</h1>
      </div>
      <div>
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
            {console.log(errors)}
            <ul>
                {errors.map((error, key) => (
                  <li key={key}>{error}</li>
                ))}
              </ul>
          </div>
        ) : (
          ""
        )}
        <form className="flex flex-col gap-9 items-center" onSubmit={sentForm}>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-poppins text-[16px] pb-2.5 capitalize"
            >
              email
            </label>
            <span
              className="relative w-[350px] h-50 rounded-med bg-Orochimaru"
              id="emailField"
            >
              <span className="absolute left-0 w-50 h-full text-Stieglitz flex items-center justify-center text-[24px]">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                // {...register("emails", {
                //   required: true,
                //   pattern: {
                //     value: /^\S+@\S+\.\S+$/,
                //     message: "Veuillez entrer une adresse email invalide.",
                //   },
                // })}
                ref={emailField}
                id="mail"
                placeholder="Entrer votre email"
                className="absolute right-0 w-[300px] h-full rounded-r-med border-0 outline-none pl-5 font-poppins text-[16px] bg-Orochimaru"
              />
            </span>
            {/* {errors.emails && <span className="text-red-500 text-[12px] font-IBMPlex pt-2">{errors.emails.message}</span>} */}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="font-poppins text-[16px] pb-2.5 capitalize"
            >
              mot de passe
            </label>
            <span className="relative w-[350px] h-50 rounded-med bg-Orochimaru">
              <span className="absolute left-0 w-50 h-full text-Stieglitz flex items-center justify-center text-[24px]">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                // {...register("motpass", {
                //   required: true,
                //   validate: (value) => {
                //     return (
                //       value === "Mulaia123" ||
                //       "Le mot de passe doit contenir au moins 8 caractères."
                //     );
                //   },
                //   // message:
                //   //   "Le mot de passe doit contenir au moins 8 caractères.",
                // })}
                ref={passwordField}
                id="pass"
                placeholder="Entrer votre Mot de Passe"
                className="absolute right-0 w-[300px] h-full rounded-r-med border-0 outline-none pl-5 font-poppins text-[16px] bg-Orochimaru"
              />
            </span>
            {/* {errors.motpass && <span className="text-red-500 text-[12px] font-IBMPlex pt-2">{errors.motpass.message}</span>} */}
          </div>
          <button
            type="submit"
            className="py-4 w-[180px] border-0 rounded-med bg-SFPETROL text-white font-poppins font-[18px] cursor-pointer uppercase"
          >
            se connecter
          </button>
          <a
            href=""
            className="font-poppins font-[16px] text-black uppercase underline-offset-1"
          >
            mot de passe oubliee
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
