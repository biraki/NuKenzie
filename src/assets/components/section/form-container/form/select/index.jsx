import styles from "./styles.module.scss";

export const Select = ({ id, label, value, setValue, children }) => {
  return (
    <div className={styles.container}>
      <label className="text two" htmlFor={id}>
        {label}
      </label>
      <select
        className={`text two ${styles.select}`}
        id={id}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
};
