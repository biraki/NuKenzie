import { Card } from "./card";
import styles from "./styles.module.scss"

export const CardContainer = ({ cardList, removeCard }) => {
  return (
    <>
      <h2 className="title three">Resumo Financeiro</h2>
      {cardList.length > 0 ? (
        <ul className={styles.container}>
          {cardList.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              value={card.value}
              type={card.type}
              removeCard={removeCard}
              id={card.id}
            />
          ))}
        </ul>
      ) : (
        <h3 className="title two">Você ainda não possui nenhum lançamento</h3>
      )}
    </>
  );
};
