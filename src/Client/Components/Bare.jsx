import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Bare = () => {
  const [showDossierSubmenu, setShowDossierSubmenu] = useState(false);


  const toggleDossierSubmenu = () => {
    setShowDossierSubmenu(!showDossierSubmenu);
  };
  return (
    <div>
      <ul className="pl-0 w-full flex flex-col font-IBMPlex">
        <li className="hover:bg-hclo iilist">
          <Link to={"/dashboard"} className="link">
            <FontAwesomeIcon icon={faBorderAll} className="text-white size-5" />
            <p>dashboard</p>
          </Link>
        </li>
        <li className="hover:bg-hclo iilist">
          <span
            onClick={(e) => {
              e.preventDefault();
              toggleDossierSubmenu();
            }}
          >
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="text-white size-5"
            />
            <p>dossier</p>
          </span>
          <ul className={`subMenu ${showDossierSubmenu ? "show" : ""}`}>
            <li>
              <Link to={"/DemandeFichier"}>
                <p>Demande</p>
              </Link>
            </li>
            <li>
              <Link to={"/Suivi_MesDemandes"}>
                <p>Suivi</p>
              </Link>
            </li>
          </ul>
        </li>
        <li className="hover:bg-hclo iilist">
          <Link to={"/assistance"} className="link">
            <FontAwesomeIcon icon={faMessage} className="text-white size-5" />
            <p>assistance</p>
          </Link>
        </li>
        <li className="hover:bg-hclo iilist">
          <Link to={"/parametres"} className="link">
            <FontAwesomeIcon icon={faGear} className="text-white size-5" />
            <p>paramètres</p>
          </Link>
        </li>
        <li className="hover:bg-hclo iilist">
          <Link to={""} className="link">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="text-white size-5"
            />
            <p>déconnexion</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Bare;
