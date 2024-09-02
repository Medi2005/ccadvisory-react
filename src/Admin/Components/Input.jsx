const Input = (props) => {

  return (
    <div className="flex flex-col gap-1 mb-1">
      <label htmlFor={props.htmlFor} className="text-zinc-400 capitalize font-poppins">{props.label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
