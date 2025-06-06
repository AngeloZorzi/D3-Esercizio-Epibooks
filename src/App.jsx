import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container, Row } from "react-bootstrap";
import history from "./data/history.json";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <Container fluid>
        <h5 className=" text-start my-2  fw-bold">Sezione Romance</h5>
        <BookList books={romance} category="romance" />
      </Container>
      <Container fluid>
        <h5 className=" text-start my-2 fw-bold">Sezione Horror</h5>
        <BookList books={horror} category="horror" />
      </Container>
      <Container fluid>
        <h5 className=" text-start my-2 fw-bold">Sezione Scifi</h5>
        <BookList books={scifi} category="scifi" />
      </Container>
      <Container fluid>
        <h5 className=" text-start my-2 fw-bold">Sezione History</h5>
        <BookList books={history} category="history" />
      </Container>
      <Container fluid>
        <h5 className=" text-start my-2 fw-bold">Sezione Fantasy</h5>
        <BookList books={fantasy} category="fantasy" />
      </Container>

      <MyFooter />
    </>
  );
}

export default App;
