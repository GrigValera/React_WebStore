import React, { useState } from "react";
import Button from '../UI/Button/Button';

export default function InquiryForm({ productId, onClose }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вопрос по товару ${productId}: ${question}`);
    setQuestion("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ваш вопрос:
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </label>
      <div style={{ marginTop: "8px" }}>
        <Button type="submit">Отправить</Button>
        <Button
          variant="secondary"
          onClick={onClose}
          style={{ marginLeft: "8px" }}
        >
          Закрыть
        </Button>
      </div>
    </form>
  );
}
