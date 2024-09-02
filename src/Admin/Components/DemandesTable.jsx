import {useState} from 'react';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CrudBtn from "./CrudBtn";
import "../../style/style.css";
import Modal from './Modal';

const DemandesTable = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const confirmDelete = () => {
    // Handle delete action here
    closeModal();
  };

  const getClassName = (state) => {
    return state === "Expedier"
      ? "text-blue-500"
      : state === "En Traitement"
      ? "text-orange-500"
      : state === "Completer"
      ? "text-green-500"
      : "";
  };
  return (
    <tr>
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>{props.id}</td>
      <td>{props.NomComplet}</td>
      <td>{props.Sujet}</td>
      <td>{props.Service}</td>
      <td>{props.dateEnvoie}</td>
      <td className={getClassName(props.Etat)}>{props.Etat}</td>
      <td className="flex flex-row-reverse gap-4 items-center">
        <CrudBtn
          icons={
            <FontAwesomeIcon icon={faTrashCan} className="text-Fluorescent" />}
            ariaLabel="Delete"
            onClick={openModal}
        />
        
        <Link to={"/SuiviFichier/edit"}>
          <CrudBtn
            icons={
              <FontAwesomeIcon icon={faPenToSquare} className="text-SFPETROL" />
            }
          />
        </Link>
      </td>
      <Modal
     isOpen={isModalOpen}
     onClose={closeModal}
     onConfirm={confirmDelete}/>
    </tr>
  );
};

export default DemandesTable;
