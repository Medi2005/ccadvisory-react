const CrudBtn = (props) => {
  return (
    <>
      <button
        id="1"
        aria-label={props.ariaLabel}
        onClick={props.onClick}
        className="crud-btn"
      >
        {props.icons}
      </button>
    </>
  );
};

export default CrudBtn;
