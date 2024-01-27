import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import AppNavbar from "./AppNavbar";
import { GroupFormio } from "./GroupFormio";

const GroupEdit = () => {
  const initialFormState = {
    data: {
      name: "",
      address: "",
      city: "",
      stateOrProvince: "",
      country: "",
      postalCode: "",
    },
  };
  const { id } = useParams();
  const [group, setGroup] = useState(initialFormState);

  useEffect(() => {
    if (id !== "new") {
      fetch(`/api/group/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setGroup({ data: data });
        });
    }
  }, []);

  useEffect(() => {
    if (id !== "new") {
      fetch(`/api/group/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setGroup({ data: data });
        });
    }
  }, [id, setGroup]);

  return (
    <div>
      <AppNavbar />
      <Container>
        <h2> {group?.data.id ? "Edit Group" : "Add Group"} with Formio</h2>
        <GroupFormio
          src={"https://zlecohxfdfgklrf.form.io/createeditgroup"}
          submission={group}
        />
      </Container>
    </div>
  );
};

export default GroupEdit;
