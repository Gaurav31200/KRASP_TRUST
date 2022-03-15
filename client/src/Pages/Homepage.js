import React from "react";
import Card from "../Components/Card";

const data = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Wj2cfKMUvS8NuBfidXqNimCkQtx_N2zakw&usqp=CAU",
    title: "View Customers",
    info: "See all our customers here",
    link: "/customers",
  },
  {
    src: "https://icon-library.com/images/money-transfer-icon/money-transfer-icon-22.jpg",
    title: "Transfer Money",
    info: "Transfer your money from here",
    link: "/transfer-money",
  },
  {
    src: "https://pic.onlinewebfonts.com/svg/img_391456.png",
    title: "Transaction History",
    info: "See all the transactions",
    link: "/transaction-history",
  },
];
export default function Homepage() {
  return (
    <div className="Home">
      {data.map((val, key) => {
        return (
          <Card
            src={val.src}
            title={val.title}
            info={val.info}
            key={key}
            path={val.link}
          />
        );
      })}
    </div>
  );
}
