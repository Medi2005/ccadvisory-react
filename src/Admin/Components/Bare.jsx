import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Bare = () => {

  const [showClientSubmenu, setShowClientSubmenu] = useState(false);
  const [showDossierSubmenu, setShowDossierSubmenu] = useState(false);

  const toggleClientSubmenu = () => {
    setShowClientSubmenu(!showClientSubmenu);
  };

  const toggleDossierSubmenu = () => {
    setShowDossierSubmenu(!showDossierSubmenu);
  };
  return (
    <ul className="pl-0 w-full flex flex-col font-IBMPlex">
      <li className="hover:bg-hclo iilist">
        <Link to={"/admin/dashboard"} className="link">
          <FontAwesomeIcon icon={faBorderAll} className="text-white size-5" />
          <p>dashboard</p>
        </Link>
      </li>
      <li className="hover:bg-hclo iilist">
        <span onClick={(e) => { e.preventDefault(); toggleClientSubmenu(); }}>
          {/* className="w-full py-5 cursor-pointer flex flex-row gap-3 items-center capitalize text-white pl-10 font-IBMPlex" */}
          <FontAwesomeIcon icon={faUsers} className="text-white size-5" />
          <p>client</p>
        </span>
        <ul className={`submenu ${showClientSubmenu ? 'show' : ''}`}>
          <li>
            <Link to={'/admin/nouveauClient'}>
            <p className="uppercase text-white">Client en attente</p>
            </Link>
          </li>
          <li>
            <Link to={'/admin/tousClients'}>
            <p className="uppercase text-white">clients actifs</p>
            </Link>
          </li>
        </ul>
      </li>
      <li className="hover:bg-hclo iilist">
        <span onClick={(e) => { e.preventDefault(); toggleDossierSubmenu(); }}>
          <FontAwesomeIcon icon={faFolderOpen} className="text-white size-5" />
          <p>dossier</p>
        </span>
        <ul className={`subMenu ${showDossierSubmenu ? 'show' : ''}`}>
          <li>
            <Link to={'/admin/importerFichier'}>
            <p className="uppercase text-white">Importer un fichier</p>
            </Link>
          </li>
          <li>
            <Link to={'/admin/SuiviFichier'}>
            <p className="uppercase text-white">suivi des fichiers</p>
            </Link>
          </li>
        </ul>
      </li>
      <li className="hover:bg-hclo iilist">
        <Link to={"/admin/assistance"} className="link">
          <FontAwesomeIcon icon={faMessage} className="text-white size-5" />
          <p>assistance</p>
        </Link>
      </li>
      <li className="hover:bg-hclo iilist">
        <Link to={"/admin/services"} className="link">
          <FontAwesomeIcon icon={faBriefcase} className="text-white size-5" />
          <p>services</p>
        </Link>
      </li>
      <li className="hover:bg-hclo iilist">
        <Link to={"/admin/parametres"} className="link">
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
  );
};

export default Bare;
