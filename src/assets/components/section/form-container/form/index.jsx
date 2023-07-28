import { useState } from "react";
import { Input } from "../../../input";
import { Select } from "./select";

export const Form = ({ addCard }) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const submit = (e) => {
    e.preventDefault();
    addCard({ title, value, type });
    setTitle("");
    setValue("");
    setType("Entrada");
  };

  return (
    <form onSubmit={submit} className="container border">
      <Input
        label="Descrição"
        placeholder="Digite aqui sua descriçao"
        id="title"
        type="text"
        value={title}
        setValue={setTitle}
        required={true}
      />
      <p className="text two">Ex: Compra de roupas</p>
      <Input
        label="Valor (R$)"
        placeholder="Digite aqui o valor"
        id="value"
        type="number"
        value={value}
        setValue={setValue}
        required={true}
      />
      <Select label="Tipo de valor" id="type" value={type} setValue={setType}>
        <option value="Entrada">Entrada</option>
        <option value="Saida">Saida</option>
      </Select>
      <button className="btn bg">Inserir valor</button>
    </form>
  );
};
