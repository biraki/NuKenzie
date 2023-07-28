import styles from "./styles.module.scss"

export const Input = ({ placeholder, id, type, label, value, setValue, required }) => {
  return (
    <div>
      <label className="text two" htmlFor={id}>{label}</label>
      <input
        className={`text one ${styles.input}`}
        placeholder={placeholder}
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      ></input>
    </div>
  );
};
