export const Button = (props) => {
  return (
    <button
      type={props?.type}
      className={`flex items-center justify-center rounded-md hover:brightness-90 ${props?.margin} ${props?.color} ${props?.padding}`}
    >
      {props?.text}
    </button>
  );
};
