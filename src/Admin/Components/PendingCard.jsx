const PendingCard = (props) => {
  return (
    <div className="w-990 h-50 flex flex-row items-center rounded-med font-poppins overflow-hidden bg-SILVERLAKE text-sm">
      <div className="w-64 h-full flex flex-row items-center gap-4 pl-10">
        <img src={props.image} alt="" className="w-9 h-9 rounded-full object-cover object-center" />
        <p>{props.fullName}</p>
      </div>
      <p className="w-64 h-full items-center flex px-5">{props.subject}</p>
      <p className="w-100 h-full px-5 flex items-center">{props.service}</p>
      <p className="w-32 h-full flex items-center p-5">{props.requestDate}</p>
      <p className="w-100 h-full flex items-center justify-center uppercase text-exp">
        {props.statut}
      </p>
      <p className="w-36 h-full flex items-center justify-center">
        {props.file}
      </p>
    </div>
  );
};

export default PendingCard;
