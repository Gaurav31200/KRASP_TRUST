import Header from "./Components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Customer from "./Pages/Customer";
import TransferMoney from "./Pages/TransferMoney";
import TransactionHistory from "./Pages/TransactionHistory";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/transfer-money" element={<TransferMoney />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
