import Header from "./Components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
// import Homepage from "./Pages/Homepage";
// import Customer from "./Pages/Customer";
// import TransferMoney from "./Pages/TransferMoney";
// import TransactionHistory from "./Pages/TransactionHistory";
import Footer from "./Components/Footer";
import React, { Suspense } from "react";

function App() {
  const Homepage = React.lazy(() => import("./Pages/Homepage"));
  const Customer = React.lazy(() => import("./Pages/Customer"));
  const TransferMoney = React.lazy(() => import("./Pages/TransferMoney"));
  const TransactionHistory = React.lazy(() =>
    import("./Pages/TransactionHistory")
  );
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/transfer-money" element={<TransferMoney />} />
            <Route
              path="/transaction-history"
              element={<TransactionHistory />}
            />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
