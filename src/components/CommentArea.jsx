import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  getComments = () => {
    this.setState({ isLoading: true, isError: false });

    fetch(`${URL}${this.props.bookId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzZGI3NDVjZmRmODAwMTUwY2U1NGUiLCJpYXQiOjE3NDQwMzQ2NzYsImV4cCI6MTc0NTI0NDI3Nn0.fv-qESxOS53IKOFQMLhHb3zm1PQz_gi1kVi_zloxfOA",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel fetch dei commenti");
        }
      })
      .then((data) => {
        this.setState({
          comments: data,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("ERRORE", err);
        this.setState({
          isError: true,
          isLoading: false,
        });
      });
  };

  componentDidMount = () => {
    if (this.props.bookId) {
      this.getComments();
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      this.getComments();
    }
  }

  render() {
    const { comments, isLoading, isError } = this.state;

    if (!this.props.bookId) return null;

    return (
      <div className="p-3 border rounded bg-light">
        <h5 className="text-center mb-3">Commenti</h5>

        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="warning" />
          </div>
        )}

        {isError && (
          <Alert variant="danger" className="text-center">
            Errore nel caricamento dei commenti
          </Alert>
        )}

        {!isLoading && !isError && comments.length === 0 && (
          <p className="text-center text-muted">Nessun commento disponibile.</p>
        )}

        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li key={comment._id} className="mb-2">
              <div className="p-2 border rounded bg-white">
                <strong>Rating:</strong> {comment.rate}/5
                <br />
                <em>{comment.comment}</em>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentArea;
