

const Button = (props) => {

  return (
    <button
    onClick={props.handleClick}
      className={`border-[1px] rounded ${props.bgcolor} ${props.radius} ${props.txtcolor} ${props.txttrans} border-black px-2 py-2 uppercase flex flex-row gap-3 items-center`}
    >
      {props.icon}
      <span>{props.name}</span>
    </button>
  );
};

export default Button;
