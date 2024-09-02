import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faFileExcel } from "@fortawesome/free-regular-svg-icons";

const File = () => {
  return (
    <div className="py-2 px-1 bg-SILVERLAKE flex flex-row items-center rounded-xl">
      <FontAwesomeIcon icon={faFileExcel} className="size-8 mr-4"/>
      <div className="flex flex-col mr-32 items-start">
        <p className="font-poppins font-normal text-[14px] ">demande.pdf</p>
        <p className="font-poppins font-normal text-[14px] ">2Mb</p>
      </div>
      <span>
        <FontAwesomeIcon icon={faX} className="cursor-pointer text-Fluorescent"/>
      </span>
    </div>
  );
};

export default File;
