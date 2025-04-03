import { Component } from "react";

const URL = "https://striveschool-api.herokuapp.com/api/comments/:_id";
class CommentArea extends Component {
  state = {
    comments: [
      {
        comment: "",
        rate: "",
        elementId: "",
      },
    ],
  };
  getComments = () => {
    fetch(URL, {
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
          comment: data.comment,
          rate: data.rate,
          elementId: data.elementId,
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
  render() {
    return (
      <span>
        <h6>Commenti</h6>
      </span>
    );
  }
}

export default CommentArea;
