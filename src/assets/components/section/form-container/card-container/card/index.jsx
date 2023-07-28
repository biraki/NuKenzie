import styles from "./styles.module.scss";

export const Card = ({ title, value, type, removeCard, id }) => {
  return (
    <li
      className={`${styles.card} ${
        type === "Entrada" ? styles.green : styles.grey
      }`}
    >
      <h3 className="title three">{title}</h3>
      <div>
        <p className={`text two gray4 ${styles.price}`}>
          {(Number(value) < 0
            ? (value = Number(value) * -1)
            : (value = Number(value))
          ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </p>
      </div>
      <div className={styles.container}>
        <p className="text two gray3">{type}</p>
        <button className="btn sm" onClick={() => removeCard(id)}>
          Excluir
        </button>
      </div>
    </li>
  );
};
