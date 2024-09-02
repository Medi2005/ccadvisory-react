// import File from "../Components/File";
// import FormUp from "../Components/FormUp";
// import Importer from "../Components/Importer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../Components/Button";
import { useRef, useState } from "react";

const ImporterFichier = () => {
  const inputSubmitRef = useRef();
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showProgress, setShowProgress] = useState(false);

  const buttonClick = () => {
    inputSubmitRef.current.click();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const uploadedFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (!file) return;
    const filename =
      file.name.length > 12
        ? `${file.name.substring(0, 13)}... .${file.name.split(".")[1]}`
        : file.name;
    const formData = new FormData();
    formData.append("file", files);
    setFiles((prevState) => [...prevState, { name: filename, loading: 0 }]);
    setShowProgress(true);
    setUploadedFiles((prevState) => [
      ...prevState,
      {
        name: file.name,
        size:
          file.size < 1024
            ? `${file.size} Kb`
            : `${(file.size / (1024 * 1024)).toFixed(2)} Mb`,
      },
      // `${(file.size / 1024).toFixed(2)} KB`
    ]);
  };
  return (
    <>
      <div className="w-full h-full flex flex-row gap-14 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row items-center gap-5"
        >
          <div className="">
            <div
              className="border border-dashed border-black flex flex-col px-5 py-5 items-center justify-center gap-2 cursor-pointer"
              onClick={buttonClick}
            >
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                className="size-24 text-Orochimaru"
              />
              <input
                type="file"
                name=""
                id=""
                hidden
                ref={inputSubmitRef}
                onChange={uploadedFile}
                multiple
              />
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
                  onClick={buttonClick}
                />
              </span>
            </div>
            {/* {showProgress && (
              <div className="my-4 py-4 border border-black border-solid bg-SPETROL rounded-xl">
                {files.map((file, index) => (
                  <li
                    className="list-none flex flex-row items-center gap-3"
                    key={index}
                  >
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      className="size-7 text-blue-500"
                    />
                    <div className="flex flex-row items-center gap-3 text-sm">
                      <span>{`${file.name}`}/</span>
                      <span>{`${file.loading}%`}</span>
                      <div className="w-40 h-[6px] rounded-lg bg-plaster">
                        <div
                          className="w-6 h-full bg-blue-500 rounded-lg"
                          style={{ width: `${file.loading}%` }}
                        ></div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            )} */}
            <div className="">
              {uploadedFiles.map((file, index) => (
                <li
                  className="list-none flex flex-row items-center justify-between px-3 my-4 py-2 border border-black border-solid bg-SPETROL rounded-xl"
                  key={index}
                >
                  <div className="flex flex-row gap-5 items-center">
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      className="size-7 text-blue-500"
                    />
                    <div className="flex flex-col text-sm">
                      <span>
                        {file.name.length > 12
                          ? `${file.name.substring(0, 13)}... .${file.name.split(".")[1]}`
                          : file.name}
                      </span>
                      <span>{file.size}</span>
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faCheck} />
                </li>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span className="flex flex-col gap-1 font-poppins capitalize">
              <label htmlFor="sujet">Sujet</label>
              <input
                type="text"
                name="sujet"
                id=""
                className="bg-SPETROL px-4 rounded-lg w-[464px] py-2 outline-none border-0 font-poppins text-base placeholder:text-white placeholder:capitalize"
                placeholder="Sujet..."
              />
            </span>
            <span className="flex flex-col gap-1 font-poppins capitalize">
              <label htmlFor="description">description</label>
              <textarea
                name="description"
                id=""
                cols="50"
                rows="4"
                className="outline-none border-0 rounded-xl bg-SPETROL px-5 py-2 font-poppins text-base placeholder:text-white placeholder:capitalize"
                placeholder="description..."
              ></textarea>
            </span>
            <span className="flex flex-col gap-1 font-poppins capitalize">
              <label htmlFor="service">service</label>
              <select
                name="service"
                id=""
                className="bg-SPETROL py-2 pl-7 rounded-lg font-poppins text-base"
              >
                <option value="">Fiscalité</option>
                <option value="">Juridique</option>
                <option value="">Audit</option>
                <option value="">Expertise Comptable</option>
                <option value="">Consulting</option>
                <option value="">Formation</option>
              </select>
            </span>
            <input
              type="submit"
              value="Envoyer"
              className="bg-SFPETROL uppercase text-white font-medium py-2 w-48 rounded-lg cursor-pointer text-center"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ImporterFichier;
