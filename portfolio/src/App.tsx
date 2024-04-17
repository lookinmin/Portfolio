import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Main } from "./pages/Main";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
