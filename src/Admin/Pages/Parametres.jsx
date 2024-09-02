import CardUser from "../Components/CardUser";
import InfoPers from "../Components/InfoPers";

const Parametres = () => {
  const admin = [
    {
      nom: "Byoud",
      prenom: "Houssam",
      email: "h.byoud@upm.ac.ma",
      numeroTel: "+212-676870926",
      role: "admin"
    },
  ]
  return (
    <>
      {admin.map((admin, index) => (
        <CardUser 
          key= {index}
          prenom = {admin.prenom}
          nom= {admin.nom}
          role={admin.role}
          email={admin.email}
        />
      ))}
      {/* <InfoPers /> */}
      {admin.map((admin, index) => (
        <InfoPers 
          key = {index}
          nom = {admin.nom}
          prenom = {admin.prenom}
          email = {admin.email}
          numeroTel = {admin.numeroTel}
        />
      ))}
    </>
  );
}

export default Parametres;
