import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
