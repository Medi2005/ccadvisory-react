import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const InfoPers = ({nom, prenom, email, numeroTel}) => {
  return (
    <div className="ml-32 rounded-lg w-[750px] py-9 bg-[#f4f6fc] flex flex-col p-10 gap-4">
      <div className="flex flex-row items-center justify-between">
        <h1>Information personnel</h1>
        <Button icon={<FontAwesomeIcon icon={faPencil} />} name="Modifier" />
      </div>
      <div className="flex flex-row flex-wrap">
        <div className="w-1/2 flex flex-col pb-5">
          <span className="font-poppins font-thin">Nom</span>
          <span className="font-Grotesk font-medium">{nom}</span>
        </div>
        <div className="w-1/2 flex flex-col pb-5">
          <span className="font-poppins font-thin">Prenom</span>
          <span className="font-Grotesk font-medium">{prenom}</span>
        </div>
        <div className="w-1/2 flex flex-col pb-5">
          <span className="font-poppins font-thin">Email</span>
          <span className="font-Grotesk font-medium">{email}</span>
        </div>
        <div className="w-1/2 flex flex-col pb-5">
          <span className="font-poppins font-thin">numero de telephone</span>
          <span className="font-Grotesk font-medium">{numeroTel}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoPers;
