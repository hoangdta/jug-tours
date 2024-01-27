import { useNavigate, useParams } from "react-router-dom";
import { Form as Formio, submission } from "@formio/react";
import { Container } from "reactstrap";
import "formiojs/dist/formio.full.min.css";

export const GroupFormio = ({ ...formProps }) => {
  const { id } = useParams();
  const groupId = id !== "new" ? id : null;
  const endpoint = groupId ? `/api/group/${groupId}` : "/api/group";
  const method = groupId ? "PUT" : "POST";
  const navigate = useNavigate();
  const handleSubmitFormio = async (submission) => {
    await fetch(endpoint, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission.data),
    });
    navigate("/groups");
  };

  return (
    <Container>
      <Formio {...formProps} onSubmit={handleSubmitFormio} />
    </Container>
  );
};
