import { useState } from "react";

const FormUp = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [formData, setFormData] = useState({
    sujet: "",
    description: "",
    requisPar: "",
    dateEnvoi: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const clearInputs = () => {
    setFormData({
      sujet: "",
      description: "",
      requisPar: "",
      dateEnvoi: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <span className={`${props.sujetdisplay} flex flex-col`}>
        <label htmlFor="">Sujet</label>
        <input
          type="text"
          name="sujet"
          value={formData.sujet}
          id=""
          className="w-80 py-2 outline-none border-[1px] border-solid border-black rounded-md pl-6 bg-DeepDaigi"
          placeholder="Sujet"
          onChange={handleChange}
        />
      </span>
      <span className={`${props.txterea} flex flex-col`}>
        <label htmlFor="">Description</label>
        <textarea
          name="description"
          placeholder="Ajouter une description"
          value={formData.description}
          id=""
          cols="30"
          onChange={handleChange}
          className="w-80 py-2 outline-none border-[1px] border-solid border-black rounded-md pl-6 bg-DeepDaigi"
        ></textarea>
      </span>
      <span className={`${props.requisPar} flex flex-col`}>
        <label htmlFor="">Requis Par</label>
        <input
          type="text"
          name="requisPar"
          value={formData.requisPar}
          id=""
          className="w-80 py-2 outline-none border-[1px] border-solid border-black rounded-md pl-6 bg-DeepDaigi"
          placeholder="requis Par"
          onChange={handleChange}
        />
      </span>
      <span className={`${props.datedisplay} flex flex-col`}>
        <label htmlFor="">Date Envoi</label>
        <input
          type="date"
          name="dateEnvoi"
          value={formData.dateEnvoi}
          id=""
          onChange={handleChange}
          className="w-80 py-2 outline-none border-[1px] border-solid border-black rounded-md pl-6 bg-DeepDaigi"
        />
      </span>
      <span className="flex flex-row items-center gap-5">
        <input
          type="submit"
          value="envoyer"
          className="capitalize bg-SFPETROL w-[112px] py-3 rounded-md cursor-pointer text-white text-sm font-poppins font-bold"
        />
        <p
          className="capitalize border-b-[1px] border-black border-solid cursor-pointer"
          onClick={clearInputs}
        >
          clair
        </p>
      </span>
    </form>
  );
};

export default FormUp;
