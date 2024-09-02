import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Card from "../Components/Card";
import Button from "../Components/Button";
import DemandesTable from "../Components/DemandesTable";

const SuiviFichier = () => {
  const etat = ["Expedier", "En Traitement", "Completer"];
  const demandes = [
    {
      id: 1,
      NomComplet: "Ahmed Rabi",
      Sujet: "attestations de régularité fiscale.",
      Service: "Fiscal",
      dateEnvoie: "02-07-2024",
      Etat: etat[0],
    },
    {
      id: 2,
      NomComplet: "Fatima El Amrani",
      Sujet: "établissement de conventions",
      Service: "Juridiques",
      dateEnvoie: "01-07-2024",
      Etat: etat[1],
    },
    {
      id: 3,
      NomComplet: "Rachid Berraoui",
      Sujet: "Stratégie d'Entreprise",
      Service: "Consulting",
      dateEnvoie: "23-06-2024",
      Etat: etat[2],
    },
    {
      id: 4,
      NomComplet: "Mohamed Najib",
      Sujet: "établissement de conventions",
      Service: "Juridiques",
      dateEnvoie: "01-06-2024",
      Etat: etat[2],
    },
  ];
  const Cards = [
    {
      color: `bg-conton`,
      iIcon: <FontAwesomeIcon icon={faFile} className="size-8 text-white" />,
      title: "Total Demande",
      number: 13,
    },
    {
      color: `bg-[#ffa500]`,
      iIcon: (
        <FontAwesomeIcon
          icon={faFileCircleExclamation}
          className="size-8 text-white"
        />
      ),
      title: "Demande a traite",
      number: 3,
    },
    {
      color: `bg-[#008000]`,
      iIcon: (
        <FontAwesomeIcon
          icon={faFileCircleCheck}
          className="size-8 text-white"
        />
      ),
      title: "Demande Completer",
      number: 10,
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
      <div className="ml-32 mt-12 w-[950px] flex flex-col gap-1.5">
        <div className="flex flex-row justify-between font-poppins text-white text-base">
          <p className="text-black ">Demandes</p>
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
        <Button icon={<FontAwesomeIcon icon={faTrashCan} />} name="Supprimer" />
        <Button
          icon={<FontAwesomeIcon icon={faFileCirclePlus} />}
          name="Demande"
        />
        <Button
          icon={<FontAwesomeIcon icon={faCircleDown} />}
          name="Telecharger"
        />
      </div>
      <table className="my-7 ml-24">
        <thead className="">
          <th>
            <input type="checkbox" name="" id="" />
          </th>
          <th>id</th>
          <th>Nom Complet</th>
          <th>sujet</th>
          <th>service</th>
          <th>{"date d'envoie"}</th>
          <th>etat</th>
          <th>action</th>
        </thead>
        <tbody>
          {demandes.map((demande, index) => (
            <DemandesTable
              key={index}
              id={demande.id}
              NomComplet={demande.NomComplet}
              Sujet={demande.Sujet}
              Service={demande.Service}
              dateEnvoie={demande.dateEnvoie}
              Etat={demande.Etat}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SuiviFichier;
