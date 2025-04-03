import { Component } from "react";
import { Dropdown } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
class CommentArea extends Component {
  state = {
    comments: [],
  };
  getComments = () => {
    fetch(`${URL}${this.props.bookId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWYxZDM4MzRiZjAwMTUwMDA2ZmMiLCJpYXQiOjE3NDI1NDQ2NjksImV4cCI6MTc0Mzc1NDI2OX0.Fe1metoCEo3L7Ffjh8C7qiDWYg7k-4Xjt2Cgh2sRa40",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel sistema ");
        }
      })
      .then((data) => {
        console.log("DATA", data);
        this.setState({
          comments: data,
        });
      })
      .catch((err) => {
        console.log("ERRORE", err);
      });
  };
  componentDidMount = () => {
    console.log("MOUNT");
    this.getComments();
  };
  componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      this.getComments();
    }
  }
  render() {
    return (
      <div>
        <Dropdown className=" text-center" drop="up">
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Visualizza Commenti
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <ul>
              {this.state.comments.map((comment) => (
                <li key={comment._id}>
                  {comment.comment} , Rating: {comment.rate}
                </li>
              ))}
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default CommentArea;
