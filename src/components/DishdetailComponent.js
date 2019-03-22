import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const renderComments = comments => {
  if (comments === undefined) {
    return <div />;
  } else {
    const disComments = (
      <ul className="list-unstyled">
        {comments.map(comment => (
          <li className="mb-4" key={comment.id}>
            <h6 className="my-2">{comment.comment}</h6>
            <h6 className="my-2">
              --{comment.author} ,{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit"
              }).format(new Date(Date.parse(comment.date)))}
            </h6>
          </li>
        ))}
      </ul>
    );
    return disComments;
  }
};

const renderDish = dish => {
  if (dish != null)
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h3>Comments</h3>
          {renderComments(dish.comments)}
        </div>
      </div>
    );
  else return <div />;
};

const Dishdetail = props => {
  return <div className="container">{renderDish(props.dish)}</div>;
};

export default Dishdetail;
