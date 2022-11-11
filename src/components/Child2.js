import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./1.css";
const Child2 = ({ data, deleteData }) => {
  const alertClicked = () => {
    alert("오늘 할일 완료");
  };

  return (
    <div>
      <h1>자식2</h1>
      <div className="list">
        <Card style={{ width: "18rem" }}>
          <Card.Header>할일 목록</Card.Header>
          <ListGroup variant="flush" action onClick={alertClicked}>
            {data.map((todo, index) => {
              return (
                <ListGroup.Item>
                  {todo} <button onClick={() => deleteData(index)}>증가</button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"

        <ListGroup variant="flush" action onClick={alertClicked}>
            {data.map((todo, index) => {
              return (
                <ListGroup.Item>
                  {todo} <button onClick={() => deleteData(index)}>감소</button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card>
        <DropdownButton id="dropdown-basic-button" title="할일 목록">
          <ListGroup variant="flush" action onClick={alertClicked}>
            {data.map((todo, index) => {
              return (
                <ListGroup.Item>
                  {todo} <button onClick={() => deleteData(index)}>👍</button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Child2;