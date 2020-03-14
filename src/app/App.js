import React, { useState } from "react";
import "./custom.scss";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Header from "./components/Header/Header";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [showRegisterForm, setShowRegisterForm] = useState(true);

  const updateShow = data => {
    setShowRegisterForm(data);
  };

  return (
    <Router>
      <Header showRegister={updateShow} />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/pricing" exact component={Pricing} />
        </Switch>
        <RegisterModal show={showRegisterForm} close={updateShow} />
      </Container>
    </Router>
  );
}

export default App;
