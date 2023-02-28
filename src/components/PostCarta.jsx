import React from "react";
import { Card, CardImg } from "react-bootstrap";

export default function PostCarta({
  title,
  content,
  id,
  fecha,
  username,
  usernamepic,
}) {
  return (
    <>
      <br />
      <Card  key={id}>
        <Card.Body>
          <div className="picanduser">
            <CardImg src={usernamepic} />
            <div>
              <Card.Text>{username}</Card.Text>
              <Card.Text style={{ fontSize: "x-small" }}>{fecha}</Card.Text>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
