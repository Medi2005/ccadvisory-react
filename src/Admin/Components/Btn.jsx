import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

const Btn = () => {
  return (
    <>
      <Link to={"/admin/add-client"}>
        <button
          id="1"
          className="border-[1px] border-black px-3 py-2 flex flex-row gap-3 items-center"
        >
          <FontAwesomeIcon icon={faSquarePlus} />
          <span>Créer Client</span>
        </button>
      </Link>

      <button
        id="2"
        className="border-[1px] border-black px-3 py-2 flex flex-row gap-3 items-center"
      >
        <FontAwesomeIcon icon={faCircleDown} />
        <span>Telecharger</span>
      </button>
    </>
  );
};

export default Btn;
