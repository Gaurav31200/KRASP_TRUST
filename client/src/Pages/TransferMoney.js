import React from "react";

export default function TransferMoney() {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitting");
  };
  return (
    <div className="Transfer">
      <form onSubmit={submitHandler}>
        <h1>TRANSFER MONEY</h1>
        <h2>Info</h2>
        <input id="sender" type="text" required placeholder="Sender's Name" />
        <input
          id="rexipient"
          type="text"
          required
          placeholder="Recipient's Name"
        />
        <input id="amount" type="number" required placeholder="Amount" />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}
