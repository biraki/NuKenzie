import { useState } from "react";
import { CardContainer } from "./card-container";
import { Form } from "./form";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.scss";

export const FormSection = () => {
  const [cardList, setCardList] = useState([]);

  const addCard = (formData) => {
    const newNote = { ...formData, id: uuidv4() };

    {
      newNote.type === "Saida"
        ? (newNote.value = Number(formData.value) * -1)
        : "";
    }

    setCardList([...cardList, newNote]);
  };

  const removeCard = (removeId) => {
    const newCardList = cardList.filter((card) => card.id !== removeId);
    setCardList(newCardList);
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.container1}>
          <Form addCard={addCard} />
          {cardList.length > 0 ? (
            <div className="container border">
              <div className={styles.container3}>
                <h2 className="title three">Valor Total:</h2>
                <p>
                  {cardList
                    .reduce((prevValue, card) => {
                      return prevValue + Number(card.value);
                    }, 0)
                    .toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </div>
              <p className="text two">O valor se refere ao saldo</p>
            </div>
          ) : (
            ""
          )}
        </section>
        <section className={styles.container2}>
          <CardContainer
            className="container"
            cardList={cardList}
            removeCard={removeCard}
          />
        </section>
      </div>
    </>
  );
};
