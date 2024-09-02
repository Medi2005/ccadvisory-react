import Button from "./Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const Importer = () => {
  const [fileList, setFileList] = useState([]);
  const onfiledrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList)
    }
  };
  return (
    <>
      <div className="relative w-72 h-72 border-[1px black solid] flex items-center flex-col gap-2 justify-center border-black border-dashed border-[1px] bg-[#e9e7e7]">
        <span>
          <FontAwesomeIcon
            icon={faCloudArrowUp}
            className="size-24 text-Orochimaru"
          />
        </span>
        <span className="font-poppins uppercase font-normal text-base text-center ">
          Déposez les fichiers pour les <br />
          télécharger ou
        </span>
        <span>
          <Button
            name="parcourir les fichiers"
            bgcolor="bg-SFPETROL"
            radius="rounded-[5px]"
            txtcolor="text-white"
            txttrans="uppercase"
          />
        </span>
        <input
          type="file"
          name=""
          id="fileinput"
          className="absolute w-full h-full opacity-0"
          multiple
        />
      </div>
    </>
  );
};

export default Importer;
