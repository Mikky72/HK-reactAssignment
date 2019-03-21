import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  render() {
    const comments = this.props.dish.comments.map(comment => {
      return (
        <div className="mb-5" key={comment.id}>
          <h6 className="my-2">{comment.comment}</h6>
          <h6 className="my-2">--{comment.author},{comment.date}</h6>
        </div>
      );
    });

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg
              top
              src={this.props.dish.image}
              alt={this.props.dish.name}
            />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>

        <div className="col-12 col-md-5 m-1">
          <h3>Comments</h3>
          {comments}
        </div>
      </div>
    );
  }
}

export default Dishdetail;