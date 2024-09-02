import user from "../../assets/user.jpg";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const CardUser = (props) => {
  return (
    <div className="ml-32 my-8 rounded-lg flex flex-row items-center justify-evenly w-[750px] h-[150px] bg-[#f4f6fc]">
      <div className="flex flex-row gap-11 items-center">
        <img src={user} alt="" className="w-[120px] h-[120px] rounded-full" />
        <div className="flex flex-col gap-1">
          <span className="font-poppins text-[20px] font-bold capitalize">{`M. ${props.prenom} ${props.nom}`}</span>
          <span className="font-poppins text-base">{props.email}</span>
          <span className="font-poppins text-base capitalize">{props.role}</span>
        </div>
      </div>
      <div className="cta">
        <Button 
          icon = {<FontAwesomeIcon icon={faPencil} />}
          name = 'Modifier'
        />
      </div>
    </div>
  );
};

export default CardUser;
