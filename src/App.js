import React from "react";
import Heading from "./Heading";
import Balance from "./Balance";
import History from "./History";
import AddForm from "./AddForm";
import { GlobalContextProvider } from "./GlobalContext";

import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Heading />
        <Balance />
        <History />
        <AddForm />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
