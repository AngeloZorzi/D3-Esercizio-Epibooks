import { Component, useEffect, useState } from "react";
import { Spinner, Alert, Form, Button } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentArea = function ({ bookId }) {
  //state = {
  //  comments: [],
  //  isLoading: false,
  //  isError: false,
  //};
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(1);

  const getComments = () => {
    setIsLoading(true);

    fetch(`${URL}${bookId}`, {
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
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERRORE", err);
        setIsError(true);
        setIsLoading(true);
      });
  };

  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzZGI3NDVjZmRmODAwMTUwY2U1NGUiLCJpYXQiOjE3NDQwMzQ2NzYsImV4cCI6MTc0NTI0NDI3Nn0.fv-qESxOS53IKOFQMLhHb3zm1PQz_gi1kVi_zloxfOA";

  const postComment = () => {
    const commentToSend = {
      comment: newComment,
      rate: newRating,
      elementId: bookId,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(commentToSend),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nell'invio del commento");
        }
      })
      .then((data) => {
        setNewComment("");
        setNewRating(1);
        getComments();
      })
      .catch((error) => {
        console.error("Errore nell'invio del commento:", error);
        setIsError(true);
      });
  };

  const deleteComment = (commentId) => {
    fetch(`${URL}${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Ricarica la lista dei commenti dopo l'eliminazione
          getComments();
        } else {
          throw new Error("Errore nella cancellazione del commento");
        }
      })
      .catch((err) => {
        console.error("Errore nella DELETE:", err);
        setIsError(true);
      });
  };
  //componentDidMount = () => {
  //  if (this.props.bookId) {
  //    this.getComments();
  //  }
  //};
  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    getComments();
  }, [bookId]);

  //componentDidUpdate(prevProps) {
  //  if (prevProps.bookId !== this.props.bookId) {
  //    this.getComments();
  //  }
  //}

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
              <Button
                variant="danger"
                className=" d-flex justify-content-end"
                size="sm"
                onClick={() => deleteComment(comment._id)}
              >
                <TrashFill />
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <Form className="mt-4">
        <Form.Group className="mb-2">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi un commento..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            value={newRating}
            onChange={(e) => setNewRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={postComment}>
          Invia commento
        </Button>
      </Form>
    </div>
  );
};

export default CommentArea;
