const Card = (props) => {
  return (
    <div className={`w-52 h-16 rounded-lg ${props.color} flex flex-row`}>
      <span className="w-12 h-full flex items-center justify-center">
        {props.ico}
      </span>
      <div className="w-160 h-full flex flex-col justify-center px-1.5 text-white font-poppins">
        <p className="text-xs">{props.title}</p>
        <p className="text-base font-medium">{props.number}</p>
      </div>
    </div>
  );
};

export default Card;
