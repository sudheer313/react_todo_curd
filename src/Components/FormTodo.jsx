import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function FormTodo({ addTodotask }) {
  const [value, setValue] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodotask(value);
    setValue("");
  };

  return (
    <Form onSubmit={handlesubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button varient="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormTodo;
